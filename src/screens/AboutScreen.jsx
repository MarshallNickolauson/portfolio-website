import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/aboutscreen/HeroSection';
import MyJourneySection from '../components/aboutscreen/MyJourneySection';
import SoftSkillsSection from '../components/aboutscreen/SoftSkillsSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AboutScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('about-scroll-reset-done'));
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <MyJourneySection />
            <SoftSkillsSection />
            <Footer />
        </>
    );
};

export default AboutScreen;
