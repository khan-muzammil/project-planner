import React from 'react'
import {NavLink} from 'react-router-dom'
export default function SignInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}
