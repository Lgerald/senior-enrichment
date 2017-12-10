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
studentsRouter.get("/:studentId", (req, res ,next) => {
    Students.findById(req.params.studentId, {include: [{all:true}]})
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
    Students.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa,
        campusId: req.body.campusId || (Math.random()*7)
    })
    .then(newStudent => res.status(201).json(newStudent))
    .catch(next)
})
// PUT
// - updated student info for one student
studentsRouter.put("/:studentId", (req,res,next) => {
    Students.update(req.body, {where: {id: req.params.studentId}, returning: true})
    .then(([numrows, [updatedStudent]]) => res.status(200).json(updatedStudent))
    .catch(next)
})

// DELETE
// - a student
studentsRouter.delete("/:studentId", (req,res,next) => {
    Students.destroy({where: {id: req.params.studentId}, returning: true})
    .then((numrows, destroyedStudent) => res.json(`you just deleted student ${req.params.studentId}`))
    .catch(next)
})//to show whats been destoryed, you can refer to whatever on req.body

module.exports = studentsRouter