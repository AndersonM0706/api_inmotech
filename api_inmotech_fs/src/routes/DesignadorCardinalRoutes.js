

const express = require('express');
const DesignadorCardinalController = require('../controllers/DesignadorCardinalController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, DesignadorCardinalController.findAll);
router.get('/:id', verifyToken, DesignadorCardinalController.findByID);
router.post('/', verifyToken, authorize, DesignadorCardinalController.create);
router.put('/:id', verifyToken, authorize, DesignadorCardinalController.update);
router.delete('/:id', verifyToken, authorize, DesignadorCardinalController.delete);

module.exports = router;