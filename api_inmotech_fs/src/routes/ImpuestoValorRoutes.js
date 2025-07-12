const express = require('express');
const ImpuestoValorController = require('../controllers/ImpuestoValorController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, ImpuestoValorController.findAll);
router.get('/:id', verifyToken, ImpuestoValorController.findByID);
router.post('/', verifyToken, authorize, ImpuestoValorController.create);
router.put('/:id', verifyToken, authorize, ImpuestoValorController.update);
router.delete('/:id', verifyToken, authorize, ImpuestoValorController.delete);

module.exports = router;