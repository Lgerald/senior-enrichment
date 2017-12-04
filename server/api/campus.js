'use strict'
const campusRouter = require('express').Router()
const  db = require('../db')
const { Campus, Students } = require("../db/models")


// GET
// - all campuses
campusRouter.get("/", (req,res,next) =>{
    Campus.findAll({
        include: [{all: true}]
    })
    .then(campuses => res.status(200).json(campuses))
    .catch(next)
})
// - a campus by id
campusRouter.get("/:id", (req, res, next) => {
    Campus.findById(req.params.id)
        .then(campus => res.status(200).json(campus))
        .catch(next)
})
// POST
// - new campus


// PUT
// - updated campus info for one campus

// DELETE
// - a campus

module.exports = campusRouter