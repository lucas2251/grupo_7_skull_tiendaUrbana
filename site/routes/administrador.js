const express = require('express')
const router = express.Router()





let {crear,editar,listar,actualizar,tienda} = require('../controllers/adminController')


router.get('/listar', listar)

router.get('/crear', crear)
router.post("/crear", tienda)

router.get('/editar/:id', editar)
router.put('/editar/:id', actualizar)

module.exports = router