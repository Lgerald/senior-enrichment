import React, { Component } from 'react'
import store, { getStudent } from '../store'
import { connect } from 'react-redux'


export const SingleStudent = (props) => {
    console.log(props)
    const { student } = props
    const routeId = Number(props.match.params.studentId)
    const filteredStudent = student.filter(s => s.id === routeId)

    return (
        <div>
            {filteredStudent.map(student => <h1 key={student.id}>{student.name}</h1>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        student: state.students
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


const singleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default singleStudentContainer