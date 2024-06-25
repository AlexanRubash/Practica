const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const app = express();
app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

//Крч, оно отправляет первоначально дату в формате yyyy-mm-dd, но она нужна в формате dd.mm.yyyy

function formatDate(inputDate) {
    const dateObj = new Date(inputDate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    // Ensure two-digit format for day and month
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
}

app.post('/generate', async (req, res) => {
    try {
        const data = req.body;
        const formattedDate = formatDate(data.date);
        const authors = Array.isArray(data.authors) ? data.authors.join(', ') : data.authors;

        const content = fs.readFileSync(path.resolve('templates/template.docx'), 'binary');
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

        const generatedDir = path.resolve(__dirname, 'generated');
        if (!fs.existsSync(generatedDir)) {
            fs.mkdirSync(generatedDir);
        }

        const fileName = `Акт ${data.actNumber}.docx`;
        const outputPath = path.resolve(generatedDir, fileName);

        fs.writeFileSync(outputPath, buf);

        res.download(outputPath);
    } catch (error) {
        console.error('Ошибка при обработке PDF:', error.message);
        res.status(500).send('Ошибка при создании документа. Обратитесь к администратору.');
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
