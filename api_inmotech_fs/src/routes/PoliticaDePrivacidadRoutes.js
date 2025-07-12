
// api_inmotech/api_inmotech_fs/src/routes/PoliticaDePrivacidadRoutes.js
const express = require('express');

const PoliticaDePrivacidadController = require('../controllers/PoliticaDePrivacidadController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, PoliticaDePrivacidadController.findAll);
router.get('/:id', verifyToken, PoliticaDePrivacidadController.findByID);
router.post('/', verifyToken, authorize, PoliticaDePrivacidadController.create);
router.put('/:id', verifyToken, authorize, PoliticaDePrivacidadController.update);
router.delete('/:id', verifyToken, authorize, PoliticaDePrivacidadController.delete);

module.exports = router;
