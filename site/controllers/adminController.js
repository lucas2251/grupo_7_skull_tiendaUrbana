/*let accesorios = require("../data/accesorios.json");
let longboards = require("../data/longboards.json");
let skates = require("../data/skates.json");
let lijas = require("../data/partes/lijas.json");
let otros = require("../data/partes/otros.json");
let ruedas = require("../data/partes/ruedas.json");
let tablas = require("../data/partes/tablas.json");
let trucks = require("../data/partes/trucks.json")*/

module.exports = {


    /*listar: (req,res) => {
        return res.render('admin/listar', {
            accesorios, 
            longboards,
            skates,
            lijas,
            otros,
            ruedas,
            tablas,
            trucks
        })
    },*/

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
    crear: (req,res) =>  {        
    

    },
    editar: (req,res) => {
        
    },
    historial: (req,res) => {
        
    },
    restaurar: (req,res) => {
        
    },



}
/* list: (req,res) => {
        return res.render('admin/listaProductos')
    },*/
   
    /*
    edit:(req,res) => {

    crear:(req,res) => {
        return res.render('admin/crear')
    },
    editar:(req,res) => {


        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
       /*return res.render('admin/editar')*/
    

    
