const express = require('express');
const InmuebleController = require('../controllers/fcinicioController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/featured', verifyToken, InmuebleController.getFeaturedInmuebles);

module.exports = router;