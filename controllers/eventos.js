const {response} = require('express')
// const { model } = require('mongoose')

const EventosGym = require('../models/eventos')

const getEventos = async(req, res ) => {
    
    const eventos = await EventosGym.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: eventos
    })
}

const postEventos = async(req, res) => {
    const datos = req.body //Capturar daros de la url-postman

    let mensaje = 'Inserccion evento exitoso'
    try {
        const eventos = new EventosGym(datos) // instancia objeto
        await eventos.save() //guardar en la bd
    } catch (error) {
        mensaje = error.message;
    }

    res.json({ 
        msg: mensaje 
    })

}    

const putEventos = async (req, res) => {
    const { serviciosAgenda, fechaInicio, fechaFin, horaInicio, horaFin, descripcionAgenda, nombreEmpleado } = req.body // desectructurar el array con los datos
    let mensaje = ''

    try {
        const eventos = await EventosGym.findOneAndUpdate({serviciosAgenda: serviciosAgenda}, // Busqueda
        { fechaInicio:fechaInicio, fechaFin:fechaFin, horaInicio:horaInicio, horaFin:horaFin, descripcionAgenda:descripcionAgenda, nombreEmpleado:nombreEmpleado }) // Campos a editar
        mensaje = 'actualizacion exitosa'   

    } catch (error) {
        mensaje = `Error al actualizar el evento: ${error.message}`;
    }
    

    res.json({
        msg: mensaje

    })
}

const deleteEventos = async (req, res) => {
    const { serviciosAgenda } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const eventos= await EventosGym.findOneAndDelete({serviciosAgenda:serviciosAgenda}) // Busqueda
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}


module.exports = {
    getEventos,
    postEventos,
    putEventos,
    deleteEventos
}
