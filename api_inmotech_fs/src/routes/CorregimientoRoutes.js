

const express = require('express');
const CorregimientoController = require('../controllers/CorregimientoController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, CorregimientoController.findAll);
router.get('/:id', verifyToken, CorregimientoController.findByID);
router.post('/', verifyToken, authorize, CorregimientoController.create);
router.put('/:id', verifyToken, authorize, CorregimientoController.update);
router.delete('/:id', verifyToken, authorize, CorregimientoController.delete);

module.exports = router;