const express = require('express')
const router = express.Router()

const eventController = require('../controllers/event.controller')

router.post('/register', eventController.register)

router.get('/participants/:participantId', eventController.getParticipantDetail)

module.exports = router
