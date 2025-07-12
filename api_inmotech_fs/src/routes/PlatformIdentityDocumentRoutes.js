
// api_inmotech/api_inmotech_fs/src/routes/PlatformIdentityDocumentRoutes.js

const express = require('express');
const PlatformIdentityDocumentController = require('../controllers/PlatformIdentityDocumentController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();s
router.get('/', verifyToken, PlatformIdentityDocumentController.findAll);
router.get('/:id', verifyToken, PlatformIdentityDocumentController.findByID);
router.post('/', verifyToken, authorize, PlatformIdentityDocumentController.create);
router.put('/:id', verifyToken, authorize, PlatformIdentityDocumentController.update);
router.delete('/:id', verifyToken, authorize, PlatformIdentityDocumentController.delete);

module.exports = router;