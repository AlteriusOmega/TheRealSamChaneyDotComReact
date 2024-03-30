import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

const Nav: React.FC = () => {
    return (
        <nav className="nav-main">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;