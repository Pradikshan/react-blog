import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.js";
import { isHtmlElement } from "react-router-dom/dist/dom";

const Navbar = () => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        fetch(data)
        .then((response) => response.json())
        .then((result) => setInformation(result))
        .catch("Cannot retrieve data");
    })



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#"role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cryptids
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    {information.map((item) => (
                        <Link to={item}></Link>
                    ))}
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;