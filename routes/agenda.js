const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { getAgenda, postAgenda, putAgenda, deleteAgenda } = require('../controllers/agenda')

route.get('/', getAgenda)
route.post('/', postAgenda)
route.put('/', putAgenda)
route.delete('/', deleteAgenda)

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