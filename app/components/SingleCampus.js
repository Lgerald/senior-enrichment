import React, { Component } from 'react'
import store, { getCampus, getStudents } from '../store'
import { connect } from 'react-redux'

export const SingleCampus = (props) => {
    const { campus, students } = props
    const routeId = Number(props.match.params.campusId)
    const filteredCampus = campus.filter(c => c.id === routeId)



    return (
        <div>
            {filteredCampus.map(campus => <h1 key={campus.id}>{campus.name}</h1>)}
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