const getPaginatePayload = (query) => {
    const { paginate, page, per_page } = query

    return {
        paginate: !(paginate === 'false'),
        page: parseInt(page || '1'),
        per_page: parseInt(per_page || '10'),
    }
}

const getPaginateData = ({ count, rows }, paginatePayload) => ({
    total: count,
    data: rows,
    total_pages: Math.ceil(count / paginatePayload.per_page),
    current_page: paginatePayload.page || 1,
})

module.exports = {
    getPaginatePayload,
    getPaginateData,
}
