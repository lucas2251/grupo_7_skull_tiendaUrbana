const {check,body} = require('express-validator')
const usuarios = require('../data/usuarios.json')
const bcryptjs = require('bcryptjs')


module.exports = [
    

    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    /* Contraseña */
    check('clave')
    .notEmpty().withMessage('Debe ingresar su contraseña').bail()
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    
]
