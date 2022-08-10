const express = require('express')
const router = express.Router()

let {contacto, about} = require('../controllers/nosotrosController')

router.get('/contacto', contacto);
router.get('/about', about)

module.exports = router