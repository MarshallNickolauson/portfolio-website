import { useState } from 'react';
import projects from '../../projects';

const ProjectsSection = () => {
    const [activeButton, setActiveButton] = useState('All Projects');

    const projectTypes = ['All Projects', 'Fullstack', 'Frontend', 'Backend'];

    return (
        <section className='pb-8 bg-white dark:bg-darkMainBlue pt-5'>
            <div className='container max-w-[1200px] mx-auto px-4'>
                <div className='animate-fade-in' style={{ animationDelay: '0.3s' }}>
                    <div className='flex justify-center mb-8 space-x-2'>
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveButton(type)}
                                className={`px-4 py-2 rounded-md border-[1px] border-mainBlue transition-all duration-200
                                    ${activeButton === type ? 'bg-mainBlue text-white' : 'bg-white text-mainBlue'}
                                    `}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='animate-fade-in'>
                    <div key={activeButton} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {projects
                            .filter((project) => activeButton === 'All Projects' || project.type === activeButton)
                            .map((project, i) => (
                                <div
                                    key={project.id}
                                    className={`bg-white dark:bg-darkMainBlueLight rounded-md shadow-lg shadow-mainBlack/20 dark:shadow-mainBlue/20 border-[1px] border-mainBlue/50 fade-in-bottom`}
                                    style={{ animationDelay: `${0.05 + i * 0.1}s`, animationFillMode: 'both' }}
                                >
                                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-t-md' />
                                    <div className='p-4'>
                                        <h3 className='text-lg font-semibold text-mainBlack dark:text-white/90 pb-1'>{project.title}</h3>
                                        <p className='text-gray-600 dark:text-gray-300 line-clamp-2 text-sm'>{project.description}</p>
                                        <div className='mt-4'>
                                            {(() => {
                                                const maxVisibleTags = 3;
                                                const visibleTags = project.tags.slice(0, maxVisibleTags);
                                                const extraTagsCount = project.tags.length - maxVisibleTags;

                                                return (
                                                    <>
                                                        {visibleTags.map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className='inline-block bg-transparent text-mainBlack dark:text-white/90 border border-mainBlack dark:border-white/90 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full'
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {extraTagsCount > 0 && (
                                                            <span className='inline-block bg-transparent text-mainBlack dark:text-white/90 border border-mainBlack dark:border-white/90 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full'>
                                                                +{extraTagsCount}
                                                            </span>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                        <div className='mt-4 flex justify-between'>
                                            <h1 className='text-mainBlue text-sm underline cursor-pointer'>View Project Details</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
