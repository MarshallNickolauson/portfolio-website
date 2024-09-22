import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import backgroundImage from './assets/img/hero-background.png'
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"

function App() {

  return (
    <div
      className='bg-cover bg-center bg-no-repeat h-screen'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  )
}

export default App
