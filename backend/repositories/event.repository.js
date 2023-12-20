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
    }, {
        include: ['event_participant_details'],
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
    return EventParticipantDetail.findAll({
        where: {
            ...(filter.event_type_id && {
                event_type_id: filter.event_type_id,
            }),
        },
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        }),
        include: [
            {
                association: 'event_participant',
                where: {
                    ...(filter.city_id && {
                        city_id: filter.city_id,
                    }),
                },
                include: [
                    {
                        association: 'city',
                        include: [
                            {
                                association: 'province',
                            }
                        ]
                    }
                ]
            },
            {
                association: 'event_type',
            },
        ],
        raw: true,
        nest: true,
    })
}

module.exports = {
    register,
    getParticipantByCity,
    getParticipants,
}
