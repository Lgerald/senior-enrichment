import React, { Component } from 'react'
import store, { getStudent } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EditStudents from './EditStudents'



export const SingleStudent = (props) => {

    const { students, campus } = props
    console.log("props", props)
    const routeId = Number(props.match.params.studentId)
    const filteredStudent = students.find(s => s.id === routeId)


    return (
    <div>
        {
            filteredStudent &&
            <div className="studentProfile" key={filteredStudent.id}>
                <h1>{filteredStudent.name}</h1>
                <h3>email: {filteredStudent.email}</h3>
                <h4>gpa: {filteredStudent.gpa || 0.0}</h4>
                <Link to={`/campus/${filteredStudent.campusId}`}>{filteredStudent.campus.name}</Link>
            </div>
        }
        
        <EditStudents student={filteredStudent && filteredStudent}/>
    </div>
    )
}

const mapStateToProps = (state) => {

    return {
        students: state.students,
        campus: state.campus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudent() {
            const action = getStudent()
            dispatch(action)
        }
    }
}


const singleStudentContainer = (connect(mapStateToProps, mapDispatchToProps)(SingleStudent))

export default singleStudentContainer




