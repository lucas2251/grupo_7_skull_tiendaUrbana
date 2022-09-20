const express = require('express')
const router = express.Router()
const registerValidator = require("../validations/registerValidation")

let {ingresar,registro,procesoRegistro,procesoIngresar} = require('../controllers/usuariosController')

router.get('/registro', registro)
router.post("/registro",registerValidator,procesoRegistro)

router.get('/ingresar', ingresar)
router.post("/ingresar",procesoIngresar)

module.exports = router