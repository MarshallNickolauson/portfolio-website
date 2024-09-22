import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import backgroundImage from './assets/img/hero-background.png'

function App() {

  return (
    <div
      className='bg-cover bg-center bg-no-repeat h-screen'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <h1 className="text-white">The quick brown fox jumps over the lazy dog. </h1>
      <h1 className="text-mainOrange font-roboto font-bold">The quick brown fox jumps over the lazy dog. </h1>
      <h1 className="text-mainOrange font-ropa">The quick brown fox jumps over the lazy dog. </h1> */}
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
