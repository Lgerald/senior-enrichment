import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { newStudent, postStudent, getCampuses } from '../store'

export const NewStudentEntry = (props) => {
    const { newStudent, handleSubmit, handleChange, campus } = props
    console.log("campus", campus)

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
                    //value={newStudent}
                
                />
            
                <label htmlFor="lastName" className="col-sm-2 control-label">Last Name:</label>
                <input
                    className="form-control"
                    name="lastName"
                    placeholder="last name goes here"
                    //value={newStudent}
                   
                />

                <label htmlFor="email" className="col-sm-2 control-label">Email Address:</label>
                <input
                    className="form-control"
                    name="email"
                    placeholder="email goes here"
                    //value={newStudent}
           
                />
                <label htmlFor="gpa" className="col-sm-2 control-label">GPA:</label>
                <input
                    className="form-control"
                    name="gpa"
                    placeholder="gpa goes here"
                    //value={newStudent}
            
                />
                <label htmlFor="campus" >Campus:</label>
                <select className="form-control" onChange={handleChange} >
                    {campus.map(c => (<option key={c.id} name="campus" value={c.id}>{c.name}</option>))}
                </select> 
                <button type="submit" className="btn btn-primary">Join Our Kitten Cohort!</button>
                </div>

        </form>
    </div>
    )

}

const mapStateToProps = (state) => {
    return {
        newStudent: state.newStudent,
        campus: state.campus,
        students: state.students
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

        handleSelect: () => {
            e.preventDefault()
            let name = [e.target.name]
            name = e.target.value
            return name;
        },


        handleSubmit: (e) => {
            e.preventDefault()
            const firstName = e.target.firstName.value
            const lastName = e.target.lastName.value
            const email = e.target.email.value
            const gpa = e.target.gpa.value
            const campusId = Number(newStudent)
            dispatch(postStudent({firstName, lastName, email, gpa, campusId}))


        }
    }

}


const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry)

export default NewStudentEntryContainer