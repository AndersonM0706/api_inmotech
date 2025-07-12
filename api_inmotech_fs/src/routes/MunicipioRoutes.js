

const express = require('express');
const MunicipioController = require('../controllers/MunicipioController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, MunicipioController.findAll);
router.get('/:id', verifyToken, MunicipioController.findByID);
router.post('/', verifyToken, authorize, MunicipioController.create);
router.put('/:id', verifyToken, authorize, MunicipioController.update);
router.delete('/:id', verifyToken, authorize, MunicipioController.delete);

module.exports = router;