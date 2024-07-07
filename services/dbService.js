const formatService = require('./formatService'); 

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
        const connection = await sourcePool.getConnection();

		try {
			await connection.beginTransaction();

			const [docResult] = await connection.execute(`
				INSERT INTO documents_metadates (
					orgName, boss, problemDescription, solution, result, 
					proposalName, infoAboutUseObject, readinessDegree, 
					beneficialEffect, effectDescription, innovation, useful, expediency, 
					tradeSecretRegime, workplaceTradeSecret, fioTradeSecret, 
					industrialSafety, workplaceIndustrialSafety, fioIndustrialSafety, 
					environmentalSafety, workplaceEnvironmentalSafety, fioEnvironmentalSafety
				) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			`, [
				data.orgName || null, data.Boss || null, data.problemDescription || null, data.solution || null,
				data.result || null, data.proposalName || null, data.infoAboutUseObject || null,
				data.readinessDegree || null, data.beneficialEffect || null, data.effectDescription || null,
				data.innovation || null, data.useful || null, data.expediency || null, data.tradeSecretRegime || null, data.workplaceTradeSecret || null,
				data.fioTradeSecret || null, data.industrialSafety ? 1 : 0, data.workplaceIndustrialSafety || null,
				data.fioIndustrialSafety || null, data.environmentalSafety ? 1 : 0, data.workplaceEnvironmentalSafety || null,
				data.fioEnvironmentalSafety || null
			]);

			const metadataID = docResult.insertId;

			const [documentResult] = await connection.execute(`
				INSERT INTO documents (metadataID) VALUES (?)
			`, [metadataID]);

			const documentID = documentResult.insertId;

			for (let i = 0; i < data.authorNumbers.length; i++) {
				const authorShortName = calculateShortName(data.authorFIOs[i]);
				console.log(data.authorYearsBirth[i]);
				const [authorResult] = await connection.execute(`
					INSERT INTO authors (
						authorFIO, shortAuthorFIO, authorYearBirth, authorWorkplace,
						authorWorkPosition, contribution, percentageContribution,
						authorNumber
					) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
				`, [
					data.authorFIOs[i] || null,
					authorShortName || null,
					data.authorYearsBirth[i] || null,
					data.authorWorkplaces[i] || null,
					data.authorWorkPositions[i] || null,
					data.contributions[i] || null, 
					data.percentageContributions[i] || null,
					data.authorNumbers[i] || null
				]);

				await connection.execute(`
					INSERT INTO document_authors (documentID, authorID) VALUES (?, ?)
				`, [documentID, authorResult.insertId]);
			}

			// const supplements = documentService.createSupplements(data.supplements, files);

			// for (const supplement of supplements) {
			// 	for (const image of supplement.images) {
			// 		let imageBuffer = fs.readFileSync(image.image);

			// 		const [supplementResult] = await connection.execute(`
			// 			INSERT INTO supplements (name, image, imageName) VALUES (?, ?, ?)
			// 		`, [supplement.name || null, imageBuffer || null, image.imageName || null]);

			// 		await connection.execute(`
			// 			INSERT INTO document_supplements (documentID, supplementID) VALUES (?, ?)
			// 		`, [documentID, supplementResult.insertId]);
			// 	}
			// }

			await connection.commit();
			return documentID;  // Return the documentID for use in saveDocumentToDB
		} catch (error) {
			console.error(error);
			await connection.rollback();
			throw error;
		} finally {
			connection.release();
		} 
    }
}