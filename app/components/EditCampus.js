import React, { Component } from 'react'
import { connect } from 'react-redux'
import store ,{ editCampus, editCampusRequest} from '../store'


export const campusEdit = (props) => {
    const { campus, handleSubmit } = props
    console.log("props? ", props)
    return (
        <div>
            <h3>Edit Campus {campus.name}:</h3>
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


const mapStateToProps = (state) => {
    return {
        campus: state.campus
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handleSubmit: (e) => {
            e.preventDefault()
            const name = e.target.campusName.value || ownProps.campus.name
            const description = e.target.description.value || ownProps.campus.description
            const action = editCampusRequest(ownProps.campus.id, {name, description})
            dispatch(action)
        }
    }

}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(campusEdit)

export default EditCampusContainer