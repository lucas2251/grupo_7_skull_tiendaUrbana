module.exports = (req,res,next) => {
    if (req.session.usuarioIngresar) {
        res.locals.usuarioIngresar = req.session.usuarioIngresar
    }
    next()
}