const sequelize = require("sequelize")
const { Op } = require("sequelize")
const HotelFacility = require('../db/models').HotelFacility
const EventParticipantHotelFacility = require('../db/models').EventParticipantHotelFacility

const getAll = async (filter, { paginate, page, per_page }) => {
    return await HotelFacility.findAndCountAll({
        where: {
            is_active: true,
        },
        order: [['sequence', 'ASC']],
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        }),
    })
}

const getHotelEventParticipants = async (filter, { paginate, page, per_page }) => {
    return await EventParticipantHotelFacility.findAndCountAll({
        order: [['created_at', 'ASC']],
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        }),
        include: [
            {
                association: 'event_participant',
            },
            {
                association: 'hotel_facility',
            }
        ],
        where: {
            ...(filter.search && {
                [Op.or]: [
                    sequelize.literal('"event_participant"."name" ILIKE :search'),
                    sequelize.literal('"hotel_facility"."name" ILIKE :search')
                ]
            })
        },
        replacements: {
            ...(filter.search && {
                search: `%${filter.search}%`
            })},
    })
}

const updateByCode = async (code, data) => {
    await HotelFacility.update({
        ...(data.room_availability && { room_availability: data.room_availability }),
        ...(data.price && { price: data.price }),
    }, {
        where: { code }
    })
}

const decrementRoomAvailabilityById = async (id, amount = 1) => {
    await HotelFacility.decrement('room_availability', {
        by: amount,
        where: { id }
    })
}

module.exports = {
    getAll,
    getHotelEventParticipants,
    updateByCode,
    decrementRoomAvailabilityById,
}
