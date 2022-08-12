

module.exports = {
    listar: (req,res) => {
        return res.render('admin/listaProductos')
    },
    crear:(req,res) => {
        return res.render('admin/crearProducto')
    },
    editar:(req,res) => {
        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
       return res.render('admin/editarProducto')
    },
}