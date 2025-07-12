
// api_inmotech/api_inmotech_fs/src/routes/PlatformRoleRoutes.js

const express = require('express');
const PlatformRoleController = require('../controllers/PlatformRoleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, PlatformRoleController.findAll);
router.get('/:id', verifyToken, PlatformRoleController.findByID);
router.post('/', verifyToken, authorize, PlatformRoleController.create);
router.put('/:id', verifyToken, authorize, PlatformRoleController.update);
router.delete('/:id', verifyToken, authorize, PlatformRoleController.delete);

module.exports = router;