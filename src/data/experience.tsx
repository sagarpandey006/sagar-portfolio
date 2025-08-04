import sati from "../assets/exp/SATI_Vidisha.jpg";
import swoc from "../assets/exp/SWOC.jpeg";
import ybi from "../assets/exp/ybi_foundation.jpg";

interface Experiences {
    position: string;
    company: string;
    location: string;
    startYear: string;
    endYear: string;
    image: string;
    desc: string;
}

const experience: Experiences[] = [
    {
        position: "Open Source Developer",
        company: "SWOC (Social Winter of Code 5.0)",
        location: "Remote",
        startYear: "January 2025",
        endYear: "March 2025",
        image: swoc,
        desc: `• Built and optimized web applications to enhance performance and user engagement.
• Worked closely with diverse teams to introduce new features and resolve issues, improving overall application efficiency.`
    },
    {
        position: "AI-ML Intern",
        company: "YBI Foundation",
        location: "Remote",
        startYear: "July 2023",
        endYear: "Aug 2023",
        image: ybi,
        desc: `• Collaborated on real-world artificial intelligence and machine learning projects, applying theoretical knowledge to develop data-driven solutions.
• Developed and optimized algorithms using Python, TensorFlow, and scikit-learn to solve complex problems.`
    },
    {
        position: "IT Intern",
        company: "SATI, Vidisha",
        location: "Onsite, Vidisha",
        startYear: "June 2023",
        endYear: "July 2023",
        image: sati,
        desc: `• Gained hands-on experience in various IT domains, including software development, network administration, and database management.
• Worked on collaborative projects under mentorship, enhancing problem-solving skills and adaptability in a professional environment.`
    },
];

export default experience;