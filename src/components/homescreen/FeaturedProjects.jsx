import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedProjects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const projectsRef = useRef(null);
    const buttonRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'A brief project description of this project and the technologies used to build it.',
            image: 'https://picsum.photos/seed/picsum/600/400',
            tags: ['React', 'JavaScript', 'CSS'],
            liveDemo: '#',
            github: '#',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'A brief project description of this project and the technologies used to build it.',
            image: 'https://picsum.photos/seed/picsum/600/400',
            tags: ['React', 'JavaScript', 'CSS'],
            liveDemo: '#',
            github: '#',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'A brief project description of this project and the technologies used to build it.',
            image: 'https://picsum.photos/seed/picsum/600/400',
            tags: ['React', 'JavaScript', 'CSS'],
            liveDemo: '#',
            github: '#',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (subtitleRef.current) observer.observe(subtitleRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsButtonVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (buttonRef.current) observer.observe(buttonRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className='pb-10'>
            <h2 ref={titleRef} className={`text-2xl text-mainBlack font-bold text-center mt-8 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                Featured Projects
            </h2>

            <p ref={subtitleRef} className={`text-sm text-mainGray text-center mt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                A selection of my best work that demonstrates my skills and expertise in creating impactful digital solutions.
            </p>

            <div ref={projectsRef} className='flex items-center justify-center mt-8 space-x-6'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`bg-white shadow-md shadow-mainGray/30 rounded-md w-80 border-[1px] border-mainBlueLight overflow-hidden flex flex-col justify-between space-y-4 ${
                            isVisible ? 'fade-in-bottom' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.2 + index * 0.3}s` }}
                    >
                        <img src={project.image} alt={project.title} className='rounded-t-lg w-full h-48 object-cover' />

                        <div className='px-3'>
                            <h3 className='text-xl font-bold text-black mb-2'>{project.title}</h3>
                            <p className='text-xs text-mainGrayDark'>{project.description}</p>
                        </div>

                        <div className='flex flex-wrap gap-2 px-2'>
                            {project.tags.map((tag, i) => (
                                <span key={i} className='bg-mainBlueLight text-mainBlue font-semibold text-xs px-4 py-1 rounded-full border-[1px] border-mainBlue'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className='flex space-x-4 pt-2 px-2 pb-3'>
                            <a href={project.liveDemo} className='text-mainBlue border border-mainBlue px-4 py-2 rounded-md hover:bg-mainBlue hover:text-white transition duration-200 text-sm'>
                                Live Demo
                            </a>
                            <a href={project.github} className='text-mainBlue border border-mainBlue px-4 py-2 rounded-md hover:bg-mainBlue hover:text-white transition duration-200 text-sm'>
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={buttonRef} className={`flex items-center justify-center mt-8 ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                <button className='bg-transparent text-mainBlue border-[1px] border-mainBlue px-4 py-2 rounded-md hover:bg-mainBlue hover:text-white transition-all duration-200 flex items-center'>
                    See All Projects <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
