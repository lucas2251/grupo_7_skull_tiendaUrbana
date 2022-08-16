const express = require('express')
const router = express.Router()

let {crear,edit,list} = require('../controllers/adminController')

router.get('/listar', list)
router.get('/editar', edit)
router.get('/crear', crear)


module.exports = router

