const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json()); // Estandarización JSON requerida en Fase 1

// Registro de rutas
app.use('/api/v1/productos', productoRoutes);

module.exports = app;

