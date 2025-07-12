
// api_inmotech/api_inmotech_fs/src/routes/NdapRoutes.js

const express = require('express');
const NdapController = require('../controllers/NdapController');
const verifyToken = require('../middlewares/verifyToken');
const authorize = require('../middlewares/apiMiddleware');
const router = express.Router();
router.get('/', verifyToken, NdapController.findAll);
router.get('/:id', verifyToken, NdapController.findByID);
router.post('/', verifyToken, authorize, NdapController.create);
router.put('/:id', verifyToken, authorize, NdapController.update);
router.delete('/:id', verifyToken, authorize, NdapController.delete);

module.exports = router;