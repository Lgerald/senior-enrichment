import React, { Component } from 'react'
import store, { getCampuses, deleteCampusRequest } from '../store'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


export const AllCampuses = (props) => {

        const { campuses, deleteCampus } = props
        return (
            <div>
                <ul>
                {
                   campuses.map(campus => {
                       return (
                            <li key={campus.id}>
                            <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
                            <button name={campus.id} onClick={deleteCampus}>X</button>
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
        campuses: state.campus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCampuses () {
            const action = getCampuses()
            dispatch(action)
        },
        deleteCampus (e) {
            e.preventDefault()
            const action = deleteCampusRequest(e.target.name)
            dispatch(action)
        }
    }
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default AllCampusesContainer