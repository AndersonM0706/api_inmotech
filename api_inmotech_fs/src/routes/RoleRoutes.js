
// api_inmotech/api_inmotech_fs/src/routes/RoleRoutes.js

const express = require('express');
const RoleController = require('../controllers/RoleController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, RoleController.findAll);
router.get('/:id', verifyToken, RoleController.findByID);
router.post('/', verifyToken, authorize, RoleController.create);
router.put('/:id', verifyToken, authorize, RoleController.update);
router.delete('/:id', verifyToken, authorize, RoleController.delete);

module.exports = router;