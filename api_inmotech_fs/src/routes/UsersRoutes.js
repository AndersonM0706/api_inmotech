
// api_inmotech/api_inmotech_fs/src/routes/UsersRoutes.js

const express = require('express');
const UsersController = require('../controllers/UsersController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, UsersController.findAll);
router.get('/:id', verifyToken, UsersController.findByID);
router.post('/', verifyToken, authorize, UsersController.create);
router.put('/:id', verifyToken, authorize, UsersController.update);
router.delete('/:id', verifyToken, authorize, UsersController.delete);

module.exports = router;