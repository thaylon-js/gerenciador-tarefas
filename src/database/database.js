const sequelize = require('sequelize');
require('dotenv').config();

const dbName = process.env.DATABASE;
const dbUser = process.env.USER;
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;

const connection = new sequelize.Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost,
});

module.exports = connection;