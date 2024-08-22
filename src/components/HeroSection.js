import React from 'react';
import './css/HeroSection.css';
import heroImage from '../assets/images/LUDOKING.png'; // Adjust the path to your image

const HeroSection = () => {
    return (
        <section className="hero">
            <img src={heroImage} alt="Ludo King" className="hero-img" />
            <button className="play-now-btn">Play Now</button>
        </section>
    );
}

export default HeroSection;
