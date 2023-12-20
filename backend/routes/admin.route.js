const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/auth.middleware')

const eventController = require('../controllers/event.controller')

router.get('/event/participants/by-city', verifyToken, eventController.getParticipantByCity)
router.get('/event/participants', verifyToken, eventController.getParticipants)

module.exports = router
