const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/productos', adminController.crearProducto);
router.delete('/foro/hilos/:id', adminController.eliminarHilo);
router.post('/moderacion/silenciar', adminController.silenciarUsuario);
router.get('/dashboard', adminController.getDashboard);

module.exports = router;
