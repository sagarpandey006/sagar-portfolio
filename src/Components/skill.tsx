import React from "react";
import SkillsInfo, { SkillCategory } from "../data/skillsInfo";

const Skills: React.FC = () => {
  return (
    <div className="p-3 m-auto md:min-h-[80vh]" id="skills">
      {/* Section Title */}
      <div className="text-4xl md:text-6xl mb-4 text-white">SKILLS</div>
      <div className="border-1 border-[#686868] opacity-20 mb-10"></div>
      <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium max-w-l leading-relaxed">
          A showcase of my technical expertise and tools I have mastered over the years. These skills reflect my ability to build scalable, efficient, and user-friendly applications.
        </p>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-4 lg:gap-5 py-10 justify-center lg:justify-between">
        {SkillsInfo.map((category: SkillCategory) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-3 sm:px-6 lg:px-10 py-6 sm:py-8 mb-6 sm:mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-400 ease-out hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 hover:-translate-y-2"
          >
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-white mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items - Responsive grid */}
            <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent border-2 border-gray-700 rounded-2xl sm:rounded-3xl py-1.5 sm:py-2 px-1.5 sm:px-2 text-center min-w-0"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;