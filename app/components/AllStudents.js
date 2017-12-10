import React, { Component } from 'react'
import store, { deleteStudentRequest } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export const AllStudents = (props) => {
    const { students, deleteStudent } = props
    return (
        <div>
            <ul>
            {
                students.map(student => {
                    return (
                        <li key={student.id}>
                            <Link to={`/students/${student.id}`}>{student.name}</Link><button name={student.id} onClick={deleteStudent}>x</button>
                        </li>
                    )
                })
            }
            </ul>
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
        deleteStudent (e) {
            e.preventDefault()
            const action = deleteStudentRequest(e.target.name)
            dispatch(action)

        }
    }
}


const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default AllStudentsContainer