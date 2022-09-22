const {validationResult} = require("express-validator")
const fs = require('fs')
const usuarios = require("../data/usuarios.json")
const path = require('path')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    registro: (req,res) => {
        /*console.log(usuarios.length)*/;
        return res.render('registro')
    },
    ingresar: (req,res) => {
        return res.render('ingresar')
    },
    procesoRegistro: (req,res) =>{
       
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()){
        let {nombre,apellido,clave,email}= req.body
        let usuarioNuevo = {
            id: usuarios[usuarios.length - 1].id + 1,
            nombre:nombre,
            apellido:apellido,
            email:email,
            clave:clave,
            imagen: req.file.size > 1 ? req.file.filename : "avatar-porDefecto.png"
        }
        usuarios.push(usuarioNuevo)
        guardar(usuarios)
        return res.redirect('/')

        } else{  
        /* return res.send(errors.mapped()) */
       
        return res.render('registro', {
            errors: errors.mapped(),
            old: req.body
        })}
        }
    
    ,
    procesoIngresar: (req,res) => {
let errors = validationResult(req)
if(errors.isEmpty()){
    return res.send(req.body)
}else{
    return res.render("ingresar",
    {
        errors:errors.mapped(),
        old: req.body
    })
}
    }
}