const {validationResult} = require("express-validator")
const fs = require('fs')
const usuarios = require("../data/usuarios.json")
const path = require('path')
const bcrypt = require("bcryptjs")
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
            clave:bcrypt.hashSync(clave, 12),
            imagen: req.file.size > 1 ? req.file.filename : "avatar-porDefecto.png",
            rol: "usuario"
        }
        
        usuarios.push(usuarioNuevo)
        guardar(usuarios)
        return res.redirect('/')

        } else{  
            let ruta = (dato) => fs.existsSync(path.join(__dirname,  '..', 'public', 'images', 'usuarios', dato))
            if (ruta(req.file.filename) && (req.file.filename !== "default-image.png")) {
                fs.unlinkSync(path.join(__dirname,  '..', 'public', 'images', 'usuarios', req.file.filename))
            }
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

    const {email,recordarme}=req.body
    let usuario = usuarios.find(user => user.email === email)
    req.session.usuarioIngresar = {
    id: usuario.id,
    nombre : usuario.nombre,
    rol: usuario.rol,
    imagen:usuario.imagen
    }

    if (recordarme) {
        res.cookie("SKULL-TIENDA URBANA", req.session.usuarioIngresar,{
            maxAge: 1000 * 60 * 60 * 24
        })
    }
    return res.redirect("perfil")
    /*return res.send(req.body)*/
    }else{
        
     return res.render("ingresar",
    {
        errors:errors.mapped(),
        old: req.body
    })
}
    }, perfil: (req,res) => {
       
        return res.render('perfil')
    },
    desconectar: (req,res)=>{
        req.session.destroy()
        return res.redirect("/")
    }
}