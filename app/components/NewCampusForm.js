import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { newCampus, postCampus, newStudent } from '../store'

export const NewCampusEntry = (props) => {
    const { newCampus, handleSubmit, handleChange } = props

    return (
        <div>
            <h4>not interested in one of our many campuses? thats cool i guess... start your own!</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">Campus Name:</label>
                    <input
                        className="form-control"
                        name="campusName"
                        placeholder="What should we call me?"
                        //value={newCampus}
                        onChange={handleChange}
                    />

                    <label htmlFor="description" className="col-sm-2 control-label">Campus Description:</label>
                    <input
                        className="form-control"
                        name="description"
                        placeholder="tell me about this campus!"
                        //value={newCampus}
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
        newCampus: state.newCampus
    }
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
            const name = e.target.campusName.value
            const description = e.target.description.value
            dispatch(postCampus({name, description}), ownProps.history)
            dispatch(newCampus(""))
            ownProps.history.push(`campus/${ownProps.id}`)

        }
    }
}



const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry)

export default NewCampusEntryContainer