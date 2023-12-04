const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { getRegistroUsuario, postRegistroUsuario, putRegistroUsuario} = require('../controllers/registroUsuario')

route.get('/', getRegistroUsuario)
route.post('/', postRegistroUsuario)
route.put('/', putRegistroUsuario)

//Consultar un dato
// route.get('/agenda', (req, res) => {
//     res.json({
//         msg: 'Listar Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/agenda', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })

// //Metodo para editar
// route.put('/agenda', (req, res) => {
//     res.json({
//         msg: 'Edicion exitosa'
//     })
// })

// //Metodo para eliminar
// route.delete('/agenda', (req, res) => {
//     res.json({
//         msg: 'Eliminacion exitosa'
//     })
// })


module.exports = route 