const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { login } = require('../controllers/auth')

route.post('/login', login)

module.exports = route