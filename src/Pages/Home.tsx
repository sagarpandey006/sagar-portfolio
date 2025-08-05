import About from "../Components/About"
import Projects from "../Components/Projects"
import Experience from "../Components/Experience"
import Contact from "../Components/Contact"
import Landing from "../Components/Landing"
import Skills from "../Components/skill"
import SplashCursor from "../Components/ui/Animations/SplashCursor/SplashCursor"

const Home: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto">
        <Landing/>
        <About/>
        <Skills/>
        <Experience/> 
        <Projects/>
        <Contact/>
        <SplashCursor/>
    </div>
  )
}

export default Home