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
campusRouter.get("/:campusId", (req, res, next) => {
    Campus.findById(req.params.campusId, {include: [{all: true}]})
        .then(campus => res.status(200).json(campus))
        .catch(next)
})
// POST
// - new campus //ask about find or create***
campusRouter.post("/", (req,res,next) => {
    Campus.create(req.body)
    .then(newCampus => res.status(201).json(newCampus))
    .catch(next)
})



// PUT
// - updated campus info for one campus
campusRouter.put("/:campusId", (req,res,next) => {
    Campus.update(req.body, {where: {id: req.params.campusId}, returning: true})
    .then(([numrows, [updatedCampus]]) => res.status(200).json(updatedCampus))
    .catch(next)
})

// DELETE
// - a campus
campusRouter.delete("/:campusId", (req,res,next) => {
    Campus.destroy({where: {id: req.params.campusId}, returning: true})
    .then((numrows, destroyedCampus) => res.json(`You just deleted campus ${req.params.campusId}`))
    .catch(next)
})

module.exports = campusRouter