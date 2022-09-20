const {validationResult} = require("express-validator")


module.exports = {
    registro: (req,res) => {
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
            return res.send(req.body)
        } else{  
        /* return res.send(errors.mapped()) */
            return res.render('registro', {
                errors: errors.mapped(),
                old: req.body
            })}
        }
    
    ,
    procesoIngresar: (req,res) => {

    }
}