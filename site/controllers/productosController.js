const productos = require('../data/productos.json')

module.exports = {
    detalle: (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('detalle',
        {
            producto : productoEnDetalle,
            productos
        })
    },
    carrito: (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('carrito',
        {
            producto : productoEnDetalle,
            productos
        })
    },  
    categoria: (req,res)=>{
        let categoriaSelecionada = req.params.categoria
        let categorias = ["skates","longboards","accesorios","partes"]
        
        productosPorCategoria = productos.filter(productos => productos.categoria === categoriaSelecionada)

        res.render("productos",{
            categorias,
            categoriaSelecionada,
            productos,
            productosPorCategoria
        })
    } 
}
