const regionRepository = require('../repositories/region.repository')
const { getPaginatePayload, getPaginateData } = require("../utils/pagination.util")

const getProvinces = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const provinces = await regionRepository.getProvinces(req.query, paginatePayload)

    res.status(200).json({
        status: 200,
        message: 'Success to get provinces',
        data: paginatePayload.paginate ? getPaginateData(provinces, paginatePayload) : provinces.rows,
    })
}

const getCities = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const cities = await regionRepository.getCities(req.query, paginatePayload)

    res.status(200).json({
        status: 200,
        message: 'Success to get cities',
        data: paginatePayload.paginate ? getPaginateData(cities, paginatePayload) : cities.rows,
    })
}

module.exports = {
    getProvinces,
    getCities,
}
