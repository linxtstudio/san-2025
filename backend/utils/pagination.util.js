const getPaginatePayload = (query) => {
    const { paginate, page, per_page } = query

    return {
        paginate: !(paginate === 'false'),
        page: parseInt(page || '1'),
        per_page: parseInt(per_page || '10'),
    }
}

module.exports = {
    getPaginatePayload,
}
