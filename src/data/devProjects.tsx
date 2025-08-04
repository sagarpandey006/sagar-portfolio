import dt from "../assets/dev/daily-task.png"
import gmt from "../assets/dev/growmytherapy.png"
import ms from "../assets/dev/mindskoon.png"
import pt from "../assets/dev/portfolio.png"
interface DevProjects {
    title :string,
    subtitle : string,
    year : string,
    imgURL : string,
    desc : string,
    link : string,
    gitlink : string,
    techStack:string[],
}

const devProject:DevProjects[] = [
    {
        title: "Mind'Skoon",
        subtitle : "Web Development",
        year : "2025", 
        imgURL :  ms, 
        desc : "The official website I built for DASBVP, featuring event details, team details, upcoming event updates. The platform serves as a connecting point for the team, facilitating updates to all team members.", 
        link : "https://dasbvp.onrender.com/",
        gitlink : "https://github.com/ishikamanchanda30/DASBVP",
        techStack: ['React','TypeScript','TailwindCSS'],
    },
    {
        title: "Portfolio Site",
        subtitle : "Web Development",
        year : "2025",
        imgURL : pt,
        desc : "A comprehensive website to connect Startups and College Societies featuring Smart AI society-sponsor matching with real-time chat. Streamlining the process for societies to find sponsorships for their events.", 
        link : "https://github.com/ishikamanchanda30/Sponsorship-Bridge.git",
        gitlink : "https://github.com/ishikamanchanda30/Sponsorship-Bridge.git",
        techStack: ['React','TypeScript','TailwindCSS','NodeJS', 'ExpressJS', 'MongoDB', 'Redux', 'Socket', 'Python'],
    },
    {
        title: "Daily Task Management",
        subtitle : "Web Development",
        year : "2025",
        imgURL : dt,
        desc : "A responsive and user-friendly front-end prototype website for a telematics platform focused on long-haul trucking efficiency.", 
        link : "https://github.com/ishikamanchanda30/SIH-Website-A",
        gitlink : "https://github.com/ishikamanchanda30/SIH-Website-A",
        techStack: ['HTML','CSS','Javascript'],
    },
    {
        title: "Grow MY Therapy",
        subtitle : "Web Development",
        year : "2025",
        imgURL : gmt,
        desc : "A responsive and user-friendly front-end prototype website for a telematics platform focused on long-haul trucking efficiency.", 
        link : "https://github.com/ishikamanchanda30/SIH-Website-A",
        gitlink : "https://github.com/ishikamanchanda30/SIH-Website-A",
        techStack: ['HTML','CSS','Javascript'],
    },
]
export default devProject; 