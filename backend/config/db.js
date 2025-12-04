const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'fionagreens',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'postgres',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: false,
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL Connected');
        await sequelize.sync(); // Sync models with database
        console.log('Database Synced');
    } catch (error) {
        console.error('PostgreSQL Connection Error:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
