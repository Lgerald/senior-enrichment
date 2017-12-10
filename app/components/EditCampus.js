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
                <button type="submit" className="btn btn-primary" >submit</button>
            </div>
        </form>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        campus: state.campus,
        students: state.students
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handleChange: (e) => {
            e.preventDefault()
            dispatch(newCampus([e.target.name]))
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

const EditCampusContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(campusEdit))

export default EditCampusContainer