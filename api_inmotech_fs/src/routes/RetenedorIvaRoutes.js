
// api_inmotech/api_inmotech_fs/src/routes/RetenedorIvaRoutes.js

const express = require('express');
const RetenedorIvaController = require('../controllers/RetenedorIvaController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, RetenedorIvaController.findAll);
router.get('/:id', verifyToken, RetenedorIvaController.findByID);
router.post('/', verifyToken, authorize, RetenedorIvaController.create);
router.put('/:id', verifyToken, authorize, RetenedorIvaController.update);
router.delete('/:id', verifyToken, authorize, RetenedorIvaController.delete);

module.exports = router;