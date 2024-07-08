const express = require("express");
const multer = require('multer');
const path = require('path');
const actController = require('../controllers/actController');

module.exports = () => {
    const router = express.Router(); 

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
          const fileName = 'premise' + path.extname(file.originalname);
          cb(null, fileName);
        }
      });

    const upload = multer({ storage: storage });
    router.get('/', async (req, res) => actController.index(req, res));
    router.post('/generate', upload.any(), async (req, res) => actController.generateAct(req, res));

    return router;
}