const express = require('express');
const InmuebleController = require('../controllers/fcinmueblesController');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();
router.get('/search', verifyToken, InmuebleController.getFilteredInmueblesFull);

module.exports = router;