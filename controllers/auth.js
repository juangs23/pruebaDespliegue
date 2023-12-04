const Usuario = require('../models/registroUsuario')
const { generarJWT } = require('../')
const jwt = require ('jsonwebtoken')

const login = async(req, res) => {
    const {correo, password} = req.body
    const usuarios = await Usuario.findOne({correo})

    try{
        if (!usuarios) {
            return res.status(400).json({
                msg: 'Correo no encontrado'
            })
        }

        if (password == usuarios.password) {
            const token = await generarJWT(usuarios)
            return res.status(200).json({
                token
            })
        }
        else{
            return res.status(400).json({
                msg: 'Contrasena incorrecta'
            })
        }

    } catch (error){
        return res.status(400).json({
            msg: 'Pailas, contacte al admin'
        })
    }
}

module.exports = {
    login
}