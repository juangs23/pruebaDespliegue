const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { /*getAgenda, postAgenda, putAgenda, deleteAgenda*/ postEjercicio } = require('../controllers/registrarEjercicio')

//route.get('/', getAgenda)
route.post('/', postEjercicio)
//route.put('/', putAgenda)
//route.delete('/', deleteAgenda)

module.exports = route;