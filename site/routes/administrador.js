const express = require('express')
const router = express.Router()

let {crear} = require('../controllers/adminController')

router.get('/crear', crear)

module.exports = router
/*let {create,edit,list} = require('../controllers/adminController')*/

/*router.get('/listar', list)
router.get('/editar', edit)*/
