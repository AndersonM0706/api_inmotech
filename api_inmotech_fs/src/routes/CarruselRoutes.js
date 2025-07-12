// api_inmotech/api_inmotech_fs/src/routes/CarouselRoutes.js

const express = require('express');

const CarruselController = require('../controllers/CarruselController');
const multer = require('multer');
const path = require('path');

const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware'); 

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../plataforma/src/assets/images/carrusel'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/upload', verifyToken, authorize, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ "error": "No se subió ninguna imagen" });
  }
  res.json({ url: `/assets/images/carrusel/${req.file.filename}` });
});

router.post('/', verifyToken, authorize, CarruselController.create);
router.get('/', verifyToken, CarruselController.findAll);
router.get('/:id', verifyToken, CarruselController.findByID);
router.put('/:id', verifyToken, authorize, CarruselController.update);
router.delete('/:id', verifyToken, authorize, CarruselController.delete);

module.exports = router;
