import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default function NavBar (props) {
    return (
        <div>
            <Link to="/">Kitten Academy</Link>
            <br />
            <Link className="btn btn-primary btn-block" to="/campus">Our Campuses</Link>
            <br />
            <Link className="btn btn-primary btn-block" to="/students">Our Students</Link>
        </div>
    )
}