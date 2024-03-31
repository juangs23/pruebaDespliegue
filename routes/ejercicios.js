const {Router} = require('express')

const route = Router()


//Listar todos los datos
const {  postEjercicio, getEjercicio, putEjercicio, deleteEjercicio } = require('../controllers/registrarEjercicio')

route.get('/', getEjercicio)
route.post('/', postEjercicio)
route.put('/', putEjercicio)
route.delete('/', deleteEjercicio)

module.exports = route;