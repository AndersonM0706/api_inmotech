
// Importar los middlewares verifyToken y authorize
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();

router.get('/', verifyToken, OtrasCaracteristicasController.findAll);
router.get('/:id', verifyToken, OtrasCaracteristicasController.findByID);
router.post('/', verifyToken, authorize, OtrasCaracteristicasController.create);
router.put('/:id', verifyToken, authorize, OtrasCaracteristicasController.update);
router.delete('/:id', verifyToken, authorize, OtrasCaracteristicasController.delete);

module.exports = router;