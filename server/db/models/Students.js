'use strict';
const Sequelize = require('sequelize');
const db = require("../db/index");


const Students = db.define("students", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    },
    gpa: {
        type: Sequelize.FLOAT
    },
    name: {
        type: Sequelize.VIRTUAL,
        get() {
            return `${this.getDataValue("firstName")} ${this.getDataValue("lastName")}`
        }
    }
})

module.exports = Students