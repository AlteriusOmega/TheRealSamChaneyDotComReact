import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

const Nav: React.FC = () => {
    return (
        <nav className="nav-main">
            <div className="gradient-text" style={{fontSize:"10em"}}>{"𝄕"}</div>    
            <ul>
                <li>
            <div className="test">asd;lfkaj;lkj</div>

                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
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