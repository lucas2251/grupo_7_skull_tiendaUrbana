const express = require('express')
const router = express.Router()

let {contacto} = require('../controllers/contactoController')

router.get('/contacto', contacto)

module.exports = router