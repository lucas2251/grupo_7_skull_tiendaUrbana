
module.exports = {
    registro: (req,res) => {
        return res.render('registro')
    },
    ingresar: (req,res) => {
        return res.render('ingresar')
    },
    perfilDeUsuario: (req,res) => {
        return res.render('perfilDeUsuario')
    },
    edicionUsuario: (req,res) => {
        return res.render('edicionDeUsuario')
    }
}