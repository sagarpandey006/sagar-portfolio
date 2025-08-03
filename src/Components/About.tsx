import { useState } from "react"
import arrow from "../assets/nav-img/arrow.svg"

const About: React.FC = () => {
    const [underline, setUnderline] = useState<string | null>(null);

    return (
        <div className='p-3 m-auto md:min-h-[80vh]' id='about text-white'>
            <div className='text-4xl md:text-6xl mb-4'>ABOUT</div>
            <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
            <div className='gap-12'>
                {/* items-stretch makes both left and right div equal height */}
                <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-stretch'>
                    
                    {/* Left Section */}
                    <div className='text-[#bdbdbd] font-md md:w-1/2'>
                        Hi, I'm Sagar — a front-end developer passionate about building responsive, user-friendly web interfaces. 
                        <br /><br />
                        I’m currently in my third year of B.Tech (Internet of Things) at Samrat Ashok Technological Institute (CGPA: 8.03), where I’ve spent the last three years diving deep into core tech, building projects, and participating in tech fests and hackathons across India.
                        <br /><br />
                        From open-source development at SWOC to internships and full-stack project deployments, I’ve worked across a range of tools and technologies.
                        <br /><br />
                        I'm also focused on Data Structures & Algorithms — consistently practicing problem solving on platforms like LeetCode and improving my logic-building skills.
                        <br /><br />
                        Whether it's developing user-focused UIs or architecting backend flows, I love transforming ideas into real-world digital solutions.
                    </div>

                    {/* Right Section with top and bottom aligned content */}
                    <div className='flex flex-col justify-between md:w-1/2'>
                        <div className='text-2xl md:text-4xl md:leading-13 italic'>
                            Creating unforgettable and beautiful digital experiences, bringing ideas to life with code.
                        </div>

                        <div className="flex flex-col md:flex-row md:opacity-100 opacity-70 justify-between pt-6 md:pt-0 gap-4 md:gap-0 md:items-end md:pr-20">
                            <div>
                                <div>Open Source</div>
                                <div>UI/UX Designing</div>
                                <div>Web Development</div>
                            </div>
                            <div className='flex flex-col'>
                                <div>Say Hello</div>
                                <div className='flex flex-col'>
                                    <a href="mailto:officialsagar006@gmail.com" target="_blank" onMouseEnter={() => setUnderline('email')} onMouseLeave={() => setUnderline(null)}>officialsagar006@gmail.com</a>
                                    <span className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out" style={{ width: underline == 'email' ? '100%' : '0%' }}></span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <a href='https://www.linkedin.com/in/sagarpandey006/' target="_blank" onMouseEnter={() => setUnderline('linkedin')} onMouseLeave={() => setUnderline(null)}>
                                        Explore LinkedIn
                                    </a>
                                    <img src={arrow} alt="" className="h-6" />
                                </div>
                                <span className="h-[1px] rounded-full transition-all duration-300 bg-white ease-in-out" style={{ width: underline == 'linkedin' ? '100%' : '0%' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
