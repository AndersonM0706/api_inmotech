

const express = require('express');
const EstadoPagoController = require('../controllers/EstadoPagoController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, EstadoPagoController.findAll);
router.get('/:id', verifyToken, EstadoPagoController.findByID);
router.post('/', verifyToken, authorize, EstadoPagoController.create);
router.put('/:id', verifyToken, authorize, EstadoPagoController.update);
router.delete('/:id', verifyToken, authorize, EstadoPagoController.delete);

module.exports = router;