const express = require('express')
const controller = require('../controler/controller')

const router = express.Router()


router.get('/ninjas', controller.findAll)

router.post('/ninjas', controller.create)

module.exports = router