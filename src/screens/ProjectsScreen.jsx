import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactMeSection from '../components/projectsscreen/ContactMeSection';
import HeroSection from '../components/projectsscreen/HeroSection';
import ProjectsSection from '../components/projectsscreen/ProjectsSection';

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
            <HeroSection />
            <ProjectsSection />
            <ContactMeSection />
        </>
    );
};

export default ProjectsScreen;
