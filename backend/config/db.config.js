const dbConfigs = {
    postgres: {
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432',
        db_name: process.env.DB_NAME || 'san_2024',
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
    }
}

module.exports = dbConfigs
