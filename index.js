const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const documentController = require('./controllers/documentController');



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
app.post('/generate', upload.any(), async (req, res) => documentController.addDocument(req, res));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
