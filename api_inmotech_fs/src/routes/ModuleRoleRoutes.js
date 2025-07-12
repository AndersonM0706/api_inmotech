

const express = require('express');
const ModuleRoleController = require('../controllers/ModuleRoleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, ModuleRoleController.findAll);
router.get('/:id', verifyToken, ModuleRoleController.findByID);
router.post('/', verifyToken, authorize, ModuleRoleController.create);
router.put('/:id', verifyToken, authorize, ModuleRoleController.update);
router.delete('/:id', verifyToken, authorize, ModuleRoleController.delete);

module.exports = router;