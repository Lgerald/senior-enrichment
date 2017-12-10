import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EditStudents from './EditStudents'



export const SingleStudent = (props) => {

    const { students, campus } = props
    const filteredStudent = students

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

const mapStateToProps = (state, ownProps) => {
    const routeId = Number(ownProps.match.params.studentId)
    return {
        students: state.students.find(s => s.id === routeId),
        campus: state.campus
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getStudents() {
//             const action = getStudents()
//             dispatch(action)
//         },
//         getCampuses() {
//             const action = getCampuses()
//             dispatch(action)
//         }

//     }
// }


const singleStudentContainer = (connect(mapStateToProps)(SingleStudent))

export default singleStudentContainer




