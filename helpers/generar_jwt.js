// paquete para generar tokeen
const jwt = require('jsonwebtoken')

const generarJWT = ( uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { datos }
        jwt.sign(payload, process.env.SECRETKEY, { //generar token
            expiresIn : '5m', //tiempo expiracion
        }, (err, token) => {
            if (err) {  
                console.log(err)
                reject('No se puede generar token')
                
            }
            else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}