'use strict';
const Sequelize = require('sequelize');
const db = require("../index");

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!
const Campus = require('./Campus')
const Students = require('./Students')


// This is also probably a good place for you to set up your associations
Students.belongsTo(Campus);
Campus.hasMany(Students);

module.exports = {
	Students,
	Campus
}