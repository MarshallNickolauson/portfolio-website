import FeaturedProjects from '../components/homescreen/FeaturedProjects'
import HeroSection from '../components/homescreen/HeroSection'
import MovingSkillsSection from '../components/homescreen/MovingSkillsSection'
import StatsSection from '../components/homescreen/StatsSection'
import Navbar from "../components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MovingSkillsSection />
      <FeaturedProjects />
    </div>
  )
}

export default App
