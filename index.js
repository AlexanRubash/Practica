const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const documentController = require('./controllers/documentController');

const app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => documentController.index(req, res));
app.post('/generate', async (req, res) => documentController.addDocument(req, res));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
