const crypto = require('crypto')
const sequelize = require('sequelize')

const EventParticipant = require('../db/models').EventParticipant
const EventParticipantDetail = require('../db/models').EventParticipantDetail

const register = async (payload) => {
    return await EventParticipant.create({
        id: crypto.randomUUID(),
        name: payload.name,
        email: payload.email,
        phone_number: payload.phone_number,
        city_id: payload.city_id,
        transfer_receipt_image: payload.transfer_receipt_image,
        event_participant_details: payload.event_type_ids.map((event_type_id) => ({
            id: crypto.randomUUID(),
            event_type_id,
        })),
        ...(payload?.event_participant_hotel_facility && {
            event_participant_hotel_facility: {
                id: crypto.randomUUID(),
                hotel_facility_id: payload?.event_participant_hotel_facility?.hotel_facility_id,
                stay_duration: payload?.event_participant_hotel_facility?.stay_duration,
            }
        })
    }, {
        include: [
            'event_participant_details',
            'event_participant_hotel_facility',
        ],
    })
}

const getParticipantByCity = async (payload) => {
    return await EventParticipantDetail.findAll({
        attributes: [
            [sequelize.literal('event_participant.city_id'), 'city_id'],
            [sequelize.fn('COUNT', sequelize.col('EventParticipantDetail.id')), 'count'],
        ],
        include: [
            {
                association: 'event_participant',
                include: [
                    {
                        association: 'city',
                    }
                ]
            },
        ],
        where: {
            ...(payload.event_type_id && {
                event_type_id: payload.event_type_id,
            }),
        },
        group: ['event_participant.city_id', 'event_participant.id', 'event_participant.city.id'],
        raw: true,
        nest: true,
    })
}

const getParticipants = async (filter, { paginate, page, per_page }) => {
    return EventParticipant.findAndCountAll({
        where: {
            ...(filter.city_id && { city_id: filter.city_id }),
            ...(filter.is_verified && { is_verified: filter.is_verified === 'true' }),
            ...(filter.search && {
                name: {
                    [sequelize.Op.iLike]: `%${filter.search}%`
                }
            }),
        },
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        }),
        order: [['created_at', 'ASC']],
        include: [
            {
                association: 'city',
                include: [
                    {
                        association: 'province',
                    }
                ]
            },
            {
                association: 'event_participant_details',
                where: {
                    ...(filter.event_type_id && {
                        event_type_id: filter.event_type_id,
                    }),
                },
            }
        ],
    })
}

const getParticipantDetail = async (filter) => {
    return await EventParticipant.findOne({
        where: {
            ...(filter.id && { id: filter.id }),
            ...(filter.is_verified && { is_verified: filter.is_verified }),
        },
        include: [
            {
                association: 'event_participant_details',
                include: [
                    {
                        association: 'event_type',
                    }
                ]
            },
            {
                association: 'event_participant_hotel_facility',
                include: [
                    {
                        association: 'hotel_facility',
                    }
                ]
            }
        ],
    })
}

const setVerified = async (participantId) => {
    return await EventParticipant.update({
        is_verified: true,
    }, {
        where: {
            id: participantId,
        },
    })
}

const setUnVerified = async (participantId) => {
    return await EventParticipant.update({
        is_verified: false,
    }, {
        where: {
            id: participantId,
        },
    })
}

module.exports = {
    register,

    getParticipantByCity,
    getParticipants,
    getParticipantDetail,

    setVerified,
    setUnVerified,
}
