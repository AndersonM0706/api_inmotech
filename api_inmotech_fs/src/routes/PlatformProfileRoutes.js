
// api_inmotech/api_inmotech_fs/src/routes/PlatformProfileRoutes.js

const express = require('express');
const PlatformProfileController = require('../controllers/PlatformProfileController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PlatformProfileController.findAll);
router.get('/:id', verifyToken, PlatformProfileController.findByID);
router.post('/', verifyToken, authorize, PlatformProfileController.create);
router.put('/:id', verifyToken, authorize, PlatformProfileController.update);
router.delete('/:id', verifyToken, authorize, PlatformProfileController.delete);

module.exports = router;