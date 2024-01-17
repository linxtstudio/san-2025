const eventTypeRepo = require('../repositories/event.type.repository')
const { getPaginatePayload, getPaginateData } = require('../utils/pagination.util')

const getAll = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const eventTypes = await eventTypeRepo.getAll(paginatePayload)

    res.status(200).json({
        status: 200,
        message: 'Success to get event types',
        data: paginatePayload.paginate ? getPaginateData(eventTypes, paginatePayload) : eventTypes.rows,
    })
}

const create = async (req, res) => {
    const newEventType = await eventTypeRepo.create({
        ...req.body,
    })

    res.status(201).json({
        status: 201,
        message: 'Success to create new event type',
        data: newEventType,
    })
}

const update = async (req, res) => {
    const { id } = req.params
    await eventTypeRepo.update({
        id,
        ...req.body,
    })

    res.status(200).json({
        status: 200,
        message: 'Success to update event type',
    })
}

const destroy = async (req, res) => {
    const { id } = req.params
    await eventTypeRepo.destroy({ id })

    res.status(200).json({
        status: 200,
        message: 'Success to delete event type',
    })
}

module.exports = {
    getAll,
    create,
    update,
    destroy,
}
