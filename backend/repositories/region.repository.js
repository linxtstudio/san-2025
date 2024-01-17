const { Op } = require("sequelize")

const Province = require('../db/models').RegionProvince
const City = require('../db/models').RegionCity

const getProvinces = async (filter, { paginate, page, per_page }) => {
    return await Province.findAndCountAll({
        where: {
            ...(filter.search && {
                name: {
                    [Op.iLike]: `%${filter.search}%`,
                },
            }),
        },
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        })
    })
}

const getCities = async (filter, { paginate, page, per_page }) => {
    return await City.findAndCountAll({
        where: {
            ...(filter.search && {
                name: {
                    [Op.iLike]: `%${filter.search}%`,
                },
            }),
            ...(filter.province_id && {
                province_id: filter.province_id,
            }),
        },
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        }),
    })
}

module.exports = {
    getProvinces,
    getCities,
}
