const EventParticipantAttendance = require('../db/models').EventParticipantAttendance

const create = async (payload) => {
    return await EventParticipantAttendance.create({
        id: crypto.randomUUID(),
        event_participant_id: payload.event_participant_id,
        attended_at: new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta'
        }),
    })
}

module.exports = {
    create,
}
