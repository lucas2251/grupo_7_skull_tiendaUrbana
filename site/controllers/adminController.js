const productos = require("../data/productos.json");
const lijas = require("../data/partes/lijas.json");
const otros = require("../data/partes/otros.json");
const ruedas = require("../data/partes/ruedas.json");
const tablas = require("../data/partes/tablas.json");
const trucks = require("../data/partes/trucks.json");

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

    
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
    },
    tienda:(req,res) =>{
        
        let {Marca, Título, Categoria, Precio, Descuento, Stock, Descripción}= req.body
        
        let producto ={
            id: productos[productos.length - 1].id + 1,
            marca,
            titulo,
            categorias,
            precio,
            descuento,
            stock,
            descripcion,
            imagenes

        }
    }

    }
