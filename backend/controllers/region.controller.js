const regionRepository = require('../repositories/region.repository')
const { getPaginatePayload } = require("../utils/pagination.util")

const getProvinces = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const provinces = await regionRepository.getProvinces(req.query, paginatePayload)

    res.status(200).json({
        status: 200,
        message: 'Success to get provinces',
        data: provinces,
    })
}

const getCities = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const cities = await regionRepository.getCities(req.query, paginatePayload)

    res.status(200).json({
        status: 200,
        message: 'Success to get cities',
        data: cities,
    })
}

module.exports = {
    getProvinces,
    getCities,
}
