import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { editStudent, editStudentRequest, newStudent } from '../store'
import { withRouter } from 'react-router-dom'

export const studentEdit = (props) => {
    const { campus, handleSubmit, newStudent, handleChange } = props
    console.log("props?>", props)
    return (
        <div>
            <h3>Edit this Student:</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName" className="col-sm-2 control-label">firtst name:</label>
                    <input
                        className="form-control"
                        name="firstName"
                        onChange={handleChange}
                    />

                    <label htmlFor="lastName" className="col-sm-2 control-label">last name:</label>
                    <input
                        className="form-control"
                        name="lastName"
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="col-sm-2 control-label">email address:</label>
                    <input
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="gpa" className="col-sm-2 control-label">gpa:</label>
                    <input
                        className="form-control"
                        name="gpa"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">submit</button>
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
        handleChange: (e) => {
            e.preventDefault()
            let name = [e.target.name]
            name = e.target.value
            dispatch(newStudent(name))
        },
        handleSubmit: (e) => {
            e.preventDefault()
            const firstName = e.target.firstName.value || ownProps.student.firstName
            const lastName = e.target.lastName.value || ownProps.student.lastName
            const email = e.target.email.value || ownProps.student.email
            const gpa = e.target.gpa.value || ownProps.student.gpa
            //const campusId = e.target.campusId.value || ownProps.student.campus.name

            const action = editStudentRequest(ownProps.student.id, {firstName, lastName, email, gpa})
            dispatch(action)
        }
    }
}


const EditStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(studentEdit))

export default EditStudentContainer