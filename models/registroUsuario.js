const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const registroUsuarioSchema = new mongoose.Schema({
    nombres: {
        type: String,
        unique:true,
        required:[true, 'El nombre es requerido']
    },
    apellidos:{
        type: String,
        required:[true, 'El apellido es requerido']
    },
    documento: {
        type: Number,
        required:[true, 'El documento es requerido']
    },
    correo: {
        type: String,
        required:[true, 'La hora fin agenda es requerida']
    },
    telefono:{
        type:Number,
        required:[true, 'el telefono es requerido']
    },
    edad:{
        type:Number,
        required:[true, 'La edad es requerida']
    },
    direccion: {
        type: String,
        required:[true, 'La direccion es requerida']
    },
    precioDolar: {
        type: Number,
        required:[true, 'EL precio es requerido']
    },
    password: {
        type: String,
        required:[true, 'La contraseña es requerida']
    }
});

// Antes de guardar, encriptar la contraseña
registroUsuarioSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('registroUsuario', registroUsuarioSchema);
