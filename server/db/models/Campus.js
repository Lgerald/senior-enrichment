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
        defaultValue: "https://vignette.wikia.nocookie.net/nekoatsume/images/d/df/Classic_Style.png/revision/latest?cb=20151107131336"
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus