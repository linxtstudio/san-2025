const HotelFacility = require('../db/models').HotelFacility;

const getAll = async (filter, { paginate, page, per_page }) => {
    return await HotelFacility.findAndCountAll({
        attributes: [
            'id',
            'name',
            'room_availability',
            'price',
            'created_at',
            'updated_at'
        ],
        order: [['sequence', 'ASC']],
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        }),
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
    updateByCode,
    decrementRoomAvailabilityById,
}
