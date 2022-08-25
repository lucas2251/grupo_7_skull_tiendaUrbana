let productos = require("../data/productos.json");
const fs = require('fs')
const path = require('path')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {


    listar: (req,res) => {
        return res.render('admin/listar', {
            productos
        })
    },
    crear:(req,res) => {
        return res.render('admin/crear')
    },
    editar:(req,res) => {

        id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) 
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
       return res.render('admin/editar',{producto})
    },
    actualizar:(req,res)=>{
        const idParams = +req.params.id
        const { Marca, Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = Marca
                producto.titulo = Titulo
                producto.categoria = Categoria
                producto.precio = +Precio
                producto.descuento = +Descuento
                producto.stock = +Stock
                producto.descripcion = Descripcion
            }
        })
        guardar(productos)
            return res.redirect('/administrador/listar')
    }

    }
