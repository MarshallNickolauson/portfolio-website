import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMeSection from '../components/homescreen/AboutMeSection';
import ContactMeSection from '../components/homescreen/ContactMeSection';
import FeaturedProjects from '../components/homescreen/FeaturedProjects';
import HeroSection from '../components/homescreen/HeroSection';
import MovingSkillsSection from '../components/homescreen/MovingSkillsSection';
import SkillsSection from '../components/homescreen/SkillsSection';
import StatsSection from '../components/homescreen/StatsSection';
import TestimonialsSection from '../components/homescreen/TestimonialsSection';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('scroll-reset-done'));
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div>
            <HeroSection />
            <StatsSection />
            <MovingSkillsSection />
            <FeaturedProjects />
            <SkillsSection />
            <TestimonialsSection />
            <AboutMeSection />
            <ContactMeSection />
        </div>
    );
}

export default App;
