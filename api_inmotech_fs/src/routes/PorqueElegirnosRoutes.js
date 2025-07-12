
const express = require('express');
const PorQueElegirnosController = require('../controllers/PorQueElegirnosController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
router.get('/', verifyToken, PorQueElegirnosController.findAll);
router.get('/:id', verifyToken, PorQueElegirnosController.findByID);
router.post('/', verifyToken, authorize, PorQueElegirnosController.create);
router.put('/:id', verifyToken, authorize, PorQueElegirnosController.update);
router.delete('/:id', verifyToken, authorize, PorQueElegirnosController.delete);

module.exports = router;
