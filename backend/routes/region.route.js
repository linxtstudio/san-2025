const express = require('express')
const router = express.Router()

const regionController = require('../controllers/region.controller')

router.get('/provinces', regionController.getProvinces)
router.get('/cities', regionController.getCities)

module.exports = router
