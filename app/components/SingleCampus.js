import React, { Component } from 'react'
import store, { getCampus } from '../store'
import { connect } from 'react-redux'

export const SingleCampus = (props) => {
    const { campus } = props
    const routeId = Number(props.match.params.campusId)
    const filteredCampus = campus.filter(c => c.id === routeId)


    return (
        <div>
        <ul>
            {filteredCampus.map(campus => <li key={campus.id}>{campus.name}</li>)}
        </ul>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        campus: state.campus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCampus () {
            const action = getCampus()
            dispatch(action)
        }
    }
}


const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer