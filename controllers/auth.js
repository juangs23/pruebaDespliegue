const RegistroUsuario = require('../models/registroUsuario');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    console.log('Cuerpo de la solicitud:', req.body);
    const { correo, password } = req.body;
    console.log("Datos recibidos en el servidor - Correo:", correo, "Contraseña:", password);

    try {
        // Buscar al usuario por correo
        const usuario = await RegistroUsuario.findOne({ correo });
        console.log('Usuario encontrado en la base de datos:', usuario); // Agregar este mensaje de depuración

        // Verificar si el usuario existe y la contraseña es correcta
        if (!usuario || !(await usuario.comparePassword(password))) {
            console.log('Credenciales inválidas'); // Agregar este mensaje de depuración
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Si las credenciales son válidas, generar un token de autenticación y enviarlo en la respuesta
        const token = generarToken(usuario._id);
        console.log('Token generado:', token); // Agregar este mensaje de depuración
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en el controlador de autenticación:', error); // Agregar este mensaje de depuración
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

function generarToken(userId) {
    // Generar un token JWT con el id del usuario
    const token = jwt.sign({ userId }, 'secreto', { expiresIn: '1h' });
    return token;
}
