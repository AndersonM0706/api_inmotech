

// api_inmotech/api_inmotech_fs/src/routes/ValorRoutes.js

const express = require('express');
const ValorController = require('../controllers/ValorController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, ValorController.findAll);
router.get('/:id', verifyToken, ValorController.findByID);
router.post('/', verifyToken, authorize, ValorController.create);
router.put('/:id', verifyToken, authorize, ValorController.update);
router.delete('/:id', verifyToken, authorize, ValorController.delete);

module.exports = router;