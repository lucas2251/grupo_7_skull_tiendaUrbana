const express = require('express')
const router = express.Router()
const registerValidator = require("../validations/registerValidation")
const loginvalidator= require("../validations/loginValidation")
const upload = require("../middlewares/multerUsuarios")


let {ingresar,registro,procesoRegistro,procesoIngresar,perfil,desconectar} = require('../controllers/usuariosController')

router.get('/registro', registro)
router.post("/registro",upload.single("imagen"),registerValidator,procesoRegistro)

router.get('/ingresar', ingresar)
router.post("/ingresar",upload.single("imagen"),loginvalidator,procesoIngresar)

router.get('/perfil', perfil)
router.delete("/desconectar", desconectar)

module.exports = router