const express = require('express')
const router = express.Router()




let {crear,editar,listar,actualizar} = require('../controllers/adminController')

router.get('/listar', listar)
router.get('/crear', crear)

router.get('/editar/:id', editar)
router.put('/editar/:id', actualizar)

module.exports = router
