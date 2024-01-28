const { addDays: addDaysDateFns, format: formatDateFns } = require('date-fns')

const setFormat = (date, format = 'yyyy-mm-dd') => {
    return formatDateFns(date, format)
}

const addDays = (date, days) => {
    return addDaysDateFns(date, days)
}

module.exports = {
    setFormat,
    addDays,
}
