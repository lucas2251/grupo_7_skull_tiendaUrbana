const express = require('express')
const router = express.Router()

let {ingresar,registro, edicionUsuario, perfilDeUsuario} = require('../controllers/usuariosController')

router.get('/registro', registro)
router.get('/ingresar', ingresar)
router.get('/perfilDeUsuario', perfilDeUsuario)
router.get('/edicionDeUsuario',edicionUsuario )

module.exports = router