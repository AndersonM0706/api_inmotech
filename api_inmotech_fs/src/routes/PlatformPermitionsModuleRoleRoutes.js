
// api_inmotech/api_inmotech_fs/src/routes/PlatformPermisionsModuleRoleRoutes.js

const express = require('express');
const PlatformPermisionsModuleRoleController = require('../controllers/PlatformPermisionsModuleRoleController'); // Importa el controlador específico
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PlatformPermisionsModuleRoleController.findAll);
router.get('/:id', verifyToken, PlatformPermisionsModuleRoleController.findByID);
router.post('/', verifyToken, authorize, PlatformPermisionsModuleRoleController.create);
router.put('/:id', verifyToken, authorize, PlatformPermisionsModuleRoleController.update);
router.delete('/:id', verifyToken, authorize, PlatformPermisionsModuleRoleController.delete);

module.exports = router;