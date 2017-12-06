import React, { Component } from 'react'
import store, { getStudent } from '../store'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'



export const SingleStudent = (props) => {
    //console.log(props)
    const { students } = props
    const routeId = Number(props.match.params.studentId)

    const filteredStudent = students.filter(s => s.id === routeId).map(student => student)

    return (
    <div>
        { filteredStudent.map(student => {
            return (
 
                <h1 key={student.id}>name: {student.name}</h1>


                    ) 
                
                })
        }
    </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        students: state.students
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


const singleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))

export default singleStudentContainer




