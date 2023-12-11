const { Sequelize } = require('sequelize')
const { postgres } = require('../../config/db.config')

const { dialect, host, port, db_name, username, password } = postgres
const sequelize = new Sequelize(db_name, username, password, {
    host,
    dialect,
    port,
});

module.exports = sequelize
