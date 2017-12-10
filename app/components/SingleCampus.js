import React, { Component } from 'react'
import store, { deleteStudentRequest } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EditCampus from './EditCampus'

export const SingleCampus = (props) => {
    const { campus, students, deleteStudent } = props

    //const routeId = Number(props.match.params.campusId)
    const filteredCampus = campus
    const filteredStudents = students
    return (
        <div className="singleCampus">
            {
            filteredCampus && 
            <div className="campusProfile" key={filteredCampus.id}>
                <h1><u>{filteredCampus.name} Campus</u></h1>
                <img src={filteredCampus.imageUrl}/>
                <p>{filteredCampus.description}</p>
                <h4>{filteredCampus.name} Campus Students:</h4>
                <ul>
                    {
                    filteredStudents &&
                    filteredStudents.map(student => <li key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
                        <button name={student.id} onClick={deleteStudent}>X</button>
                        </li>)
                    }
                </ul>
            </div>
            }
            <EditCampus campus={filteredCampus && filteredCampus}/>
        </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    const routeId = Number(ownProps.match.params.campusId)
    return {
        campus: state.campus.find(c => c.id === routeId),
        students: state.students.filter(s => s.campusId === routeId)
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


const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer