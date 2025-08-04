import React from "react";
import hackathonsInfo from "../data/hackathonsInfo";

const Hackathons: React.FC = () => {
  return (
    <div className="p-3 m-auto md:min-h-[80vh]" id="hackathons">
      {/* Section Title */}
      <div className="text-2xl md:text-4xl mb-4 text-white">HACKATHONS</div>
      <div className="border-1 border-[#686868] opacity-20 mb-6"></div>
      <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium max-w-l leading-relaxed">
        A showcase of the hackathons I have participated in, highlighting my problem-solving skills, teamwork, and innovative thinking.
      </p>

      {/* Hackathon Cards */}
      <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto py-10">
        {hackathonsInfo.map((hackathon, index) => (
          <div
            key={index}
            className="group border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:border-purple-500/50 bg-gray-900/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-400 ease-out"
          >
            {/* Image Container */}
            <div className="relative p-4 pb-0">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {hackathon.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
              {hackathon.subtitle}
              </p>
              <div className="flex justify-between items-center text-gray-400 text-sm sm:text-base mb-4">
                <span className="font-medium">{hackathon.location}</span>
                <span className="font-medium text-purple-400">{hackathon.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;