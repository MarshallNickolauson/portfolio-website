import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/skillsscreen/HeroSection';
import TechStackSection from '../components/skillsscreen/TechStackSection';

const SkillsScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('skills-scroll-reset-done'));
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <TechStackSection />
            <Footer />
        </>
    );
};

export default SkillsScreen;
