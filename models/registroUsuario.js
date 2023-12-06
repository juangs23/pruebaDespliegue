const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const registroUsuarioSchema = ({
  
    nombres: {
      type: String,
        unique:true,
        required:[true, 'El nombre es requirido']
    },
  
    apellidos:{
        type: String,
        required:[true, 'El apellido es requirido']
    },

    documento: {
        type: Number,
        required:[true, 'El documento es requirido']
      },

    correo: {
        type: String,
        required:[true, 'La hora fin agenda es requirida']
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
        required:[true, 'La direccion es requirida']
      },

    precioDolar: {
        type: Number,
        required:[true, 'EL precio es requirido']
      },

      password: {
        type: String,
        required:[true, 'La contrasena es requirida']
      }

})

module.exports = model('registroUsuario', registroUsuarioSchema)



