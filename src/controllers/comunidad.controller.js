exports.getMensajesChat = (req, res) => {
    res.status(200).json({ success: true, data: [{ autor: "Soporte", texto: "Hola, ¿en qué te ayudo?" }] });
};

exports.enviarMensajeChat = (req, res) => {
    res.status(201).json({ success: true, message: "Mensaje enviado al chat." });
};

exports.getHilosForo = (req, res) => {
    res.status(200).json({ success: true, data: [{ id: 1, titulo: "Duda sobre envío", autor: "Juan" }] });
};

exports.crearHiloForo = (req, res) => {
    res.status(201).json({ success: true, message: "Hilo creado exitosamente en el foro." });
};