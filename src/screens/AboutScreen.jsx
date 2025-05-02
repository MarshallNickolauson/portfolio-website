import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/aboutscreen/HeroSection';
import MyJourneySection from '../components/aboutscreen/MyJourneySection';
import SoftSkillsSection from '../components/aboutscreen/SoftSkillsSection';

const AboutScreen = () => {
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
