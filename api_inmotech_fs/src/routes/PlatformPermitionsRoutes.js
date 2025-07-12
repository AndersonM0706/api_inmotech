
// api_inmotech/api_inmotech_fs/src/routes/PlatformPermitionsRoutes.js

const express = require('express');
const PlatformPermitionsController = require('../controllers/PlatformPermitionsController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PlatformPermitionsController.findAll);
router.get('/:id', verifyToken, PlatformPermitionsController.findByID);
router.post('/', verifyToken, authorize, PlatformPermitionsController.create);
router.put('/:id', verifyToken, authorize, PlatformPermitionsController.update);
router.delete('/:id', verifyToken, authorize, PlatformPermitionsController.delete);

module.exports = router;