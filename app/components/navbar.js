import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default function NavBar (props) {
    return (
        <div className="NavBar">
            <Link to="/"><img src="http://nekoatsumecheats.com/wp-content/uploads/2016/01/nekoatsumecheats6.jpg"/></Link>
            <br />
            <Link className="btn btn-primary" to="/campus">Our Campuses</Link>
            <br />
            <Link className="btn btn-primary" to="/students">Our Students</Link>
        </div>
    )
}