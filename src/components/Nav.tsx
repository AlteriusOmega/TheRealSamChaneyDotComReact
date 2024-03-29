import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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