const express = require('express');
const router = express.Router();
const comunidadController = require('../controllers/comunidad.controller');

// Chat
router.get('/chat/mensajes', comunidadController.getMensajesChat);
router.post('/chat/mensajes', comunidadController.enviarMensajeChat);

// Foro
router.get('/foro/hilos', comunidadController.getHilosForo);
router.post('/foro/hilos', comunidadController.crearHiloForo);

module.exports = router;
