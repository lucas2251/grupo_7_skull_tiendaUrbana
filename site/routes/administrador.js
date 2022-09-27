const express = require('express')
const router = express.Router()
const upload = require("../middlewares/multerProductos")
const adminCheck = require('../middlewares/adminCheck')
const productValidator = require("../validations/productsValidation")


const {crear,editar,listar,actualizar,tienda,eliminar} = require('../controllers/adminController')


router.get('/listar',adminCheck, listar)

router.get('/crear',adminCheck, crear)
router.post("/crear",upload.single("imagen"),productValidator, tienda)

router.get('/editar/:id',adminCheck, editar)
router.put('/editar/:id',upload.single("imagen"),productValidator, actualizar)

/* Eliminando un producto */
router.delete('/eliminar/:id', eliminar);
/*router.delete('/restaurar/:id', restaurar);*/
/*router.delete('/crash/:id', crash)*/

module.exports = router
