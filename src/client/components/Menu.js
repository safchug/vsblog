import React from "react";
import {NavLink} from "react-router-dom";

export default function Menu({isLogined, fullName}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">VS Blog</a>
            {(!isLogined)? (
            <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <NavLink to='/login' className="nav-link" >Log in</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/regist'className="nav-link">Sign in</NavLink>
                    </li>
                </ul>) : (
                <ul className="navbar-nav justify-content-end">
                    <h3>{fullName}</h3>
                    <li className="nav-item">
                        <NavLink to='/logout' className="nav-link" >Log out</NavLink>
                    </li>
                </ul>)
            }
        </nav>
    )
}

