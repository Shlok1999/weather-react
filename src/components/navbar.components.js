import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to= "/" className="navbar-brand">User and Admin</Link>
                <div className=" navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/userlogin" className="nav-link">User Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/userregd" className="nav-link">User Registration </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/adminlogin" className="nav-link">Admin Login </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/adminregd" className="nav-link">Admin Registration </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}