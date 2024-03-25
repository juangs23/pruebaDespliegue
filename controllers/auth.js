// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const RegistroUsuario = require('../models/registroUsuario');

// const login = async (req, res) => {
//     const { correo, password } = req.body;

//     try {
//         console.log('Correo recibido', correo)
//         console.log('Contrasena recibida', password)
//         // Buscar al usuario por correo
//         const usuario = await RegistroUsuario.findOne({ correo });

//         // Si no se encuentra el usuario, enviar un mensaje de error
//         if (!usuario) {
//             return res.status(400).json({ msg: 'Credenciales inválidas' });
//         }

//         // Verificar la contraseña
//         const esMatch = await bcrypt.compare(password, usuario.password);

//         // Si la contraseña no coincide, enviar un mensaje de error
//         if (!esMatch) {
//             return res.status(400).json({ msg: 'Credenciales inválidas' });
//         }

//         // Si las credenciales son válidas, generar un token JWT
//         const token = jwt.sign({ id: usuario._id }, 'secreto', { expiresIn: '1h' });

//         res.json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error de servidor');
//     }
// };

// module.exports = { login };
