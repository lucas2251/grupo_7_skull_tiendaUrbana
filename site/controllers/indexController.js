let productos = require('../data/index.json')


module.exports = {
    inicio: (req,res) => {
        return res.render('inicio',{productos})
    },
    about: (req,res) => {
        return res.render('about')
    },
    contacto: (req,res) => {
        return res.render('contacto')
    }
}