import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewStudentsForm from './NewStudentsForm'
import NewCampusForm from './NewCampusForm'


export default function home (props) {

    return (
    <div className="home">
        <h1>Kitten Academy</h1>
        <NewStudentsForm />
        <NewCampusForm />
    </div>

    )
}