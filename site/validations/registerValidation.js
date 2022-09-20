const {check,body} = require('express-validator')

module.exports = [
    /* Nombre */
    check('nombre').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
    check('apellido').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),

    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    /* Contraseña */
    check('clave')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    check('clave2')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres').bail(),

    

    body('clave2')
    .custom((value,{req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden')
]
