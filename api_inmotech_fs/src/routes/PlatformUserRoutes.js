
// api_inmotech/api_inmotech_fs/src/routes/PlatformUserRoutes.js

const express = require('express');
const PlatformUserController = require('../controllers/PlatformUserController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PlatformUserController.findAll);
router.get('/:id', verifyToken, PlatformUserController.findByID);
router.post('/', verifyToken, authorize, PlatformUserController.create);
router.put('/:id', verifyToken, authorize, PlatformUserController.update);
router.delete('/:id', verifyToken, authorize, PlatformUserController.delete);

module.exports = router;