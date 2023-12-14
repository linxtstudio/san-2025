const crypto = require('crypto')
const EventType = require('../db/models').EventType

const getAll = async ({ paginate, page, per_page}) => {
    return await EventType.findAll({
        attributes: ['id', 'name', 'description', 'fee_type', 'fee_nominal'],
        where: { is_active: true },
        order: [['sequence', 'ASC']],
        ...(paginate && {
            limit: per_page,
            offset: (page - 1) * per_page,
        })
    })
}

const create = async ({ name, description, fee_type, fee_nominal, sequence }) => {
    return await EventType.create({
        id: crypto.randomUUID(),
        name,
        description,
        fee_type,
        fee_nominal,
        sequence,
    })
}

const update = async ({ id, name, description, fee_type, fee_nominal, sequence }) => {
    await EventType.update(
        {
            ...(name && { name }),
            ...(description && { description }),
            ...(fee_type && { fee_type }),
            ...(fee_nominal && { fee_nominal }),
            ...(sequence && { sequence }),
        },
        {
            where: { id },
        }
    )
}

const destroy = async ({ id }) => {
    return await EventType.destroy({ where: { id } })
}

module.exports = {
    getAll,
    create,
    update,
    destroy,
}
