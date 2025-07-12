

const express = require('express');
const PermitionsController = require('../controllers/PermitionsController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, PermitionsController.findAll);
router.get('/:id', verifyToken, PermitionsController.findByID);
router.post('/', verifyToken, authorize, PermitionsController.create);
router.put('/:id', verifyToken, authorize, PermitionsController.update);
router.delete('/:id', verifyToken, authorize, PermitionsController.delete);

module.exports = router;