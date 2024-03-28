const {response} = require('express')
// const { model } = require('mongoose')

const EventosGym = require('../models/eventos')

const getEventos = async(req, res ) => {
    
    const {serviciosAgenda} = req.query;

    try {
        let eventos;
        // Si se proporciona parametro de busuqeda se filtrara
        if(serviciosAgenda){
            eventos = await EventosGym.find({ serviciosAgenda: serviciosAgenda })
        }else{
            const eventos = await EventosGym.find() //Obtener todos los documentos de una coleccion
        res.json({
            msg: eventos
        })
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
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
    const { _id, serviciosAgenda, fechaInicio, fechaFin, horaInicio, horaFin, descripcionAgenda, nombreEmpleado } = req.body // desectructurar el array con los datos
    let mensaje = ''

    try {
        const eventos = await EventosGym.findOneAndUpdate({_id: _id}, // Busqueda
        { serviciosAgenda:serviciosAgenda, fechaInicio:fechaInicio, fechaFin:fechaFin, horaInicio:horaInicio, horaFin:horaFin, descripcionAgenda:descripcionAgenda, nombreEmpleado:nombreEmpleado }) // Campos a editar

        if (!eventos) {
            return res.status(400).json({mensaje: 'No se encontro el evento'})
        }
        mensaje = 'actualizacion exitosa'
        return res.status(200).json({mensaje})

    } catch (error) {
        mensaje = `Error al actualizar el evento: ${error.message}`;
    }
    

    res.json({
        msg: mensaje

    })
}

const deleteEventos = async (req, res) => {
    const { id } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const eventos= await EventosGym.findOneAndDelete({id}) // Busqueda

        if (!eventos) {
            return res.status(404).json({mensaje: 'No se encontro el evento'})
        }
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = error
        return res.status(500).json({mensaje})
    }

    res.json({msg: mensaje})
}


module.exports = {
    getEventos,
    postEventos,
    putEventos,
    deleteEventos
}
