const express = require('express')
const controller = require('../controler/controller')

const router = express.Router()

router.get('/ninjas/:id', controller.findOne)

router.get('/ninjas', controller.findAll)

router.post('/ninjas', controller.create)

router.put('/ninjas/:id', controller.update)

router.delete('/ninjas/:id', controller.delete)

module.exports = router