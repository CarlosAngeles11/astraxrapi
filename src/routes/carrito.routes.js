const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carrito.controller');

router.post('/items', carritoController.agregarItem);
router.post('/checkout', carritoController.checkout);

module.exports = router;
