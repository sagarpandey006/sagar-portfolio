import Development from './Development'
// import GraphicDesign from "./GraphicDesign"
const Projects = () => {
  return (
    <>
        <div className='p-3 m-auto max-w-screen overflow-y-auto' id='projects'>
          <div className='text-4xl md:text-6xl mb-4'>PROJECTS</div>
          <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
          
          {/* Project Description */}
          <div className='mb-12'>
            <p className='text-gray-400 text-lg leading-relaxed mb-6 font-md md:w-3/4'>
              Following projects showcase my skills and experience through real-world examples of my work. Each project demonstrates my ability to solve complex problems, work with different technologies, and manage projects effectively.
            </p>
            <p className='text-gray-300 text-base leading-relaxed font-md md:w-3/4'>
              From responsive web applications to full-stack solutions, these projects highlight my expertise in various technologies and frameworks. Each project includes detailed descriptions with links to code repositories and live demos.
            </p>
          </div>

          <Development />
          {/* <GraphicDesign /> */}
        </div>
    </>
  )
}

export default Projects