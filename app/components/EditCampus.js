import React, { Component } from 'react'
import { connect } from 'react-redux'
import store ,{ editCampusRequest, newCampus } from '../store'
import { withRouter } from 'react-router-dom'


export const campusEdit = (props) => {
    const { handleSubmit, newCampus, handleChange } = props
    return (
        <div>
            <h3>Edit this Campus:</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="campusName" className="col-sm-2 control-label">Name:</label>
                <input
                    className="form-control"
                    name="campusName"
                    onChange={handleChange}
                />

                <label htmlFor="description" className="col-sm-2 control-label">description:</label>
                <input
                    className="form-control"
                    name="description"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default" >submit</button>
            </div>
        </form>
        </div>
    )

}


const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handleChange: (e) => {
            e.preventDefault()
            let name = [e.target.name]
            name = e.target.value
            dispatch(newCampus(name))
        },
        handleSubmit: (e) => {
            e.preventDefault()
            const name = e.target.campusName.value || ownProps.campus.name
            const description = e.target.description.value || ownProps.campus.description
            const action = editCampusRequest(ownProps.campus.id, {name, description}, ownProps.history)
            dispatch(action)
        }
    }

}

const EditCampusContainer = withRouter(connect(null, mapDispatchToProps)(campusEdit))

export default EditCampusContainer