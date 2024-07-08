const formatService = require('./formatService'); 
const fs = require('fs');

const mysql = require('mysql2/promise');
const { PrismaClient: PrismaClient1 } = require('../prisma/generated/client1');
const { PrismaClient: PrismaClient2 } = require('../prisma/generated/client2');
const documentsDB = new PrismaClient1();
const documentsMain = new PrismaClient2();

const sourceDbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'bkmz2004',
    database: 'documents_db'
};

const targetDbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'bkmz2004',
    database: 'documents_main'
};

const sourcePool = mysql.createPool(sourceDbConfig);
const targetPool = mysql.createPool(targetDbConfig);

function calculateShortName(fullName) {
    // Implement logic to convert full name to short name (e.g., "Фамилия Имя Отчество" -> "Фамилия И. О.")
    if (!fullName) return null;

    const parts = fullName.split(' ');
    if (parts.length < 3) return fullName; // If the format is incorrect, return full name

    const lastName = parts[0];
    const firstName = parts[1].charAt(0);
    const middleName = parts[2].charAt(0);

    return `${lastName} ${firstName}. ${middleName}.`;
}

module.exports = {
    documentsDB,
    documentsMain,

    async saveDocumentData(data, files) {
		
		console.log(data.supplements);

		const supplements = data.supplements === undefined ? [] : formatService.createSupplements(
			data.supplements,
			files
		);
		
		const authors = formatService.createAuthors(
			data.authorNumbers,
			data.authorFIOs,
			data.authorWorkplaces,
			data.authorWorkPositions,
			data.authorYearsBirth,
			data.contributions,
			data.percentageContributions
		);
	
		try {
			// Начинаем транзакцию
			const result = await documentsDB.$transaction(async (documentsDB) => {
				// Создание записи в таблице documents_metadates
				const docMetadata = await documentsDB.documents_metadates.create({
					data: {
						orgName: data.orgName,
						boss: data.boss,
						problemDescription: data.problemDescription,
						solution: data.solution,
						result: data.result,
						proposalName: data.proposalName,
						infoAboutUseObject: data.infoAboutUseObject,
						readinessDegree: data.readinessDegree,
						beneficialEffect: data.beneficialEffect,
						effectDescription: data.effectDescription,
						innovation: data.innovation,
						useful: data.useful,
						expediency: data.expediency,
						tradeSecretRegime: data.tradeSecretRegime,
						workplaceTradeSecret: data.workplaceTradeSecret,
						fioTradeSecret: data.fioTradeSecret,
						industrialSafety: data.industrialSafety,
						workplaceIndustrialSafety: data.workplaceIndustrialSafety,
						fioIndustrialSafety: data.fioIndustrialSafety,
						environmentalSafety: data.environmentalSafety,
						workplaceEnvironmentalSafety: data.workplaceEnvironmentalSafety,
						fioEnvironmentalSafety: data.fioEnvironmentalSafety,
					}
				});
	
				const metadataID = docMetadata.metadataID;
	
				// Создание записи в таблице documents
				const doc = await documentsDB.documents.create({
					data: {
						metadataID: metadataID,
					},
				});
	
				const documentID = doc.documentID;
	
				// Создание записей в таблице authors и документирование их связей
				for (let i = 0; i < authors.length; i++) {
					const author = await documentsDB.authors.create({
						data: {
							authorFIO: authors[i].authorFIO,
							shortAuthorFIO: authors[i].shortAuthorFIO,
							authorYearBirth: parseInt(authors[i].authorYearBirth),
							authorWorkplace: authors[i].authorWorkplace,
							authorWorkPosition: authors[i].authorWorkPosition,
							contribution: authors[i].contribution,
							percentageContribution: parseInt(authors[i].percentageContribution),
							authorNumber: parseInt(authors[i].authorNumber),
						}
					});
	
					await documentsDB.document_authors.create({
						data: {
							documentID: documentID,
							authorID: author.authorID
						}
					});
				}
	
				// Создание записей в таблице supplements и документирование их связей
				for (const supplement of supplements) {
					const supp = await documentsDB.supplements.create({
						data: {
						  	name: supplement.name,
						  	images: {
								create: supplement.images.map(image => ({
							  		image: fs.readFileSync(image.image),
							  		imageName: image.imageName,
								})),
						  	},
						},
						include: {
						  images: true, // Включаем связанные записи для проверки
						},
					});

					await documentsDB.document_supplements.create({
						data: {
							documentID: documentID,
							supplementID: supp.supplementID
						}
					});
				}
	
				return documentID;
			});
			return result;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	async saveDocumentToDB(buffer, dbDocumentId, documentName) {
		try {
			console.log(dbDocumentId);
			const result = await documentsMain.documents.create({
				data : {
					document_content: buffer,
					db_document_id: dbDocumentId,
					name: documentName
				}
			})

			return result.id
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	async getDocumentFromDB(id) {
		try {
			console.log(id)
			const document = await documentsMain.documents.findFirst({
				where : {
					db_document_id: id
				}
			})
			console.log(document);

			return document
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	async editDocumentData(data, files, id) {
		const supplements = data.supplements === undefined ? [] : formatService.createSupplements(
			data.supplements,
			files
		);
	
		const authors = formatService.createAuthors(
			data.authorNumbers,
			data.authorFIOs,
			data.authorWorkplaces,
			data.authorWorkPositions,
			data.authorYearsBirth,
			data.contributions,
			data.percentageContributions
		);
	
		try {
			// Начинаем транзакцию
			await documentsMain.$transaction(async (documentsMain) => {
				// Получить документ по ID
				const document = await documentsDB.documents.findUnique({
					where: {
					documentID: id
					}
				});

				if (!document) {
					throw new Error('Document not found');
				}

				// Обновить метаданные документа
				const docMetadata = await documentsDB.documents_metadates.update({
					where: {
					metadataID: document.metadataID
					},
					data: {
					orgName: data.orgName,
					boss: data.boss,
					problemDescription: data.problemDescription,
					solution: data.solution,
					result: data.result,
					proposalName: data.proposalName,
					infoAboutUseObject: data.infoAboutUseObject,
					readinessDegree: data.readinessDegree,
					beneficialEffect: data.beneficialEffect,
					effectDescription: data.effectDescription,
					innovation: data.innovation,
					useful: data.useful,
					expediency: data.expediency,
					tradeSecretRegime: data.tradeSecretRegime,
					workplaceTradeSecret: data.workplaceTradeSecret,
					fioTradeSecret: data.fioTradeSecret,
					industrialSafety: data.industrialSafety,
					workplaceIndustrialSafety: data.workplaceIndustrialSafety,
					fioIndustrialSafety: data.fioIndustrialSafety,
					environmentalSafety: data.environmentalSafety,
					workplaceEnvironmentalSafety: data.workplaceEnvironmentalSafety,
					fioEnvironmentalSafety: data.fioEnvironmentalSafety,
					}
				});

				// Удалить авторов, связанных с документом
				const authorsToDelete = await documentsDB.document_authors.findMany({
					where: {
					documentID: id
					},
					select: {
					authorID: true
					}
				});

				await documentsDB.document_authors.deleteMany({
					where: {
					documentID: id
					}
				});

				const deleteAuthorsPromises = authorsToDelete.map(async (author) => {
					await documentsDB.authors.delete({
					where: {
						authorID: author.authorID
					}
					});
				});

				await Promise.all(deleteAuthorsPromises);

				// Добавить новых авторов и связи с документом
				for (const authorData of authors) {
					const newAuthor = await documentsDB.authors.create({
					data: {
						authorFIO: authorData.authorFIO,
						shortAuthorFIO: authorData.shortAuthorFIO,
						authorYearBirth: parseInt(authorData.authorYearBirth),
						authorWorkplace: authorData.authorWorkplace,
						authorWorkPosition: authorData.authorWorkPosition,
						contribution: authorData.contribution,
						percentageContribution: parseInt(authorData.percentageContribution),
						authorNumber: parseInt(authorData.authorNumber),
					}
					});

					await documentsDB.document_authors.create({
					data: {
						documentID: id,
						authorID: newAuthor.authorID
					}
					});
				}

				// Удалить supplements и связанные с ними данные
				const supplementsToDelete = await documentsDB.document_supplements.findMany({
					where: {
					documentID: id
					},
					select: {
					supplementID: true
					}
				});

				await documentsDB.document_supplements.deleteMany({
					where: {
					documentID: id
					}
				});

				const deleteSupplementsPromises = supplementsToDelete.map(async (supplement) => {
					await documentsDB.images.deleteMany({
					where: {
						supplementID: supplement.supplementID
					}
					});

					await documentsDB.supplements.delete({
					where: {
						supplementID: supplement.supplementID
					}
					});
				});

				await Promise.all(deleteSupplementsPromises);

				// Добавить новые supplements и связанные с ними images
				for (const supplement of supplements) {
					const newSupplement = await documentsDB.supplements.create({
					data: {
						name: supplement.name,
						images: {
						create: supplement.images.map(image => ({
							image: fs.readFileSync(image.image),
							imageName: image.imageName,
						})),
						},
					},
					include: {
						images: true, // Включаем связанные записи для проверки
					},
					});

					await documentsDB.document_supplements.create({
					data: {
						documentID: id,
						supplementID: newSupplement.supplementID
					}
					});
				}
				});
	
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	async deleteDocumentFromDB(id) {
		try {
			await documentsMain.documents.deleteMany({
				where : {
					db_document_id: id
				}
			})
			
			await documentsDB.$transaction(async (documentsDB) => {
				// Удалить связанные записи в document_authors
				await documentsDB.document_authors.deleteMany({
				  where: {
					documentID: id,
				  },
				});
		  
				// Удалить связанные записи в document_supplements
				const documentSupplements = await documentsDB.document_supplements.findMany({
				  where: {
					documentID: id,
				  },
				  include: {
					supplements: {
					  include: {
						images: true,
					  },
					},
				  },
				});
		  
				// Удалить связанные изображения
				for (const documentSupplement of documentSupplements) {
				  await documentsDB.images.deleteMany({
					where: {
					  supplementID: documentSupplement.supplementID,
					},
				  });
				}
		  
				// Удалить связанные записи в supplements
				await documentsDB.document_supplements.deleteMany({
					where: {
					  documentID: id,
					},
				  });
				  
				await documentsDB.supplements.deleteMany({
				  where: {
					supplementID: {
					  in: documentSupplements.map((ds) => ds.supplementID),
					},
				  },
				});
		  
				// Удалить записи в document_supplements
			
		  
				// Удалить сам документ
				await documentsDB.documents.delete({
				  where: {
					documentID: id,
				  },
				});
		  
				// Если есть связи в documents_metadates, удалите их
				const documentMetadata = await documentsDB.documents.findUnique({
				  where: {
					documentID: id,
				  },
				  select: {
					metadataID: true,
				  },
				});
		  
				if (documentMetadata && documentMetadata.metadataID) {
				  await documentsDB.documents_metadates.delete({
					where: {
					  metadataID: documentMetadata.metadataID,
					},
				  });
				}
			  });
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
	
}