const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/auth.middleware')

const eventController = require('../controllers/event.controller')
const hotelFacilityController = require('../controllers/hotel.facility.controller')

// Event
router.get('/event/participants/by-city', verifyToken, eventController.getParticipantByCity)
router.get('/event/participants', verifyToken, eventController.getParticipants)
router.get('/event/participants/:participantId', verifyToken, eventController.getParticipantDetailAdmin)
router.put('/event/participants/:participantId/verified', verifyToken, eventController.setVerified)
router.put('/event/participants/:participantId/unverified', verifyToken, eventController.setUnverified)

router.get('/event/total-transaction', verifyToken, eventController.sumTotalTransaction)


// Hotel Facility
router.get('/hotel-facilities', hotelFacilityController.getAll)
router.get('/hotel-facilities/event-participants', hotelFacilityController.getHotelEventParticipants)
router.put('/hotel-facilities/update-all', hotelFacilityController.updateAll)

module.exports = router
