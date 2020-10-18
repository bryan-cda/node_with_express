const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Spoiler = sequelize.define("ninja", {
  id: {
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
  }
});

module.exports = Spoiler;

module.exports = Ninja;