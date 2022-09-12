const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./public/images/productos")
    },
    filename:(req,file,callback)=>{
        callback(null,"img-"+ Date.now()+ path.extname(file.originalname) )
    }
})



const upload = multer({
    storage
})

let {crear,editar,listar,actualizar,tienda,eliminar} = require('../controllers/adminController')


router.get('/listar', listar)

router.get('/crear', crear)
router.post("/crear",upload.single("imagen"), tienda)

router.get('/editar/:id', editar)
router.put('/editar/:id',upload.single("imagen"), actualizar)

/* Eliminando un producto */
router.delete('/eliminar/:id', eliminar);
/*router.delete('/restaurar/:id', restaurar);*/
/*router.delete('/crash/:id', crash)*/

module.exports = router
