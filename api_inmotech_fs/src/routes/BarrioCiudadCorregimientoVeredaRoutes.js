

const express = require('express');
const BarrioCiudadCorregimientoVeredaController = require('../controllers/Barrio_ciudad_corregimiento_veredaController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, BarrioCiudadCorregimientoVeredaController.findAll);
router.get('/:id', verifyToken, BarrioCiudadCorregimientoVeredaController.findByID);
router.post('/', verifyToken, authorize, BarrioCiudadCorregimientoVeredaController.create);
router.put('/:id', verifyToken, authorize, BarrioCiudadCorregimientoVeredaController.update);
router.delete('/:id', verifyToken, authorize, BarrioCiudadCorregimientoVeredaController.delete);

module.exports = router;