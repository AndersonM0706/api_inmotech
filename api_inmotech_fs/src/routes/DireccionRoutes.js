

const express = require('express');
const DireccionController = require('../controllers/DireccionController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, DireccionController.findAll);
router.get('/:id', verifyToken, DireccionController.findByID);
router.post('/', verifyToken, authorize, DireccionController.create);
router.put('/:id', verifyToken, authorize, DireccionController.update);
router.delete('/:id', verifyToken, authorize, DireccionController.delete);

module.exports = router;