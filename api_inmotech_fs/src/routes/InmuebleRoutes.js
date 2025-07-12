const express = require('express');
const InmuebleController = require('../controllers/InmuebleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, InmuebleController.findAll);
router.get('/:id', verifyToken, InmuebleController.findByID);
router.post('/', verifyToken, authorize, InmuebleController.create);
router.put('/:id', verifyToken, authorize, InmuebleController.update);
router.delete('/:id', verifyToken, authorize, InmuebleController.delete);

module.exports = router;