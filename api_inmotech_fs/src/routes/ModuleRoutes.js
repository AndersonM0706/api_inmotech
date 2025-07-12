


const express = require('express');
const ModuleController = require('../controllers/ModuleController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, ModuleController.findAll);
router.get('/:id', verifyToken, ModuleController.findByID);
router.post('/', verifyToken, authorize, ModuleController.create);
router.put('/:id', verifyToken, authorize, ModuleController.update);
router.delete('/:id', verifyToken, authorize, ModuleController.delete);

module.exports = router;