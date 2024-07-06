const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const multer = require('multer');
const rationalizationProposalController = require('./controllers/rationalizationProposalController');
const actController = require('./controllers/actController');

const app = express();

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts", 
    defaultLayout: "main",
    extname: "hbs",
	partialsDir: path.join(__dirname, 'views/partials'),
    helpers: {
		eq: (a, b) => {
			return a === b;
		}
    }
}))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(path.join(__dirname, 'static')));


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


app.get('/', async (req, res) => res.redirect('/rationalization_proposal'));

app.get('/rationalization_proposal', async (req, res) => rationalizationProposalController.index(req, res));
app.post('/generate_rationalization_proposal', upload.any(), async (req, res) => rationalizationProposalController.addDocument(req, res));

app.get('/act', async (req, res) => actController.index(req, res));
app.post('/generate_act', upload.any(), async (req, res) => actController.addDocument(req, res));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
