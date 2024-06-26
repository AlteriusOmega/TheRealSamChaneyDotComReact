import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

const Nav: React.FC = () => {
    return (
        <nav className="nav-container">
            <div className="gradient-text" style={{fontSize:"10em"}}>{"𝄕"}</div>    
            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/coding">Coding</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="gradient-text" style={{fontSize:"10em", transform: "scaleX(-1)"}}>{"𝄕"}</div>    

        </nav>
    );
};

export default Nav;