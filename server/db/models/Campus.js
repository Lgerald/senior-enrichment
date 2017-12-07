'use strict';
const Sequelize = require('sequelize');
const db = require("../index");


const Campus = db.define("campuses", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "http://www.mobygames.com/images/covers/l/316950-neko-atsume-kitty-collector-ipad-front-cover.png"
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus