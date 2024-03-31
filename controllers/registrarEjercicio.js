const {response} = require('express')

const Ejercicio = require('../models/registrarEjercicio')

const getEjercicio = async(req, res ) => {
    
    const {nombreEjercicio} = req.query
    try {
        let ejercicio
        //parametro de busqueda
        if (nombreEjercicio) {
            ejercicio = await Ejercicio.find({nombreEjercicio: nombreEjercicio})
        }else{
            const ejercicio = await Ejercicio.find(); //Obtener todos los documentos de una coleccion
            res.json({
                msg: ejercicio
            })
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

const postEjercicio = async(req, res) => {
    const datos = req.body //Capturar daros de la url-postman

    let mensaje = 'Inserccion ejercicio exitoso'
    try {
        const ejercicio = new Ejercicio(datos) // instancia objeto
        await ejercicio.save() //guardar en la bd
    } catch (error) {
        mensaje = error.message;
    }

    res.json({ 
        msg: mensaje 
    })

}    

const putEjercicio = async (req, res) => {
    const { _id, nombreEjercicio, repeticionesEjercicio, descripcionEjercicio } = req.body // desectructurar el array con los datos
    let mensaje = ''

    try {
        const ejercicio = await Ejercicio.findOneAndUpdate({_id: _id}, // Busqueda
        { nombreEjercicio:nombreEjercicio, repeticionesEjercicio:repeticionesEjercicio, descripcionEjercicio:descripcionEjercicio}) // Campos a editar
        

        if (!ejercicio) {
            return res.status(400).json({mensaje: 'No se encontro el ejercicio'})
        }
        mensaje = 'actualizacion exitosa'

    } catch (error) {
        mensaje = `Error al actualizar el ejercicio: ${error.message}`;
    }
    

    res.json({
        msg: mensaje

    })
}

const deleteEjercicio = async (req, res) => {
    const { id } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const ejercicio = await Ejercicio.findOneAndDelete({id}) // Busqueda
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}


module.exports = {
    postEjercicio,
    getEjercicio,
    putEjercicio,
    deleteEjercicio
}
