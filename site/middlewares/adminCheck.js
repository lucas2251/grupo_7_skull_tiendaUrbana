module.exports = (req,res,next) => {
    if (req.session.usuarioIngresar) {
        if (req.session.usuarioIngresar.rol === 'admin') {
            return next()
        }
    }
    res.redirect('/')
}