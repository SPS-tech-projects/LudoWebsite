import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Features />
            <Reviews />
            <Footer />
        </>
    );
}

export default HomePage;
