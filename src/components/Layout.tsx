import React, { ReactNode } from 'react';
import Nav from './Nav';
import '../styles/Layout.css'
// import { useAppContext } from '../AppContext';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    // children is a special prop that allows a component to display
    // whatever content is nested between the tags where it is used
    
    
    return (
        <div className="layout-container">
            <div className="header">
                <h1 className="title">TheRealSamChaney.com</h1>
            </div>
            <div className="content">
                <div className="gradient-text" style={{ fontSize: '25em' }}>{"{"}</div>
                <main>{children}</main>
                <Nav />
                <div className="gradient-text" style={{ fontSize: '25em' }}>{"}"}</div>
            </div>
            </div>
    );
};

export default Layout;