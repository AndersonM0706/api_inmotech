
// api_inmotech/api_inmotech_fs/src/routes/PlatformModuleRoleRoutes.js

const express = require('express');
const PlatformModuleRoleController = require('../controllers/PlatformModuleRoleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();

router.get('/', verifyToken, PlatformModuleRoleController.findAll);
router.get('/:id', verifyToken, PlatformModuleRoleController.findByID);
router.post('/', verifyToken, authorize, PlatformModuleRoleController.create);
router.put('/:id', verifyToken, authorize, PlatformModuleRoleController.update);
router.delete('/:id', verifyToken, authorize, PlatformModuleRoleController.delete);

module.exports = router;