

// api_inmotech/api_inmotech_fs/src/routes/TerminosYCondicionesRoutes.js

const express = require('express');

const TerminosYCondicionesController = require('../controllers/TerminosYCondicionesController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, TerminosYCondicionesController.findAll);
router.get('/:id', verifyToken, TerminosYCondicionesController.findByID);
router.post('/', verifyToken, authorize, TerminosYCondicionesController.create);
router.put('/:id', verifyToken, authorize, TerminosYCondicionesController.update);
router.delete('/:id', verifyToken, authorize, TerminosYCondicionesController.delete);

module.exports = router;
