import React, { Component } from 'react'
import store, { getCampuses } from '../store'
import { connect } from 'react-redux'


export const AllCampuses = (props) => {

        const { campuses } = props
        return (
            <div>
                <ul>
                {
                   campuses.map(campus => {
                       return (
                            <li key={campus.id}>{campus.name}</li>
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
        }
    }
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default AllCampusesContainer