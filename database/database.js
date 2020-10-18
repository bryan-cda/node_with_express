const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";

const config = require("../config/config.js")[env];

const sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;