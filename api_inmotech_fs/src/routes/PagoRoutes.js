const express = require('express');
const PagoController = require('../controllers/PagoController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware'); 
router.get('/', verifyToken, PagoController.findAll);
router.get('/:id', verifyToken, PagoController.findByID);
router.post('/', verifyToken, authorize, PagoController.create);
router.put('/:id', verifyToken, authorize, PagoController.update);
router.delete('/:id', verifyToken, authorize, PagoController.delete);

module.exports = router;