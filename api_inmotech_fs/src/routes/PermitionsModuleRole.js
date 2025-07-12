
// api_inmotech/api_inmotech_fs/src/routes/PermisionsModuleRole.js

const express = require('express');
const PermisionsModuleRoleController = require('../controllers/PermisionsModuleRoleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware'); 
const router = express.Router();
router.get('/', verifyToken, PermisionsModuleRoleController.findAll);
router.get('/:id', verifyToken, PermisionsModuleRoleController.findByID);
router.post('/', verifyToken, authorize, PermisionsModuleRoleController.create);
router.put('/:id', verifyToken, authorize, PermisionsModuleRoleController.update);
router.delete('/:id', verifyToken, authorize, PermisionsModuleRoleController.delete);

module.exports = router;