

const express = require('express');
const DivisionController = require('../controllers/DivisionController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, DivisionController.findAll);
router.get('/:id', verifyToken, DivisionController.findByID);
router.post('/', verifyToken, authorize, DivisionController.create);
router.put('/:id', verifyToken, authorize, DivisionController.update);
router.delete('/:id', verifyToken, authorize, DivisionController.delete);

module.exports = router;