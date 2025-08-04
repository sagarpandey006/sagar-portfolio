import About from "../Components/About"
import Projects from "../Components/Projects"
import Experience from "../Components/Experience"
import Hackathons from "../Components/hackathons"
import Contact from "../Components/Contact"
import Landing from "../Components/Landing"
import SplashCursor from "../Components/ui/Animations/SplashCursor/SplashCursor"
import Skills from "../Components/skill"
SplashCursor
const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
        <Landing/>
        <About/>
        <Skills/>
        <Experience/>
        <Hackathons/>
        <Projects/>
        <Contact/>
        <SplashCursor/>
    </div>
  )
}

export default Home