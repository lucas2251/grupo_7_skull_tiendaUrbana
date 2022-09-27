module.exports = (req,res,next) => {
    if (req.cookies.helloCookie) {
        req.session.usuarioIngresar = req.cookies.helloCookie
    }
    next()
}