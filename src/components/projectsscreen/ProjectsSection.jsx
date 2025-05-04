import { useState } from 'react';
import projects from '../../projects';
import ProjectCard from '../ProjectCard';
import ProjectModal from '../ProjectModal';

const ProjectsSection = () => {
    const [activeButton, setActiveButton] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);
    const projectTypes = ['All Projects', 'Fullstack', 'Frontend', 'Backend'];

    return (
        <section className='pb-8 bg-white dark:bg-darkMainBlue pt-5'>
            <div className='container max-w-[1200px] mx-auto px-4'>
                {/* Filter Buttons */}
                <div className='animate-fade-in' style={{ animationDelay: '0.3s' }}>
                    <div className='flex justify-center mb-8 space-x-2'>
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveButton(type)}
                                className={`px-4 py-2 rounded-md border-[1px] border-mainBlue transition-all duration-200
                                    ${activeButton === type ? 'bg-mainBlue text-white' : 'bg-transparent text-mainBlue'}
                                `}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className='animate-fade-in'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {projects
                            .filter((project) => activeButton === 'All Projects' || project.type === activeButton)
                            .map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={{ ...project, delay: 0.05 + i * 0.1 }}
                                >
                                    <span
                                        className='text-mainBlue text-sm underline cursor-pointer'
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Project Details
                                    </span>
                                </ProjectCard>
                            ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default ProjectsSection;
