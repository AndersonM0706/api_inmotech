

// api_inmotech/api_inmotech_fs/src/routes/SobreNosotrosRoutes.js

const express = require('express');

const SobreNosotrosController = require('../controllers/SobreNosotrosController');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
        cb(null, path.join(__dirname, '../../plataforma/src/assets/images/sobrenosotros'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/upload', verifyToken, authorize, upload.single('imagen'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No se subió ninguna imagen' });
    }
    res.json({ url: `/assets/images/sobrenosotros/${req.file.filename}` });
});

router.post('/', verifyToken, authorize, SobreNosotrosController.create);
router.get('/', verifyToken, SobreNosotrosController.findAll);
router.get('/:id', verifyToken, SobreNosotrosController.findByID);
router.put('/:id', verifyToken, authorize, SobreNosotrosController.update);
router.delete('/:id', verifyToken, authorize, SobreNosotrosController.delete);

module.exports = router;
