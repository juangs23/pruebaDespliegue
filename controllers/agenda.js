const {response} = require('express');
const { model } = require('mongoose');

AgendaServicios = require('../models/agenda')

const getAgenda = async(req, res ) => {
    
    const agendas = await AgendaServicios.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: agendas
    })
}

const postAgenda = async(req, res) => {
    const datos = req.query //Capturar daros de la url-postman
    let mensaje = ''
    try {
        const agenda = new AgendaServicios(datos) // instancia objeto
        await agenda.save() //guardar en la bd
        mensaje = 'Inserccion agenda exitosa'
        console.log(agenda)  
    } catch (error) {
        mesaje = error
        console.log (error)
    }

    res.json({
        msg: mensaje
    })

}    

const putAgenda = async (req, res) => {
    const { nombreEmpleado, fechaAgenda, horaInicio, horaFin, descripcionAgenda } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const agenda = await AgendaServicios.findOneAndUpdate({nombreEmpleado: nombreEmpleado}, // Busqueda
        { fechaAgenda:fechaAgenda, horaInicio:horaInicio, horaFin:horaFin, descripcionAgenda:descripcionAgenda }) // Campos a editar
        mensaje = 'actualizacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}

const deleteAgenda = async (req, res) => {
    const { nombreEmpleado } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const agenda = await AgendaServicios.findOneAndDelete({nombreEmpleado:nombreEmpleado}) // Busqueda
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}


module.exports = {
    getAgenda,
    postAgenda,
    putAgenda,
    deleteAgenda
}
