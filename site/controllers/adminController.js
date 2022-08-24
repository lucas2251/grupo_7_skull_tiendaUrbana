
module.exports = {
    crear:(req,res) => {
        return res.render('crear')
    },
    eliminar: (req, res) => {
        idParams = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == idParams
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)

        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/administrador/historial')
    },
}
/* list: (req,res) => {
        return res.render('admin/listaProductos')
    },*/
   
    /*
    edit:(req,res) => {
        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
  /*      return res.render('admin/editarProducto')
    },
}*/