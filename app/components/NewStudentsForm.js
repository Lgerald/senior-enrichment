import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { newStudent, postStudent } from '../store'

export const NewStudentEntry = (props) => {
    const { newStudent, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleSubmit } = props

    return (
    <div>
        <h4>Wanna quit life and become a cat? Join Kitten-Academy today!</h4>
        <h6>*spaces are limited</h6>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName" className="col-sm-2 control-label">First Name:</label>
                <input
                    className="form-control"
                    name="firstName"
                    placeholder="first name goes here" 
                    value={newStudent}
                    onChange={handleFirstNameChange}
                />
            
                <label htmlFor="lastName" className="col-sm-2 control-label">Last Name:</label>
                <input
                    className="form-control"
                    name="lastName"
                    placeholder="last name goes here"
                    value={newStudent}
                    onChange={handleLastNameChange}
                />

                <label htmlFor="email" className="col-sm-2 control-label">Email Address:</label>
                <input
                    className="form-control"
                    name="email"
                    placeholder="email goes here"
                    value={newStudent}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Join Our Kitten Cohort!</button>
            </div>
        </form>
    </div>
    )

}

const mapStateToProps = (state) => {
    return {
        newStudent: state.newStudent
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleFirstNameChange: (e) => {
            e.preventDefault()
            dispatch(newStudent(e.target.firstName))
        },
        handleLastNameChange: (e) => {
            e.preventDefault()
            dispatch(newStudent(e.target.lastName))
        },
        handleEmailChange: (e) => {
            e.preventDefault()
            dispatch(newStudent(e.target.email))
        },

        handleSubmit: (e) => {

            const firstName = e.target.firstName.value
            const lastName = e.target.lastName.value
            const email = e.target.email.value
            dispatch(postStudent({firstName, lastName, email}), ownProps.history)
            dispatch(newStudent(""))
            ownProps.history.push(`students/${ownProps.id}`)

        }
    }

}


const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry)

export default NewStudentEntryContainer