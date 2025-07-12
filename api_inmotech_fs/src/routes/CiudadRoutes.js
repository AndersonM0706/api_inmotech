

const express = require('express');
const CiudadController = require('../controllers/CiudadController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, CiudadController.findAll);
router.get('/:id', verifyToken, CiudadController.findByID);
router.post('/', verifyToken, authorize, CiudadController.create);
router.put('/:id', verifyToken, authorize, CiudadController.update);
router.delete('/:id', verifyToken, authorize, CiudadController.delete);

module.exports = router;