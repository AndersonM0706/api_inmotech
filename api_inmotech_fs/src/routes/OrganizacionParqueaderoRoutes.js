

// api_inmotech/api_inmotech_fs/src/routes/OrganizacionParqueaderoRoutes.js

const express = require('express');
const OrganizacionParqueaderoController = require('../controllers/OrganizacionParqueaderoController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, OrganizacionParqueaderoController.findAll);
router.get('/:id', verifyToken, OrganizacionParqueaderoController.findByID);
router.post('/', verifyToken, authorize, OrganizacionParqueaderoController.create);
router.put('/:id', verifyToken, authorize, OrganizacionParqueaderoController.update);
router.delete('/:id', verifyToken, authorize, OrganizacionParqueaderoController.delete);

module.exports = router;