import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/aboutscreen/HeroSection';
import MyJourneySection from '../components/aboutscreen/MyJourneySection';

const AboutScreen = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <MyJourneySection />
            <Footer />
        </>
    );
};

export default AboutScreen;
