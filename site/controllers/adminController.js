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
       let categoria =["skates","longboards","accesorios","partes"]
        id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) 
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
       return res.render('admin/editar',{producto,categoria})
    },
    actualizar:(req,res)=>{
    

        const idParams = +req.params.id
        const { marca, titulo, Categoria, precio, descuento, stock, descripcion } = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = marca
                producto.titulo = titulo
                producto.categoria = Categoria
                producto.precio = +precio
                producto.descuento = +descuento
                producto.stock = +stock
                producto.descripcion = descripcion
            }
        })
        guardar(productos)
            return res.redirect('/administrador/listar')
    }

    }
