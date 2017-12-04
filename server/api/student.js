'use strict'
const studentsRouter = require('express').Router()
const db = require('../db')
const { Campus, Students } = require("../db/models")


// GET
// - all students
studentsRouter.get("/", (req,res,next) => {
    Students.findAll({
        include: [{all:true}]
    })
    .then(students => res.status(200).json(students))
    .catch(next);
})
// - a student by id
studentsRouter.get("/:id", (req, res ,next) => {
    Students.findById(req.params.id)
    .then(student => res.status(200).json(student))
    .catch(next)
})

// POST
// - new student
studentsRouter.post("/", (req,res,next) =>{
    Students.create(req.body)
    .then(newStudent => {
        res.json(newStudent);
    })
})
// PUT
// - updated student info for one student

// DELETE
// - a student

module.exports = studentsRouter