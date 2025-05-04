const ProjectCard = ({ project, children }) => {
    const maxVisibleTags = 3;
    const visibleTags = project.tags.slice(0, maxVisibleTags);
    const extraTagsCount = project.tags.length - maxVisibleTags;

    return (
        <div
            className={`bg-white dark:bg-darkMainBlueLight rounded-md shadow-lg shadow-mainBlack/20 dark:shadow-mainBlue/20 border-[1px] border-mainBlue/50 fade-in-bottom`}
            style={{ animationDelay: `${project.delay || 0}s`, animationFillMode: 'both' }}
        >
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-t-md' />
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-mainBlack dark:text-white/90 pb-1'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 line-clamp-2 text-sm'>{project.description}</p>
                <div className='mt-4'>
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
                </div>

                <div className='mt-4 flex justify-between items-center'>
                    {children ? (
                        children
                    ) : (
                        <span className='text-mainBlue text-sm underline cursor-pointer'>View Project Details</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;