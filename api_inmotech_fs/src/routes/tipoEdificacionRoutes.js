
// api_inmotech/api_inmotech_fs/src/routes/TipoEdificacionRoutes.js

const express = require('express');
const TipoEdificacionController = require('../controllers/TipoEdificacionController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, TipoEdificacionController.findAll);
router.get('/:id', verifyToken, TipoEdificacionController.findByID);
router.post('/', verifyToken, authorize, TipoEdificacionController.create);
router.put('/:id', verifyToken, authorize, TipoEdificacionController.update);
router.delete('/:id', verifyToken, authorize, TipoEdificacionController.delete);

module.exports = router;