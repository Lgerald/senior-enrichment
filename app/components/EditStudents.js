import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { newStudent, postStudent }from '../store'

export function NewStudentEntry (props) {
    const { NewStudentEntry, handleChange, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="studentName"
                    placeholder="Join Kitten Academy!" 
                    value={NewStudentEntry}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Join!</button>
            </div>
        </form>

    )

}

const mapStateToProps = (state) => {
    return {
        NewStudentEntry: state.NewStudentEntry
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: (e) => {
            
            e.preventDefault()
            console.log(e.target)
            dispatch(newStudent(e.target.value))
        },
        handleSubmit: (e) => {
            e.preventDefault()
            const name = e.target.studentName.value
            dispatch(postStudent({name}, ownProps.history))
            dispatch(newStudent(""))

        }
    }

}


const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry)

export default NewStudentEntryContainer