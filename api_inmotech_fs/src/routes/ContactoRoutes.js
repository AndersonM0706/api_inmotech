const express = require('express');
const router = express.Router();
const ContactoController = require('../controllers/ContactoController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.post('/', verifyToken, authorize, ContactoController.create);
router.get('/', verifyToken, ContactoController.findAll);
router.get('/:id', verifyToken, ContactoController.findByID);
router.put('/:id', verifyToken, authorize, ContactoController.update);
router.delete('/:id', verifyToken, authorize, ContactoController.delete);

module.exports = router;
