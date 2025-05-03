import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/projectsscreen/HeroSection';
import ProjectsSection from '../components/projectsscreen/ProjectsSection';
import ContactMeSection from '../components/projectsscreen/ContactMeSection';

const ProjectsScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('projects-scroll-reset-done'));
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
        </>
    );
};

export default ProjectsScreen;
