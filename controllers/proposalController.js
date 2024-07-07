const dbService = require('../services/dbService'); 
const documentService = require('../services/documentService'); 

const documentsDB = dbService.documentsDB;
const documentsMain = dbService.documentsMain;

module.exports = {
	async index(req, res) {
		const proposals = await documentsDB.documents.findMany({
			select: {
				documentID: true,
				documents_metadates: {
				  	select: {
						proposalName: true,
				  	},
				},
			},
		})
		console.log(proposals);

		console.log(req.query.id);
		if(!req.query.id) {
			res.render("mainPage", { 
				proposals: proposals,
				currentForm: 'proposal',
				isEditPage: false
			});
		}
		else {
			const proposal = await documentsDB.documents.findUnique({
				where: {
				  	documentID: parseInt(req.query.id),
				},
				include: {
				  	documents_metadates: true,
				  	document_authors: {
						include: {
					  		authors: true,
						},
				  	},
				  	document_supplements: {
						include: {
					  		supplements: true,
						},
				  	},
				},
			})
			console.log(proposal);

			res.render("mainPage", { 
				proposals: proposals,
				proposal: proposal,
				currentForm: 'proposal',
				isEditPage: true
			});
		}
	},

	async addDocument(req, res) {
		try {
			console.log(1);
			await dbService.saveDocumentData(req.body, req.files);
			console.log(2);
			outputPath = documentService.createWordDocument(req.body, req.files);
			console.log(3);
			res.download(outputPath);
			console.log(4);
		} catch (error) {
			console.error('Ошибка при создании DOCX:', error.message)
			res.status(500).send('Ошибка при создании документа. Обратитесь к администратору.')
		}
	},

	//getDocument
	//editDocument
	//deleteDocument
}
