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
// - new campus //ask about find or create***
campusRouter.post("/", (req,res,next) => {
    Campus.create(req.body)
    .then(newCampus => res.status(201).json(newCampus))
    .catch(next)
})


// PUT
// - updated campus info for one campus
campusRouter.put("/:id", (req,res,next) => {
    Campus.update(req.body, {where: {id: req.params.id}, returning: true})
    .then(([numrows, [updatedCampus]]) => res.status(200).json(updatedCampus))
    .catch(next)
})

// DELETE
// - a campus
campusRouter.delete("/:id", (req,res,next) => {
    Campus.destroy({where: {id: req.params.id}, returning: true})
    .then((numrows, destroyedCampus) => res.json(`You just deleted campus ${req.params.id}`))
    .catch(next)
})

module.exports = campusRouter