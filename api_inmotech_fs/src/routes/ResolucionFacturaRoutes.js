
// api_inmotech/api_inmotech_fs/src/routes/ResolucionFacturaRoutes.js

const express = require('express');
const ResolucionFacturaController = require('../controllers/ResolucionFacturaController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, ResolucionFacturaController.findAll);
router.get('/:id', verifyToken, ResolucionFacturaController.findByID);
router.post('/', verifyToken, authorize, ResolucionFacturaController.create);
router.put('/:id', verifyToken, authorize, ResolucionFacturaController.update);
router.delete('/:id', verifyToken, authorize, ResolucionFacturaController.delete);

module.exports = router;