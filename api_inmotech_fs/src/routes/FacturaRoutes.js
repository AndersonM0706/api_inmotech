
const express = require('express');
const FacturaController = require('../controllers/FacturaController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, FacturaController.findAll);
router.get('/:id', verifyToken, FacturaController.findByID);
router.post('/', verifyToken, authorize, FacturaController.create);
router.put('/:id', verifyToken, authorize, FacturaController.update);
router.delete('/:id', verifyToken, authorize, FacturaController.delete);

module.exports = router;