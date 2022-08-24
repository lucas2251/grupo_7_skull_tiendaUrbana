const express = require('express')
const router = express.Router()

let {crear} = require('../controllers/adminController')

router.get('/crear', crear)

/* GET home page. */
router.get('/lista', lista);
router.get('/historial', historial);

/* Eliminando un producto */
router.delete('/eliminar/:id', eliminar);
router.delete('/restaurar/:id', restaurar);
/*router.delete('/crash/:id', crash)*/


module.exports = router
/*let {create,edit,list} = require('../controllers/adminController')*/

/*router.get('/listar', list)
router.get('/editar', edit)*/
