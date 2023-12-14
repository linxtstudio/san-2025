const express = require('express')
const router = express.Router()

const eventTypeController = require('../controllers/event.type.controller')

router.get('/', eventTypeController.getAll)
router.post('/', eventTypeController.create)
router.put('/:id', eventTypeController.update)
router.delete('/:id', eventTypeController.destroy)

module.exports = router
