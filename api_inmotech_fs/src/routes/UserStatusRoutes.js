
// api_inmotech/api_inmotech_fs/src/routes/UserStatusRoutes.js

const express = require('express');
const UserStatusController = require('../controllers/UserStatusController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, UserStatusController.findAll);
router.get('/:id', verifyToken, UserStatusController.findByID);
router.post('/', verifyToken, authorize, UserStatusController.create);
router.put('/:id', verifyToken, authorize, UserStatusController.update);
router.delete('/:id', verifyToken, authorize, UserStatusController.delete);

module.exports = router;