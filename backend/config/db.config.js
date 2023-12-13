require('dotenv').config()

module.exports = {
    development: {
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'san_2024',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432',
        dialect: 'postgres',
    },
    test: {
        username: '-',
        password: '-',
        database: '-',
        host: '-',
        port: '-',
        dialect: '-',
    },
    production: {
        username: '-',
        password: '-',
        database: '-',
        host: '-',
        port: '-',
        dialect: '-',
    }
};
