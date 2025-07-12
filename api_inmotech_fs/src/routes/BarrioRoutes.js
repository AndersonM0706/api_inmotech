

const express = require('express');
const BarrioController = require('../controllers/BarrioController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, BarrioController.findAll);
router.get('/:id', verifyToken, BarrioController.findByID);
router.post('/', verifyToken, authorize, BarrioController.create);
router.put('/:id', verifyToken, authorize, BarrioController.update);
router.delete('/:id', verifyToken, authorize, BarrioController.delete);

module.exports = router;