const express = require('express')
const productosController = require('../controllers/productosController')
const router = express.Router()

let {carrito,detalle,categoria} = require('../controllers/productosController')

router.get('/carrito/:id', carrito)
router.get('/detalle/:id', detalle)
router.get('/:categoria?', categoria)



module.exports = router