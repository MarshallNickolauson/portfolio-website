import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import projects from '../../projects';
import ProjectCard from '../ProjectCard';


const FeaturedProjects = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const projectsRef = useRef(null);
    const buttonRef = useRef(null);

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
                A selection of my best work that demonstrates my skills and expertise in making impactful digital solutions.
            </p>

            <div ref={projectsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:px-8 lg:px-12 max-w-[1200px] mx-auto'>
                {projects.filter((project) => project.featured === true).map((project, index) => (
                    <ProjectCard key={project.id} project={{ ...project, delay: 0.2 + index * 0.3 }}>
                        <div className='flex space-x-2 pt-2'>
                            <a
                                href={project.liveDemo}
                                target='_blank'
                                className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-4 py-2 rounded-md hover:bg-mainBlue dark:hover:bg-mainBlueDark hover:text-white transition text-sm'
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.github}
                                target='_blank'
                                className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-4 py-2 rounded-md hover:bg-mainBlue dark:hover:bg-mainBlueDark hover:text-white transition text-sm'
                            >
                                GitHub
                            </a>
                        </div>
                    </ProjectCard>
                ))}
            </div>

            <div ref={buttonRef} className={`mt-10 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`}>
                <button
                    className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-6 py-3 rounded-md text-base font-medium hover:bg-mainBlue hover:text-white transition flex items-center'
                    onClick={() => navigate('/projects')}
                >
                    See All Projects <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
