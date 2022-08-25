const fs = require('fs')
let productos = require('./productos.json');

let ultimoId = productos[productos.length - 1].id + 1

console.log(ultimoId);

let nuevoProducto = {
    id: 7,
    categoria: "Skates",
    marca: "Lab",
    titulo: "La Ola",
    precio: 20000,
    descuento: 40,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam, placeat eius perferendis aspernatur doloribus aliquid, quibusdam aperiam hic a tenetur! Quis rem aut qui expedita ut aspernatur nisi officiis.",
    stock: 50,
    imagenes: [
        
    ]
}

productos.push(nuevoProducto);

let string = JSON.stringify(productos,null,4);

fs.writeFileSync('./data/productos.json',string,'utf-8')