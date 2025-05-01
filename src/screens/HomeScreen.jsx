import FeaturedProjects from '../components/homescreen/FeaturedProjects'
import HeroSection from '../components/homescreen/HeroSection'
import MovingSkillsSection from '../components/homescreen/MovingSkillsSection'
import SkillsSection from '../components/homescreen/SkillsSection'
import StatsSection from '../components/homescreen/StatsSection'
import TestimonialsSection from '../components/homescreen/TestimonialsSection'
import Navbar from "../components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MovingSkillsSection />
      <FeaturedProjects />
      <SkillsSection />
      <TestimonialsSection />
    </div>
  )
}

export default App
