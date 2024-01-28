const configRepository = require('../repositories/config.repository')

const getConfigByCode = async (code) => {
    return await configRepository.getByCode(code)
}

const getSanStartDateConfig = async () => {
    return (await getConfigByCode('san-start-date'))?.value || '2024-01-01'
}

module.exports = {
    getConfigByCode,
    getSanStartDateConfig,
}
