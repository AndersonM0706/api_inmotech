

const express = require('express');
const LocalizacionController = require('../controllers/LocalizacionController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, LocalizacionController.findAll);
router.get('/:id', verifyToken, LocalizacionController.findByID);
router.post('/', verifyToken, authorize, LocalizacionController.create);
router.put('/:id', verifyToken, authorize, LocalizacionController.update);
router.delete('/:id', verifyToken, authorize, LocalizacionController.delete);

module.exports = router;