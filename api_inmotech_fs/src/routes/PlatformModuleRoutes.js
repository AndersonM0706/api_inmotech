
// api_inmotech/api_inmotech_fs/src/routes/PlatformModuleRoutes.js

const express = require('express');
const PlatformModuleController = require('../controllers/PlatformModuleController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PlatformModuleController.findAll);
router.get('/:id', verifyToken, PlatformModuleController.findByID);
router.post('/', verifyToken, authorize, PlatformModuleController.create);
router.put('/:id', verifyToken, authorize, PlatformModuleController.update);
router.delete('/:id', verifyToken, authorize, PlatformModuleController.delete);

module.exports = router;

