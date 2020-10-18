const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Ninja = sequelize.define("ninja", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER

    },
    name:{
        allowNull: false,
        type: Sequelize.STRING(255),
        validate:{
            len: [2, 255]
        }
    },

    village:{
        allowNull: false,
        type: Sequelize.STRING(40),
        validate:{
            len: [2, 40]
        }
    }
});

module.exports = Ninja;