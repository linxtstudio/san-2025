const { Sequelize } = require('sequelize')
const { development } = require('../../config/db.config')

const { dialect, host, port, database, username, password } = development
const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    port,
});

module.exports = sequelize
