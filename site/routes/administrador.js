const express = require('express')
const router = express.Router()




let {crear,editar,listar,tienda} = require('../controllers/adminController')

router.get('/listar', listar)
router.get('/editar', editar)
router.get('/crear', crear)
router.get('/tienda', tienda)

module.exports = router
