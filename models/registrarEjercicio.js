const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const ejerciciosSchema = ({
  
    nombreEjercicio:{
        type: String,
        required:[true, 'El nombre ejercicio es requirido']
        },


    repeticionesEjercicio:{
        type: Number,
        required:[true, 'Las repeticiones son requiridas']
        },
 
    descripcionEjercicio:{
        type: String,
        required:[true, 'La descripcion es requirida']
        },
   
})

module.exports = model('Ejercicios', ejerciciosSchema)



