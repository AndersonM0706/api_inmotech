
// api_inmotech/api_inmotech_fs/src/routes/SuscripcionRoutes.js

const express = require('express');
const SuscripcionController = require('../controllers/SuscripcionController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, SuscripcionController.findAll)
router.get('/:id', verifyToken, SuscripcionController.findByID);
router.post('/', verifyToken, authorize, SuscripcionController.create);
router.put('/:id', verifyToken, authorize, SuscripcionController.update);
router.delete('/:id', verifyToken, authorize, SuscripcionController.delete);

module.exports = router;