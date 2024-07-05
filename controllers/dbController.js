const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const documentService = require("../services/documentService");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Inul1234',
    database: 'documents_db'
});

async function saveDocumentData(data, files) {
    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        // Сохранение данных метаданных документа
        const [docResult] = await connection.execute(`
            INSERT INTO documents_metadates (
                orgName, Boss, problemDescription, solution, result, 
                proposalName, infoAboutUseObject, readinessDegree, 
                beneficialEffect, effectDescription, innovation, expediency, 
                tradeSecretRegime, workplaceTradeSecret, fioTradeSecret, 
                industrialSafety, workplaceIndustrialSafety, fioIndustrialSafety, 
                environmentalSafety, workplaceEnvironmentalSafety, fioEnvironmentalSafety
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            data.orgName || null, data.Boss || null, data.problemDescription || null, data.solution || null,
            data.result || null, data.proposalName || null, data.infoAboutUseObject || null,
            data.readinessDegree || null, data.beneficialEffect || null, data.effectDescription || null,
            data.innovation || null, data.expediency || null, data.tradeSecretRegime || null, data.workplaceTradeSecret || null,
            data.fioTradeSecret || null, data.industrialSafety ? 1 : 0, data.workplaceIndustrialSafety || null,
            data.fioIndustrialSafety || null, data.environmentalSafety ? 1 : 0, data.workplaceEnvironmentalSafety || null,
            data.fioEnvironmentalSafety || null
        ]);

        // Получаем ID метаданных для связи с таблицей documents
        const metadataID = docResult.insertId;

        // Сохранение данных документа в таблице documents
        const [documentResult] = await connection.execute(`
            INSERT INTO documents (metadataID) VALUES (?)
        `, [metadataID]);

        // Получаем ID документа для связи с другими таблицами
        const documentID = documentResult.insertId;

        // Сохранение данных авторов и связей с документом
        for (let i = 0; i < data.authorNumbers.length; i++) {
            const authorID = data.authorIDs[i] || null;
            const [authorResult] = await connection.execute(`
                INSERT INTO authors (
                    inDocumentID, authorFIO, authorYearBirth, authorWorkplace,
                    authorWorkPosition, contribution, percentageContribution,
                    authorNumber
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [
                authorID, data.authorFIOs[i] || null, data.authorYearsBirh[i] || null,
                data.authorWorkplaces[i] || null, data.authorWorkPositions[i] || null,
                data.contributions[i] || null, data.percentageContributions[i] || null,
                data.authorNumbers[i] || null
            ]);

            await connection.execute(`
                INSERT INTO document_authors (documentID, authorID) VALUES (?, ?)
            `, [documentID, authorID]);
        }

        const supplements = documentService.createSupplements(data.supplements, files);

// Сохранение данных приложений и связей с документом
        for (const supplement of supplements) {
            for (const image of supplement.images) {
                let imageBuffer = fs.readFileSync(image.image);

                // Сохранение данных приложения в таблице supplements
                const [supplementResult] = await connection.execute(`
            INSERT INTO supplements (name, image, imageName) VALUES (?, ?, ?)
        `, [supplement.name || null, imageBuffer || null, image.imageName || null]);

                const supplementID = supplementResult.insertId;

                await connection.execute(`
            INSERT INTO document_supplements (documentID, supplementID) VALUES (?, ?)
        `, [documentID, supplementID]);

                // Assuming you have imagePath defined somewhere
            }
        }

        await connection.commit();
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}
async function saveDocumentDB(req, res) {
}


module.exports = {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'form.html'));
    },
    saveDocumentData
};
