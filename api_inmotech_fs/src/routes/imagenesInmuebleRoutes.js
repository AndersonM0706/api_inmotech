const express = require('express');
const ImagenesInmuebleController = require('../controllers/ImagenesInmuebleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();

router.get('/', verifyToken, ImagenesInmuebleController.findAll);
router.get('/:id', verifyToken, ImagenesInmuebleController.findByID);
router.post('/', verifyToken, authorize, ImagenesInmuebleController.create);
router.put('/:id', verifyToken, authorize, ImagenesInmuebleController.update);
router.delete('/:id', verifyToken, authorize, ImagenesInmuebleController.delete);

module.exports = router;