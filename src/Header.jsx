import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { signOut } from 'firebase/auth';
import { useTheme } from './ThemeContext';
import InventoryCounter from "./InventoryCounter";
import './Header.css';

const Header = ({ onLogout }) => {
    const navigate = useNavigate();
    const { isDarkTheme, toggleTheme } = useTheme();
    const [showConfirmation, setShowConfirmation] = useState(false); 
    const [showCounter, setShowCounter] = useState(false);

    const handleCountClick = () => {
        navigate("/inventory"); 
    };

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            onLogout();
            navigate('/'); // Redirect to login page
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleHome = () => {
        navigate('/item-categories');
    }

    const handleSaveClick = (event) => {
        event.preventDefault();
        setShowConfirmation(true); 
    };

    const handleCancel = () => {
        setShowConfirmation(false); 
    };

    return (
        <header className="header-container">
            <button className="header-button" onClick={handleHome}>Home</button>
            <button className="header-button" onClick={handleCountClick}>Count </button>{showCounter && <InventoryCounter />}
            <button className="header-button" onClick={toggleTheme}>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</button>
            <button className="header-button" onClick={handleSaveClick}>Logout</button>
            
            {showConfirmation && (
                <div className="confirmation-overlay">
                    <div className="confirmation-modal">
                        <p>Are You sure to Logout?</p>
                        <button onClick={handleLogout}>Yes</button>
                        <button onClick={handleCancel}>No</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

