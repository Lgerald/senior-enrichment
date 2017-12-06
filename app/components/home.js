import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default function home (props) {

    return (
    <div>
        <h1>Kitten Academy</h1>
        <Link className="btn btn-primary btn-block" to="/campus">Our Campuses</Link>
        <br/>
        <Link className="btn btn-primary btn-block" to="/students">Our Students</Link>
    </div>
    )
}