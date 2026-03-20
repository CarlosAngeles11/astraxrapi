exports.getProductos = (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            { id: 1, nombre: "Teclado Adaptado", descripcion: "Teclas grandes", precio: 450.00, stock: 15 },
            { id: 2, nombre: "Mouse de Bola", descripcion: "Trackball ergonómico", precio: 600.00, stock: 10 }
        ]
    });
};
