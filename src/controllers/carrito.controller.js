exports.agregarItem = (req, res) => {
    res.status(200).json({
        success: true,
        data: { id_carrito: 45, total_articulos: req.body.cantidad || 1, subtotal: 900.00 },
        message: "Producto añadido al carrito. Tienes productos pendientes."
    });
};

exports.checkout = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Compra realizada con éxito. Carrito vaciado."
    });
};
