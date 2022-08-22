
module.exports = {
    inicio: (req,res) => {
        return res.render('inicio')
    },
    about: (req,res) => {
        return res.render('about')
    },
    contacto: (req,res) => {
        return res.render('contacto')
    }
}