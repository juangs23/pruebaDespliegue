const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const eventosGymSchema = ({
  
    serviciosAgenda:{
        type: String,
        required:[true, 'El servicio es requirida']
        },


    fechaInicio:{
        type: Date,
        required:[true, 'La fecha inicio es requirida']
        },

    fechaFin:{
        type: Date,
        required:[true, 'La fecha fin es requirida']
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

    nombreEmpleado: {
        type: String,
          required:[true, 'El nombre del empleado es requirido']
        },

    // estadoAgenda: {
    //     type: Boolean,
    //     default: true,
    //     },

   

})

module.exports = model('eventosGym', eventosGymSchema)



