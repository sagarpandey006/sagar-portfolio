import Internship from './Internship'
import Hackathons from './Hackathons'

const Experience = () => {
  return (
    <>
      <div className='p-3 m-auto max-w-screen overflow-y-auto' id='experience'>
        <div className='text-4xl md:text-6xl mb-4'>EXPERIENCE</div>
        <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
        
        {/* Experience Description */}
        <div className='mb-12'>
          <p className='text-gray-400 text-lg leading-relaxed mb-6 font-md md:w-3/4'>
            My professional journey encompasses open source contributions, internships, and hackathon participations that have shaped my technical skills and problem-solving abilities. Each experience has contributed to my growth as a developer and innovator.
          </p>
          <p className='text-gray-300 text-base leading-relaxed font-md md:w-3/4'>
            From open source development and hands-on internships to competitive hackathons, these experiences showcase my ability to work in diverse environments, collaborate with teams, contribute to meaningful projects, and deliver impactful solutions.
          </p>
        </div>

        <Internship />
        <Hackathons />
      </div>
    </>

  )
}

export default Experience