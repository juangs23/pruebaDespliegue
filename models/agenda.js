const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const agendaServiciosSchema = ({
  
    nombreEmpleado: {
      type: String,
      unique: true,
      required: [true, 'El nombre del empleado es requerido'],
      match: /^[a-zA-Z\s]+$/, // Permitir letras y espacios
      maxlength: [15, 'El nombre debe contener máximo 15 caracteres'],
    },
  

    fechaAgenda:{
        type: Date,
        require: [true, 'La fecha es requerido'] 
    },

    horaInicio: {
        type: String,
        required: [true, 'La hora de inicio es requerida'],
      },

      horaFin: {
        type: String,
        required: [true, 'La hora de fin es requerida'],
      },

    descripcionAgenda:{
        type:String,
        require:[true, 'La descripcion es requerida'],
        min:[4, 'La descripcion debe contener minimo 4 caracteres'],

    },

    estadoAgenda: {
        type: Boolean,
        default: true,
    }

})

module.exports = model('agendaServicios', agendaServiciosSchema)



