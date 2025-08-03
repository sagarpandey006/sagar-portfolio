// import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { FiExternalLink } from 'react-icons/fi'; // Import for terminal link icon
import profileImage from '../assets/nav-img/profile.png';

const Landing = () => {
  return (
    <section
      id="landing"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-x-20">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Namaste(); I'm
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sagar Pandey
          </h2>
          
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'React Developer',
                    'UI/UX Designer',
                    'Coder',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>

          {/* About Me Paragraph - Increased width */}
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              Software Engineer with experience of Web development, UI/UX and
              Designs. I Love challenges, collaboration and making products.
              <br />
              <br />
              Not gonna lie — the animations and flashy UI are my ticket into the rat race. 
              But at heart, I still crave clean structure, simple design, and meaningful interactions.
            </p>
            
            {/* New Terminal Line */}
            <div className="max-w-2xl">
              <p className="text-base sm:text-lg text-gray-400 mb-4 leading-relaxed">
                If you're also not a fan of all this fancy UI stuff and prefer things simple—go ahead, click that button below 👨‍💻👇
              </p>
              <div className="flex justify-center">
                <a
                  href="https://sagarpandey006.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white py-2 px-6 rounded-full text-base font-bold transition duration-300 transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec',
                  }}
                >
                  Terminal <FiExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Moved up with contact info below */}
        <div className="md:w-1/2 flex flex-col items-center space-y-8">
          {/* Profile Image */}
          <div className="w-full flex justify-center">
            <Tilt
              className="w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square border-4 border-[#8245ec] rounded-full overflow-hidden drop-shadow-[0_10px_10px_rgba(130,69,236,0.6)]"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              glareEnable={false}
              glareMaxOpacity={0}
            >
              <img
                src={profileImage}
                alt="Sagar Pandey"
                className="w-full h-full object-cover transition-none"
              />
            </Tilt>
          </div>

          {/* Location and Contact Info - Centered under image */}
          <div className="flex justify-center w-full">
            <div className="flex justify-between w-[80%] max-w-md">
              <div className="text-center">
                <h4 className="text-[#8245ec] font-semibold mb-1">Based in</h4>
                <p className="text-white">Bhopal (India)</p>
              </div>
              <div className="text-center">
                <h4 className="text-[#8245ec] font-semibold mb-1">Say Hello</h4>
                <a 
                  href="mailto:officialsagar006@gmail.com"
                  className="text-white hover:text-[#8245ec] transition-colors"
                >
                  officialsagar006@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center w-full">
            <a
              href="https://drive.google.com/file/d/1fpsSQ3-TFbHvym8Fia-MxJG7F0othIM0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;