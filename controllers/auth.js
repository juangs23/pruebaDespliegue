const RegistroUsuario = require('../models/registroUsuario'); // Cambiar la importación del modelo a 'registroUsuario'
const jwt = require('jsonwebtoken'); // Importa la librería jsonwebtoken

exports.login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        // Buscar al usuario por correo
        const usuario = await RegistroUsuario.findOne({ correo });

        // Verificar si el usuario existe y la contraseña es correcta
        if (!usuario || !(await usuario.comparePassword(password))) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Si las credenciales son válidas, generar un token de autenticación y enviarlo en la respuesta
        const token = generarToken(usuario._id);
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

function generarToken(userId) {
    // Generar un token JWT con el id del usuario
    const token = jwt.sign({ userId }, 'secreto', { expiresIn: '1h' });
    return token;
}
