const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";

const config = require("../config/config.js")[env];

const sequilize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);