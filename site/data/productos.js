const fs = require('fs')
let productos = require('./productos.json');


/* Editar producto */
let ProduEdit = productos.map((element,index) => {
    if (element.id === 6) {
        element.marca = "Iphone"
        element.titulo = "Iphone 13 pro max plus extra super ultra violeta"
        element.precio = 530000
        element.stock = 3
    }
    return element
})