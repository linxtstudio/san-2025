const Config = require('../db/models').Config

const getByCode = async (code) => {
    return await Config.findOne({
        where: {
            code: code,
        },
    })
}

module.exports = {
    getByCode,
}
