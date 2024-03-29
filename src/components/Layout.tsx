import React, { ReactNode } from 'react';
import Nav from './Nav';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    // children is a special prop that allows a component to display 
    // whatever content is nested between the tags where it is used
    return (
        <div>
            <main>{children}</main>
            <Nav />
        </div>
    );
};

export default Layout;