import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Ludo King</div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/faqs">FAQs</NavLink></li>
                    <li><NavLink to="/advertise">Advertise with Us</NavLink></li>
                    <li><NavLink to="/media">Media</NavLink></li>
                    <li><NavLink to="/reviews">Reviews</NavLink></li>
                    <li><NavLink to="/download">Download</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;