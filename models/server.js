const express = require('express')
const cors = require('cors'); // permite o restringe las solicitudes
const bodyParser = require('body-parser') //Paquete convertir el objeto enviando desde el form
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.agendaPath = '/agenda' //Ruta de la API
        this.registarUsuarioPath = '/registarUsuario' 
        this.registarEventoPath = '/registrarEvento'
        this.registrarEjercicioPath = '/registrarEjercicio'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){ // escucha las solicitudes
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }

    routes(){
        this.app.use(this.agendaPath, require('../routes/agenda'))
        this.app.use(this.registarUsuarioPath, require('../routes/registroUsuario'))
        this.app.use(this.registarEventoPath, require('../routes/eventos'))
        this.app.use(this.registrarEjercicioPath, require('../routes/ejercicios'))
        
    }

    middlewares(){
        this.app.use( cors() ) //Indicar el uso de cors
        this.app.use( bodyParser.json()) //Parsear objetos a insertar desde BD

    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase