import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { newCampus, postCampus, newStudent } from '../store'

export const NewCampusEntry = (props) => {
    const { newCampus, handleSubmit, handleChange } = props

    return (
        <div>
            <h4>Not interested in one of our many campuses? thats cool too! start your own!</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">Campus Name:</label>
                    <input
                        className="form-control"
                        name="campusName"
                        placeholder="What should we call me?"
                        onChange={handleChange}
                    />

                    <label htmlFor="description" className="col-sm-2 control-label">Campus Description:</label>
                    <input
                        className="form-control"
                        name="description"
                        placeholder="tell me about this campus!"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Start Your Own Kitten-Campus!</button>
                </div>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        newCampus: state.newCampus,
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
            const name = e.target.campusName.value
            const description = e.target.description.value
            dispatch(postCampus({name, description}))
            dispatch(newCampus(""))

        }
    }
}



const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry)

export default NewCampusEntryContainer