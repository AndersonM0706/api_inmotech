
// api_inmotech/api_inmotech_fs/src/routes/VeredaRoutes.js

const express = require('express');
const VeredaController = require('../controllers/VeredaController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, VeredaController.findAll);
router.get('/:id', verifyToken, VeredaController.findByID);
router.post('/', verifyToken, authorize, VeredaController.create);
router.put('/:id', verifyToken, authorize, VeredaController.update);
router.delete('/:id', verifyToken, authorize, VeredaController.delete);

module.exports = router;