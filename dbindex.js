const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const documentController = require('./controllers/dbController');

const app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // сохранение файла с уникальным именем
    }
});

const upload = multer({ storage: storage });

app.get('/', async (req, res) => documentController.index(req, res));

// Изменим метод POST для сохранения данных в базу данных
app.post('/generate', upload.any(), async (req, res) => {
    try {
        const data = req.body;

        // Вызываем функцию из контроллера для сохранения данных в БД
        await documentController.saveDocumentData(data, req.files);

        res.send('Данные успешно сохранены в базе данных');
    } catch (error) {
        console.error('Ошибка при сохранении данных:', error.message);
        res.status(500).send('Ошибка при сохранении данных. Обратитесь к администратору.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
