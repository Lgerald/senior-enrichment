import React, { Component } from 'react'
import store, { deleteCampusRequest } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export const AllCampuses = (props) => {

        const { campus, deleteCampus } = props
        return (
            <div>
                <ul>
                {
                   campus.map(campus => {
                       return (
                            <li key={campus.id}>
                            <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
                            <button name={campus.id} onClick={deleteCampus}>x</button>
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
        campus: state.campus,
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCampus (e) {
            e.preventDefault()
            const action = deleteCampusRequest(e.target.name)
            dispatch(action)
        }
    }
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default AllCampusesContainer