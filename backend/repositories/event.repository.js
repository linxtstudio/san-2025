const crypto = require('crypto')

const EventParticipant = require('../db/models').EventParticipant

const register = async (payload) => {
    return await EventParticipant.create({
        id: crypto.randomUUID(),
        name: payload.name,
        email: payload.email,
        phone_number: payload.phone_number,
        province_name: payload.province_name,
        city_name: payload.city_name,
        transfer_receipt_image: payload.transfer_receipt_image,
        event_participant_details: payload.event_type_ids.map((event_type_id) => ({
            id: crypto.randomUUID(),
            event_type_id,
        })),
    }, {
        include: ['event_participant_details'],
    })
}

module.exports = {
    register,
}
