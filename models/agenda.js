const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const agendaServiciosSchema = ({
  
    nombreEmpleado: {
      type: String,
        unique:true,
        required:[true, 'El nombre del empleado es requirido']
    },
  
    fechaAgenda:{
        type: String,
        required:[true, 'La fecha agenda es requirida']
    },

    horaInicio: {
        type: String,
        required:[true, 'La hora inicio es requirida']
      },

      horaFin: {
        type: String,
        
        required:[true, 'La hora fin agenda es requirida']
      },

    descripcionAgenda:{
        type:String,
        required:[true, 'La descripcion es requirida']
        
    },

    estadoAgenda: {
        type: Boolean,
        default: true,
    }

})

module.exports = model('agendaServicios', agendaServiciosSchema)



