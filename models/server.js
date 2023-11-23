const express = require('express')
const cors = require('cors'); // implementar seguridad
const bodyParser = require('body-parser') //Paquete convertir el objeto enviando desde el form
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.agendaPath = '/agenda' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.agendaPath, require('../routes/agenda'))
    }

    middlewares(){
        this.app.use( cors() ); //Indicar el uso de cors
        this.app.use( bodyParser.json()) //Parsear objetos a insertar desde BD

    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase