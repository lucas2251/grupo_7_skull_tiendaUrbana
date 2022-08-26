const fs = require('fs')
const path = require('path')
const productos = require('../data/productos.json')
const historial = require('../data/historial.json')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')
const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {    

    eliminar: (req, res) => {
        idParams = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == idParams
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)

        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/admin/listar')
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



/*let accesorios = require("../data/accesorios.json");
let longboards = require("../data/longboards.json");
let skates = require("../data/skates.json");
let lijas = require("../data/partes/lijas.json");
let otros = require("../data/partes/otros.json");
let ruedas = require("../data/partes/ruedas.json");
let tablas = require("../data/partes/tablas.json");
let trucks = require("../data/partes/trucks.json")*/

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
    

    
