exports.crearProducto = (req, res) => {
    res.status(201).json({ success: true, message: "Producto añadido al catálogo general." });
};

exports.eliminarHilo = (req, res) => {
    res.status(200).json({ success: true, message: `Hilo con ID ${req.params.id} ha sido eliminado por el moderador.` });
};

exports.silenciarUsuario = (req, res) => {
    res.status(200).json({ success: true, message: "Acción ejecutada. Usuario silenciado." });
};

exports.getDashboard = (req, res) => {
    res.status(200).json({ success: true, data: { total_usuarios: 150, ventas_hoy: 5, stock_bajo: 2 } });
};