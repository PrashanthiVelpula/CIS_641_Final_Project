// src/Layout.js

import React from 'react';
import Header from './Header'; // Adjust this path if necessary
import { useTheme } from './ThemeContext';
import "./theme.css"

const Layout = ({ children , isLoggedIn ,onLogout }) => {
    const { isDarkTheme } = useTheme();

    const themeStyles = {
        backgroundColor: isDarkTheme ? '#333' : '#f8f8f8',
        color: isDarkTheme ? '#f8f8f8' : '#333',
        minHeight: '100vh', // Ensures it spans the full viewport height
        width: '100vw', // Ensures it spans the full viewport width
        margin: 0, // Removes any default margin
        padding: 0, // Removes any default padding
        overflowX: 'hidden', // Prevents horizontal scrollbars
    
    };
    return (
        <div style={themeStyles}>
            {/* <div className={isDarkTheme ? 'layout-dark' : 'layout-light'}> */}
            {isLoggedIn && <Header onLogout={onLogout}/>}
            <main>{children}</main> {/* This is where page content will be rendered */}
        </div>
    );
};

export default Layout;
