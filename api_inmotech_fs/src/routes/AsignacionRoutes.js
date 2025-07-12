

const express = require('express');
const AsignacionController = require('../controllers/AsignacionController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, AsignacionController.findAll);
router.get('/:id', verifyToken, AsignacionController.findByID);
router.post('/', verifyToken, authorize, AsignacionController.create);
router.put('/:id', verifyToken, authorize, AsignacionController.update);
router.delete('/:id', verifyToken, authorize, AsignacionController.delete);

module.exports = router;