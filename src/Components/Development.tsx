import { useState } from "react"
import devProject from "../data/devProjects"
import github from "../assets/nav-img/github.jpg"

const Development = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleOpenModal = (project: any) => {
        setSelectedProject(project);
        setIsClosing(false);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProject(null);
            setIsClosing(false);
            document.body.style.overflow = 'unset'; // Restore scrolling
        }, 300); // Match animation duration
    };

    return (
        <>
            <div className="overflow-y-auto">
                {/* Projects Grid with Smart Alignment */}
                <div className="py-4 max-w-7xl mx-auto">
                    <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {devProject.map((project, index) => {
                            const totalProjects = devProject.length;
                            const remainder = totalProjects % 3;
                            const isLastRow = index >= totalProjects - remainder;
                            const shouldCenter = remainder > 0 && isLastRow;
                            
                            // Centering logic:
                            // - If 1 card left: center it (col-start-2)
                            // - If 2 cards left: center them (first card starts at col-2)
                            let centeringClass = '';
                            if (shouldCenter && remainder === 1) {
                                centeringClass = 'lg:col-start-2';
                            } else if (shouldCenter && remainder === 2 && index === totalProjects - 2) {
                                centeringClass = 'lg:col-start-2';
                            }
                            
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleOpenModal(project)}
                                    className={`group border border-gray-700 hover:border-purple-500/50 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ease-out mb-4 ${centeringClass}`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="relative p-4 pb-0">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={project.imgURL}
                                        alt={project.title}
                                        className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0">
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">
                                    {project.subtitle} • {project.year}
                                </p>
                                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
                                    {project.desc}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.slice(0, 3).map((tech: string, techIndex: number) => (
                                        <span
                                            key={techIndex}
                                            className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs text-gray-500 font-medium px-2 py-1">
                                            +{project.techStack.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Enhanced Modal */}
                {selectedProject && (
                    <div 
                        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
                        onClick={handleCloseModal}
                    >
                        <div 
                            className={`bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] relative overflow-y-auto ${isClosing ? 'animate-slideDown' : 'animate-slideUp'}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-white text-2xl font-bold w-10 h-10 rounded-full hover:bg-gray-800 flex items-center justify-center transition-all duration-300"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
                                {/* Project Image */}
                                <div className="mb-4 lg:mb-6">
                                    <img
                                        src={selectedProject.imgURL}
                                        alt={selectedProject.title}
                                        className="w-full h-32 sm:h-48 lg:h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>

                                {/* Project Details */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-purple-400 text-sm sm:text-base mb-2 font-medium">
                                            {selectedProject.subtitle} • {selectedProject.year}
                                        </p>
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                            {selectedProject.desc}
                                        </p>
                                    </div>

                                    {/* All Tags */}
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <a
                                            href={selectedProject.gitlink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-300"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <img src={github} className="w-4 h-4 rounded-full" alt="GitHub" />
                                                View Code
                                            </span>
                                        </a>
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                </svg>
                                                View Live
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Development