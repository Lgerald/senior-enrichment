import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EditStudents from './EditStudents'


export default function home (props) {

    return (
    <div>
        <h1>Kitten Academy</h1>
        <EditStudents />

    </div>

    )
}