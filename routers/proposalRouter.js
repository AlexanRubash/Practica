const express = require("express");
const multer = require('multer');
const path = require('path');
const proposalController = require('../controllers/proposalController');

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

    router.get('/', async (req, res) => proposalController.index(req, res));
    router.get('/download/:id', async (req, res) => proposalController.downloadDocument(req, res));
    router.post('/generate', upload.any(), async (req, res) => proposalController.addDocument(req, res));
    router.post('/edit/:id', upload.any(), async (req, res) => proposalController.editDocument(req, res));
    router.get('/delete/:id', async (req, res) => proposalController.deleteDocument(req, res));

    return router;
}