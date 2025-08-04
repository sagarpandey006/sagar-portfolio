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

const devProject: DevProjects[] = [
  {
    title: "Mind'Skoon",
    subtitle: "Web Development",
    year: "2025",
    imgURL: ms,
    desc: "A gamified mental wellness platform where users grow a virtual tree by completing mindfulness activities and journaling. Features include diary entries, wellness tracking, and a motivational garden-based UI.",
    link: "https://sagarminor-1.onrender.com/",
    gitlink: "https://github.com/sagarpandey006/sagarminor",
    techStack: ['React', 'TailwindCSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
  {
    title: "Portfolio Site",
    subtitle: "Web Development",
    year: "2025",
    imgURL: pt,
    desc: "My personal developer portfolio showcasing projects, skills, resume, and interactive sections with animations and theme toggling. Designed for recruiters and collaborators to explore my work.",
    link: "https://sagarpandey006.vercel.app/",
    gitlink: "https://github.com/sagarpandey006/sagar-portfolio",
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: "Daily Task Management",
    subtitle: "Web Development",
    year: "2025",
    imgURL: dt,
    desc: "A full-stack task management app with secure authentication, real-time CRUD operations, and responsive design. Includes CI/CD with Neon DB, server-side rendering, and full Lighthouse performance score.",
    link: "https://daily-task-orpin.vercel.app/",
    gitlink: "https://github.com/sagarpandey006/daily-task",
    techStack: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Neon DB', 'TailwindCSS',],
  },
  {
    title: "Grow MY Therapy",
    subtitle: "Web Development",
    year: "2025",
    imgURL: gmt,
    desc: "A clean and mobile-friendly website concept for a therapy platform. Highlights therapy services and guides users through growth, mindfulness, and self-help resources in an engaging layout.",
    link: "https://grow-my-therapy-ten.vercel.app/",
    gitlink: "https://github.com/sagarpandey006/Grow-my-therapy",
    techStack: ['Next.js', 'React', 'TailwindCSS', 'JavaScript'],
  }
];

export default devProject; 