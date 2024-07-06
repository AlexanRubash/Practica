const fs = require('fs')
const path = require('path')
const PizZip = require('pizzip')
const Docxtemplater = require('docxtemplater')
const documentService = require('../services/documentService')

module.exports = {
	async index(req, res) {
		res.render("mainPage", { 
			currentForm: 'act',
		});
	},

	async addDocument(req, res) {
		try {
			const data = req.body;
			const formattedDate = documentService.formatDate(data.date);
			const authors = Array.isArray(data.authors) ? data.authors.join(', ') : data.authors;

			const content = fs.readFileSync(path.resolve('templates/act_template.docx'), 'binary');
			const zip = new PizZip(content);
			const doc = new Docxtemplater(zip, {
				paragraphLoop: true,
				linebreaks: true,
			});

			doc.render({
				actNumber: data.actNumber,
				proposal: data.proposal,
				actFullNumber: data.actFullNumber,
				date: formattedDate,
				authors: authors,
				service: data.service,
				serviceLeader: data.serviceLeader,
				serviceLeaderName: data.serviceLeaderName,
			});

			const buf = doc.getZip().generate({ type: 'nodebuffer' });

			const generatedDir = './generated/acts';
			if (!fs.existsSync(generatedDir)) {
				fs.mkdirSync(generatedDir);
			}

			const fileName = `Акт ${data.actNumber}.docx`;
			const outputPath = path.resolve(generatedDir, fileName);

			fs.writeFileSync(outputPath, buf);

			res.download(outputPath);
		} catch (error) {
			console.error('Ошибка при создании DOCX:', error.message)
			res.status(500).send('Ошибка при создании документа. Обратитесь к администратору.')
		}
	},

	//getDocument
	//editDocument
	//deleteDocument
}
