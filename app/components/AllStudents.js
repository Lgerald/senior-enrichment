import React, { Component } from 'react'
import store, { getStudents } from '../store'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


export const AllStudents = (props) => {
    const { students } = props
    return (
        <div>
            <ul>
            {
                students.map(student => {
                    return (
                        <li key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
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
        }
    }
}


const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default AllStudentsContainer