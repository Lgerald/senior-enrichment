import React, { Component } from 'react'
import { connect } from 'react-redux'
import store ,{ editCampus, editCampusRequest} from '../store'
import { withRouter } from 'react-router-dom'


export const campusEdit = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <h3>Edit this Campus:</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="campusName" className="col-sm-2 control-label">Name:</label>
                <input
                    className="form-control"
                    name="campusName"
                />

                <label htmlFor="description" className="col-sm-2 control-label">description:</label>
                <input
                    className="form-control"
                    name="description"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">submit</button>
            </div>
        </form>
        </div>
    )

}


const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handleSubmit: (e) => {
            const name = e.target.campusName.value || ownProps.campus.name
            const description = e.target.description.value || ownProps.campus.description
            const action = editCampusRequest(ownProps.campus.id, {name, description}, ownProps.history)
            dispatch(action)
        }
    }

}

const EditCampusContainer = withRouter(connect(null, mapDispatchToProps)(campusEdit))

export default EditCampusContainer