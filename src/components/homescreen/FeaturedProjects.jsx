import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import midnightDinerImage from '../../assets/img/midnight-diner.png';
import theInternationalArticlesImage from '../../assets/img/the-international-articles.png';

const FeaturedProjects = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const projectsRef = useRef(null);
    const buttonRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'Midnight Diner',
            description: 'This full-stack MERN application allows you to explore a delightful culinary experience.',
            image: midnightDinerImage,
            tags: ['React', 'Node.js', 'MongoDB'],
            liveDemo: 'https://github.com/MarshallNickolauson/midnight-diner',
            github: 'https://github.com/MarshallNickolauson/midnight-diner',
        },
        {
            id: 2,
            title: 'The International Articles',
            description: 'This full-stack application allows you to view articles in multiple languages simultaneously, as well as write your own articles and use AI to generate translations.',
            image: theInternationalArticlesImage,
            tags: ['React', 'Docker', 'Redis'],
            liveDemo: 'https://github.com/MarshallNickolauson/the-international-articles',
            github: 'https://github.com/MarshallNickolauson/the-international-articles',
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
        const handleReady = () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.target === titleRef.current && entry.isIntersecting) {
                        setIsVisible(true);
                    }
                    if (entry.target === buttonRef.current && entry.isIntersecting) {
                        setIsButtonVisible(true);
                    }
                },
                { threshold: 0.4 }
            );

            if (titleRef.current) observer.observe(titleRef.current);
            if (buttonRef.current) observer.observe(buttonRef.current);
        };

        window.addEventListener('scroll-reset-done', handleReady);

        return () => window.removeEventListener('scroll-reset-done', handleReady);
    }, []);

    return (
        <section className='pb-5 bg-white dark:bg-darkMainBlue'>
            <h2 ref={titleRef} className={`text-3xl text-mainBlack dark:text-white font-semibold text-center ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                Featured Projects
            </h2>

            <p ref={subtitleRef} className={`text-md text-mainGray text-center mt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                A selection of my best work that demonstrates my skills and expertise in creating impactful digital solutions.
            </p>

            <div ref={projectsRef} className='flex items-center justify-center mt-8 space-x-6'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`bg-white dark:bg-darkMainBlue shadow-md shadow-mainGray/30 rounded-md w-80 border-[1px] border-mainBlue/30 overflow-hidden flex flex-col justify-between space-y-4 ${
                            isVisible ? 'fade-in-bottom' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.2 + index * 0.3}s` }}
                    >
                        <img src={project.image} alt={project.title} className='rounded-t-md w-full h-48 object-cover shadow-sm shadow-mainBlack/20' />

                        <div className='px-3'>
                            <h3 className='text-xl font-semibold text-mainBlack dark:text-white mb-2'>{project.title}</h3>
                            <p className='text-xs text-mainGrayDark dark:text-white/60 line-clamp-2'>{project.description}</p>
                        </div>

                        <div className='flex flex-wrap gap-2 px-2'>
                            {project.tags.map((tag, i) => (
                                <span key={i} className='bg-mainBlueLight text-mainBlue font-semibold text-xs px-4 py-1 rounded-full border-[1px] border-mainBlue'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className='flex space-x-2 pt-2 px-2 pb-3'>
                            <a
                                href={project.liveDemo}
                                className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-4 py-2 rounded-md hover:bg-mainBlue dark:hover:border-mainBlue hover:text-white transition duration-200 text-sm'
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.github}
                                className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-4 py-2 rounded-md hover:bg-mainBlue dark:hover:border-mainBlue hover:text-white transition duration-200 text-sm'
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={buttonRef} className={`mt-10 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`}>
                <button
                    className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-6 py-3 rounded-md text-base font-medium hover:bg-mainBlue dark:hover:border-mainBlue hover:text-white transition flex items-center'
                    onClick={() => navigate('/projects')}
                >
                    See All Projects <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
