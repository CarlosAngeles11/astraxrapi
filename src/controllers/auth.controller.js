exports.registro = (req, res) => {
    // Simula éxito 201 Created
    res.status(400).json({ success: false, message: "Falta el correo"
    });
};

exports.login = (req, res) => {
    res.status(200).json({
        success: true,
        data: { token: "jwt_token_simulado_aqui_12345" },
        message: "Login exitoso"
    });
};
        
