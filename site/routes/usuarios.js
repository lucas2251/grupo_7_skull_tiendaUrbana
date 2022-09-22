const express = require('express')
const router = express.Router()
const registerValidator = require("../validations/registerValidation")
const loginvalidator= require("../validations/loginValidation")
const upload = require("../middlewares/multerUsuarios")

let {ingresar,registro,procesoRegistro,procesoIngresar} = require('../controllers/usuariosController')

router.get('/registro', registro)
router.post("/registro",upload.single("imagen"),registerValidator,procesoRegistro)

router.get('/ingresar', ingresar)
router.post("/ingresar",loginvalidator,procesoIngresar)

module.exports = router