let productos = require("../data/productos.json");
let lijas = require("../data/partes/lijas.json");
let otros = require("../data/partes/otros.json");
let ruedas = require("../data/partes/ruedas.json");
let tablas = require("../data/partes/tablas.json");
let trucks = require("../data/partes/trucks.json")

module.exports = {


    listar: (req,res) => {
        return res.render('admin/listar', {
            productos,
            lijas,
            otros,
            ruedas,
            tablas,
            trucks
        })
    },
    crear:(req,res) => {
        return res.render('admin/crear')
    },
    editar:(req,res) => {

        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
       return res.render('admin/editar')
    }

    }
