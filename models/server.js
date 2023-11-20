const express = require('express')
const cors = require('cors'); // implementar seguridad
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
        this.app.use( cors() ); //indicar el uso de cors

    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase