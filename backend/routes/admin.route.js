const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/auth.middleware')

const eventController = require('../controllers/event.controller')

router.get('/event/participants/by-city', verifyToken, eventController.getParticipantByCity)
router.get('/event/participants', verifyToken, eventController.getParticipants)
router.get('/event/participants/:participantId', verifyToken, eventController.getParticipantDetailAdmin)
router.put('/event/participants/:participantId/verified', verifyToken, eventController.setVerified)
router.put('/event/participants/:participantId/unverified', verifyToken, eventController.setUnverified)

module.exports = router
