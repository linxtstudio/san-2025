const express = require('express')
const router = express.Router()

const hotelFacilityController = require('../controllers/hotel.facility.controller')

router.get('/', hotelFacilityController.getAll)

module.exports = router
