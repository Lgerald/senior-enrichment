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
    Students.findById(req.params.id, {include: [{all:true}]})
    .then(student => res.status(200).json(student))
    .catch(next)
})
/*to properly eager load:
in another then:
    return model.findbyid(thing {include {}})
*/
// POST
// - new student //ask about find or create***
studentsRouter.post("/", (req,res,next) =>{
    Students.create(req.body)
    .then(newStudent => res.status(201).json(newStudent))
    .catch(next)
})
// PUT
// - updated student info for one student
studentsRouter.put("/:id", (req,res,next) => {
    Students.update(req.body, {where: {id: req.params.id}, returning: true})
    .then(([numrows, [updatedStudent]]) => res.status(200).json(updatedStudent))
    .catch(next)
})

// DELETE
// - a student
studentsRouter.delete("/:id", (req,res,next) => {
    Students.destroy({where: {id: req.params.id}, returning: true})
    .then((numrows, destroyedStudent) => res.json(`you just deleted student ${req.params.id}`))
    .catch(next)
})//to show whats been destoryed, you can refer to whatever on req.body

module.exports = studentsRouter