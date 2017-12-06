import React, { Component } from 'react'
import store, { getStudent } from '../store'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'



export const SingleStudent = (props) => {
    console.log(props)
    const { students, campus } = props
    const routeId = Number(props.match.params.studentId)

    const filteredStudent = students.filter(s => s.id === routeId)
 

    return (
    <div>
        { filteredStudent.map(student => {
            return (
                <div className="StudentProfile" key={student.id}>
                <h1>name: {student.name}</h1>
                <h2>campus: {(campus.filter(camp => camp.id === student.campusId)).map(campus => campus.name)} </h2>
                </div>


                    ) 
                
                })
        }
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


const singleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))

export default singleStudentContainer




