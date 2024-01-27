const hotelFacilityRepository = require('../repositories/hotel.facility.repository')
const { getPaginatePayload, getPaginateData } = require('../utils/pagination.util')

const getAll = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const hotelFacilities = await hotelFacilityRepository.getAll(req.query, paginatePayload)

    res.status(200).json({
        status: 200,
        message: 'Success to get hotel facilities',
        data: paginatePayload.paginate ? getPaginateData(hotelFacilities, paginatePayload) : hotelFacilities.rows,
    })
}

const updateAll = async (req, res) => {
    const {
        superior_room: superiorRoom,
        deluxe_room: deluxeRoom,
        deluxe_premier_room: deluxePremierRoom,
        family_room: familyRoom,
        suite_room: suiteRoom,
        aston_suite_room: astonSuiteRoom,
    } = req.body

    if (superiorRoom) {
        await hotelFacilityRepository.updateByCode('superior-room', superiorRoom)
    }

    if (deluxeRoom) {
        await hotelFacilityRepository.updateByCode('deluxe-room', deluxeRoom)
    }

    if (deluxePremierRoom) {
        await hotelFacilityRepository.updateByCode('deluxe-premier-room', deluxePremierRoom)
    }

    if (familyRoom) {
        await hotelFacilityRepository.updateByCode('family-room', familyRoom)
    }

    if (suiteRoom) {
        await hotelFacilityRepository.updateByCode('suite-room', suiteRoom)
    }

    if (astonSuiteRoom) {
        await hotelFacilityRepository.updateByCode('aston-suite-room', astonSuiteRoom)
    }

    res.status(200).json({
        status: 200,
        message: 'Success to update hotel facilities',
        data: null,
    })
}

module.exports = {
    getAll,
    updateAll,
}
