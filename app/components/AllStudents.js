import React, { Component } from 'react'
import store, { getStudents, deleteStudentRequest } from '../store'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


export const AllStudents = (props) => {
    const { students, deleteStudent } = props
    return (
        <div>
            <ul>
            {
                students.map(student => {
                    return (
                        <li key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.name}</Link><button name={student.id} onClick={deleteStudent}>X</button>
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
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents () {
            const action = getStudents()
            dispatch(action)
        },
        deleteStudent () {
            e.preventDefault()
            const action = deleteStudentRequest(e.target.name)
            dispatch(action)
        }
    }
}


const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default AllStudentsContainer