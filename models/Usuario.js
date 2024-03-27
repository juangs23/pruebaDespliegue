// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const usuarioSchema = new mongoose.Schema({
//     correo: {
//         type: String,
//         unique: true,
//         required: [true, 'El correo es requerido']
//     },
//     password: {
//         type: String,
//         required: [true, 'La contraseña es requerida']
//     }
// });

// // Método para comparar contraseñas
// usuarioSchema.methods.comparePassword = async function(candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('Usuario', usuarioSchema);
