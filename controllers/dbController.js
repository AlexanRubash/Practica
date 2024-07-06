const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const ImageModule = require('docxtemplater-image-module-free');
const documentService = require("../services/documentService");

const sourceDbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Inul1234',
    database: 'documents_db'
};

const targetDbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Inul1234',
    database: 'documents_main'
};

const sourcePool = mysql.createPool(sourceDbConfig);
const targetPool = mysql.createPool(targetDbConfig);

async function saveDocumentData(data, files) {
    const connection = await sourcePool.getConnection();

    try {
        await connection.beginTransaction();

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

        const metadataID = docResult.insertId;

        const [documentResult] = await connection.execute(`
            INSERT INTO documents (metadataID) VALUES (?)
        `, [metadataID]);

        const documentID = documentResult.insertId;

        for (let i = 0; i < data.authorNumbers.length; i++) {
            // Calculate authorShortName from authorFIO
            const authorShortName = calculateShortName(data.authorFIOs[i]); // Implement this function

            const [authorResult] = await connection.execute(`
                INSERT INTO authors (
                    inDocumentID, authorFIO, shortAuthorFIO, authorYearBirth, authorWorkplace,
                    authorWorkPosition, contribution, percentageContribution,
                    authorNumber
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [
                data.authorIDs[i] || null, data.authorFIOs[i] || null, authorShortName || null, data.authorYearsBirth[i] || null,
                data.authorWorkplaces[i] || null, data.authorWorkPositions[i] || null,
                data.contributions[i] || null, data.percentageContributions[i] || null,
                data.authorNumbers[i] || null
            ]);

            await connection.execute(`
                INSERT INTO document_authors (documentID, inDocumentID, authorID) VALUES (?, ?, ?)
            `, [documentID, data.authorIDs[i], authorResult.insertId]);
        }

        const supplements = documentService.createSupplements(data.supplements, files);

        for (const supplement of supplements) {
            for (const image of supplement.images) {
                let imageBuffer = fs.readFileSync(image.image);

                const [supplementResult] = await connection.execute(`
                    INSERT INTO supplements (name, image, imageName) VALUES (?, ?, ?)
                `, [supplement.name || null, imageBuffer || null, image.imageName || null]);

                await connection.execute(`
                    INSERT INTO document_supplements (documentID, supplementID) VALUES (?, ?)
                `, [documentID, supplementResult.insertId]);
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

async function fetchDocumentData() {
    const connection = await sourcePool.getConnection();

    const [documentRows] = await connection.query('SELECT * FROM documents_metadates ORDER BY timestamp DESC LIMIT 1');
    if (documentRows.length === 0) {
        throw new Error("No documents found.");
    }
    const documentID = documentRows[0].metadataID;

    const [authorRows] = await connection.query('SELECT * FROM authors WHERE authorID IN (SELECT authorID FROM document_authors WHERE documentID = ?)', [documentID]);
    const [supplementRows] = await connection.query('SELECT * FROM supplements WHERE supplementID IN (SELECT supplementID FROM document_supplements WHERE documentID = ?)', [documentID]);

    connection.release();

    return { document: documentRows[0], authors: authorRows, supplements: supplementRows };
}


const { Base64Encode } = require('base64-stream'); // добавьте этот модуль для преобразования изображений в Base64

async function createDocument(data) {
    const content = fs.readFileSync(path.resolve('templates/template.docx'), 'binary');
    const zip = new PizZip(content);

    const opts = {
        centered: false,
        getImage: function (tagValue, tagName) {
            return Buffer.from(tagValue, 'base64');
        },
        getSize: function (img, tagValue, tagName) {
            return [365, 260];
        },
    };

    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
        modules: [new ImageModule(opts)],
    });

    // Преобразование изображений в base64
    const supplementsWithBase64Images = data.supplements.map(supplement => ({
        name: supplement.name,
        image: supplement.image.toString('base64'),
        imageName: supplement.imageName
    }));

    // Группировка по имени
    const groupedSupplements = supplementsWithBase64Images.reduce((acc, supplement) => {
        if (!acc[supplement.name]) {
            acc[supplement.name] = {
                name: supplement.name,
                images: []
            };
        }
        acc[supplement.name].images.push({
            image: supplement.image,
            imageName: supplement.imageName,
            indexImage: acc[supplement.name].images.length + 1
        });
        return acc;
    }, {});

    const groupedSupplementsArray = Object.values(groupedSupplements).map((supplement, index) => ({
        ...supplement,
        indexSupplement: index + 1
    }));

    doc.render({
        ...data.document,
        authors: data.authors.map(author => ({
            authorFIO: author.authorFIO,
            shortAuthorFIO: author.shortAuthorFIO,
            authorWorkPosition: author.authorWorkPosition,
            authorWorkplace: author.authorWorkplace,
            percentageContribution: author.percentageContribution,
            authorNumber: author.authorNumber,
            authorYearBirth: author.authorYearBirth,
            contribution: author.contribution,
            indexAuthor: author.inDocumentID
        })),
        supplements: groupedSupplementsArray
    });

    return doc.getZip().generate({ type: 'nodebuffer' });
}
async function saveDocumentToDB(buffer) {
    const connection = await targetPool.getConnection();

    try {
        await connection.beginTransaction();

        const [result] = await connection.execute(`
            INSERT INTO documents (document_content) VALUES (?)
        `, [buffer]);

        await connection.commit();
        return result.insertId;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}

async function saveDocumentDB(req, res) {
    try {
        const data = await fetchDocumentData();
        const documentBuffer = await createDocument(data);
        const documentId = await saveDocumentToDB(documentBuffer);

        res.status(200).send({ message: 'Document saved successfully', documentId });
    } catch (error) {
        console.error('Error saving document:', error);
        if (!res.headersSent) {
            res.status(500).send({ message: 'Failed to save document' });
        }
    }
}

async function downloadDocument(req, res) {
    const documentId = req.params.id;

    const connection = await targetPool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT document_content FROM documents WHERE id = ?
        `, [documentId]);

        if (rows.length === 0) {
            return res.status(404).send({ message: 'Document not found' });
        }

        const documentBuffer = rows[0].document_content;

        res.setHeader('Content-Disposition', `attachment; filename=document_${documentId}.docx`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.send(documentBuffer);
    } catch (error) {
        console.error('Error downloading document:', error);
        res.status(500).send({ message: 'Failed to download document' });
    } finally {
        connection.release();
    }
}

module.exports = {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'form.html'));
    },
    saveDocumentData,
    saveDocumentDB,
    downloadDocument
};