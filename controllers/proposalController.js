const dbService = require('../services/dbService'); 
const documentService = require('../services/documentService'); 
const fs = require('fs');

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
						  supplements: {
							include: {
							  images: true, // Включаем связанные записи из таблицы images
							},
						  },
						},
					},
				},
			})
			console.log(proposal);

			proposal.document_supplements.forEach(supplement => {
			supplement.supplements.images.forEach(image => {
				console.log(image.image);
				const base64Image = image.image ? image.image.toString('base64') : null; // Здесь исправлено
				const imgSrc = `data:image/png;base64,${base64Image}`;

				image.image = imgSrc;
			});
			});


			
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
			
			const dbDocumentId =  await dbService.saveDocumentData(req.body, req.files);
			console.log(dbDocumentId);
			const documentBuffer = documentService.createDocument(req.body, req.files);
			const resId = await dbService.saveDocumentToDB(documentBuffer, dbDocumentId, req.body.proposalName);

			res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''%D0%A0%D0%9F_${req.body.proposalName}.docx`);
			res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
			res.send(documentBuffer);
			//res.download(outputPath);
		} catch (error) {
			console.error('Ошибка при создании DOCX:', error.message)
			res.status(500).send('Ошибка при создании документа. Обратитесь к администратору.')
		}
	},

	async downloadDocument(req, res) {
		const document = await dbService.getDocumentFromDB(parseInt(req.params.id));
		console.log(document);
		const documentBuffer = document.document_content;
		const documentName = encodeURIComponent(document.name);

		res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''%D0%A0%D0%9F_${documentName}.docx`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.send(documentBuffer);
	},

	async deleteDocument(req, res) {
		await dbService.deleteDocumentFromDB(parseInt(req.params.id));
        res.redirect('/proposal');
	},

	async editDocument(req, res) {
		try {
			const dbDocumentId =  await dbService.editDocumentData(req.body, req.files, parseInt(req.params.id));
			res.redirect('/proposal');
		} catch (error) {
			console.error('Ошибка при создании DOCX:', error.message)
			res.status(500).send('Ошибка при создании документа. Обратитесь к администратору.')
		}
	},
	//editDocument
}
