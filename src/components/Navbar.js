import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/wendigo" className="nav-link">Wendigo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/moth-man" className="nav-link">Mothman</Link>
                </li>
                <li className="nav-item">
                    <Link to="/loch-ness-monster" className="nav-link">Lochness Monster</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};