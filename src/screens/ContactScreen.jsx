import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/contactscreen/HeroSection';

const ContactScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('contact-scroll-reset-done'));
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <Footer />
        </>
    );
};

export default ContactScreen;
