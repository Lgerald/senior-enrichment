'use strict';
const Sequelize = require('sequelize');
const db = require("../db/index");


const Campuses = db.define("campuses", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ImageUrl: {
        type: Sequelize.STRING,
        defaultValue: "http://2.bp.blogspot.com/-lQTq790Uxo0/UF9wJG432uI/AAAAAAAAAis/OFLh71VPtKc/s1600/vlcsnap-2012-09-23-21h23m00s35.png"
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campuses