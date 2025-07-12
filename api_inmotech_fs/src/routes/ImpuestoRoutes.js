

const express = require('express');
const ImpuestoController = require('../controllers/ImpuestoController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, ImpuestoController.findAll);
router.get('/:id', verifyToken, ImpuestoController.findByID);
router.post('/', verifyToken, authorize, ImpuestoController.create);
router.put('/:id', verifyToken, authorize, ImpuestoController.update);
router.delete('/:id', verifyToken, authorize, ImpuestoController.delete);

module.exports = router;