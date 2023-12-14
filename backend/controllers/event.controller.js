const eventRepository = require('../repositories/event.repository')

const register = async (req, res) => {
    const eventParticipant = await eventRepository.register(req.body)

    res.status(200).json({
        status: 200,
        message: 'Success to register event',
        data: eventParticipant,
    })
}

module.exports = {
    register,
}
