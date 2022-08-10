const express = require('express')
const router = express.Router()

let {about} = require('../controllers/aboutController')

router.get('/about', about)

module.exports = router