import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EditStudents from './EditStudents'


export const SingleStudent = (props) => {

    const { students, campus } = props
    const filteredStudent = students

    return (
    <div className="singleStudent">
        {
            filteredStudent &&
            <div className="studentProfile" key={filteredStudent.id}>
                <h1><u>{filteredStudent.name}</u></h1>
                <h4>email: {filteredStudent.email}</h4>
                <h4>gpa: {filteredStudent.gpa || 0.0}</h4>
                <Link to={`/campus/${filteredStudent.campusId}`}>{filteredStudent.campus.name} Campus</Link>
            </div>
        }
        <EditStudents student={filteredStudent && filteredStudent}/>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const routeId = Number(ownProps.match.params.studentId)
    return {
        students: state.students.find(s => s.id === routeId),
        campus: state.campus
    }
}


const singleStudentContainer = (connect(mapStateToProps)(SingleStudent))

export default singleStudentContainer




