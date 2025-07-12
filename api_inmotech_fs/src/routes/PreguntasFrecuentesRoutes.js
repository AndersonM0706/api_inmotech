
// api_inmotech/api_inmotech_fs/src/routes/PreguntasFrecuentesRoutes.js

const express = require('express');
const PreguntasFrecuentesController = require('../controllers/PreguntasFrecuentesController'); // Importa el controlador específico
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PreguntasFrecuentesController.findAll);
router.get('/:id', verifyToken, PreguntasFrecuentesController.findByID);
router.post('/', verifyToken, authorize, PreguntasFrecuentesController.create);
router.put('/:id', verifyToken, authorize, PreguntasFrecuentesController.update);
router.delete('/:id', verifyToken, authorize, PreguntasFrecuentesController.delete);

module.exports = router;
