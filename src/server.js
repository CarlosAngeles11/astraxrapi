require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Necesario para leer req.body [cite: 27]

// Importar rutas
const authRoutes = require('./routes/auth.routes');
const productosRoutes = require('./routes/productos.routes');
const carritoRoutes = require('./routes/carrito.Routes');
const comunidadRoutes = require('./routes/comunidad.Routes');
const adminRoutes = require('./routes/admin.Routes');

// Registrar rutas en el framework con su prefijo /api/v1/ [cite: 68]
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/productos', productosRoutes);
app.use('/api/v1/carrito', carritoRoutes);
app.use('/api/v1', comunidadRoutes); // Agrupa /chat y /foro
app.use('/api/v1/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor AstraXR corriendo en http://localhost:${PORT}`);
});