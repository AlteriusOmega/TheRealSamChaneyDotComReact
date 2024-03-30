import React, { ReactNode } from 'react';
import Nav from './Nav';
import '../styles/Layout.css'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    // children is a special prop that allows a component to dsisplay 
    // whatever content is nested between the tags where it is used
    return (
        <div className="main-container">
            <div className="header">
                <h1 className="title">TheRealSamChaney.com</h1>
            </div>
            <div className="content">
                <main>{children}</main>
                <Nav />
            </div>
            </div>
    );
};

export default Layout;