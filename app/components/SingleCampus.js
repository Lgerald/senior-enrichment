import React, { Component } from 'react'
import store, { getCampus, getStudents } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EditCampus from './EditCampus'

export const SingleCampus = (props) => {
    const { campus, students } = props
    const routeId = Number(props.match.params.campusId)
    const filteredCampus = campus.find(c => c.id === routeId)
    const filteredStudents = students.filter(s => s.campusId === routeId)
    return (
        <div>
            {
            filteredCampus && 
            <div className="campusProfile" key={filteredCampus.id}>
                <h1>{filteredCampus.name} Campus</h1>
                <img src={filteredCampus.imageUrl}/>
                <p>{filteredCampus.description}</p>
                <h3>{filteredCampus.name} Campus Students:</h3>
                <ul>
                    {
                    filteredStudents &&
                    filteredStudents.map(student => <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>)
                    }
                </ul>
            </div>
            }
            <EditCampus />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        campus: state.campus,
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCampus () {
            const action = getCampus()
            dispatch(action)
        },
        getStudents () {
            const action = getStudents()
            dispatch(action)
        }
        
    }
}


const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer