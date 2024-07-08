const express = require('express');
const bodyParser = require('body-parser');
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const multer = require('multer');
const path = require('path');
const proposalRouter = require('./routers/proposalRouter')();
const actRouter = require('./routers/actRouter')();
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
		},
		json: function(context) {
      if(!context) return JSON.stringify({});;

			return JSON.stringify(context);
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


app.get('/', async (req, res) => res.redirect('/proposal'));

app.use('/proposal', proposalRouter);
app.use('/act', actRouter);

app.use((req, res, next) => res.status(404).send("Not Found"));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
