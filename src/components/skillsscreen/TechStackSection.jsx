import { useEffect, useRef, useState } from 'react';

const TechStackSection = () => {
    const cardData = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 95, description: 'Component-driven UI, hooks, and context API' },
                { name: 'Redux', level: 90, description: 'Global state management and middleware with Redux Toolkit' },
                { name: 'Tailwind CSS', level: 96, description: 'Responsive design, custom configurations, and animations' },
                { name: 'JavaScript', level: 97, description: 'DOM manipulation, ES6+, async/await, and modular code' },
                { name: 'TypeScript', level: 92, description: 'Static typing, interfaces, and advanced types' },
                { name: 'HTML', level: 98, description: 'Semantic markup and accessibility best practices' },
                { name: 'CSS', level: 95, description: 'Layouts, animations, and media queries' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 94, description: 'Event-driven architecture and server-side JS' },
                { name: 'Express', level: 93, description: 'REST API design and middleware chaining' },
                { name: 'Django', level: 85, description: 'MTV pattern, admin panel, and ORM usage' },
                { name: 'JWT Auth', level: 90, description: 'Stateless authentication and access control' },
                { name: 'REST', level: 95, description: 'Standardized APIs and HTTP methods' },
                { name: 'Flask', level: 85, description: 'Lightweight API setup and routing' },
                { name: 'Spring Boot', level: 82, description: 'Dependency injection and RESTful APIs in Java' },
            ],
        },
        {
            title: 'Database',
            skills: [
                { name: 'PostgreSQL', level: 90, description: 'Relational schemas and advanced queries' },
                { name: 'MongoDB', level: 92, description: 'Schema-less design and aggregation pipelines' },
                { name: 'MySQL', level: 88, description: 'Structured data and joins' },
                { name: 'Redis', level: 86, description: 'In-memory caching and key-value storage' },
                { name: 'Mongoose', level: 90, description: 'MongoDB schema modeling and validation' },
                { name: 'MongoDB Atlas', level: 88, description: 'Cloud-based MongoDB hosting and monitoring' },
            ],
        },
        {
            title: 'DevOps',
            skills: [
                { name: 'Docker', level: 92, description: 'Containerization and image management' },
                { name: 'Docker Compose', level: 90, description: 'Multi-container environments' },
                { name: 'Git', level: 96, description: 'Version control, branching, and collaboration' },
                { name: 'Bash', level: 85, description: 'Shell scripting and automation' },
                { name: 'Linux', level: 90, description: 'Command line usage and server administration' },
                { name: 'Nginx', level: 88, description: 'Reverse proxy and static file serving' },
            ],
        },
    ];

    const [isTechStackVisible, setIsTechStackVisible] = useState(false);
    const techStackContainerRef = useRef(null);

    const [isDetailedTechStackVisible, setIsDetailedTechStackVisible] = useState(false);
    const detailedTechStackContainerRef = useRef(null);

    const [activeTab, setActiveTab] = useState('Frontend');

    useEffect(() => {
        const handleReady = () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.target === techStackContainerRef.current && entry.isIntersecting) {
                        setIsTechStackVisible(true);
                    }
                    if (entry.target === detailedTechStackContainerRef.current && entry.isIntersecting) {
                        setIsDetailedTechStackVisible(true);
                    }
                },
                { threshold: 0.3 }
            );

            if (techStackContainerRef.current) observer.observe(techStackContainerRef.current);
            if (detailedTechStackContainerRef.current) observer.observe(detailedTechStackContainerRef.current);
        };

        window.addEventListener('skills-scroll-reset-done', handleReady);
        return () => window.removeEventListener('skills-scroll-reset-done', handleReady);
    }, []);

    return (
        <>
            {/* Top Summary Section */}
            <section className='bg-white dark:bg-darkMainBlue px-6' ref={techStackContainerRef}>
                <h2
                    className={`text-2xl pt-10 font-semibold text-center mb-8 text-mainBlack dark:text-white ${isTechStackVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                    style={{ animationDelay: '0.2s' }}
                >
                    My Tech Stack
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto'>
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-darkMainBlueLight py-3 px-4 rounded-lg border border-mainBlue/50 shadow-md ${isTechStackVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                            <h3 className='text-xl font-semibold text-mainBlack dark:text-white mb-2'>{card.title}</h3>
                            <div className='flex flex-wrap gap-2'>
                                {card.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className='bg-mainGray/20 dark:bg-white/10 text-mainBlack dark:text-white text-sm px-3 py-1 rounded-full border border-mainBlack/30 dark:border-white/20'
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Skills */}
            <section className='bg-white dark:bg-darkMainBlue px-6 pb-10' ref={detailedTechStackContainerRef}>
                <h2 className='text-2xl pt-10 font-semibold text-center mb-8 text-mainBlack dark:text-white'>Detailed Skills</h2>

                <div className='text-center mx-auto flex bg-gray-300 p-1 rounded-md w-fit mb-8'>
                    {cardData.map(({ title }) => (
                        <button
                            key={title}
                            onClick={() => setActiveTab(title)}
                            className={`w-48 text-center font-semibold px-4 py-1 rounded-md flex items-center justify-center transition-colors duration-200
                                ${activeTab === title ? 'bg-white/95 text-mainBlack' : 'bg-transparent text-mainBlack/70 hover:bg-white/30'}`}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                <div className='max-w-[800px] mx-auto bg-white dark:bg-darkMainBlueLight px-4'>
                    <div key={activeTab}>
                        {cardData
                            .find((card) => card.title === activeTab)
                            ?.skills.map((skill, index) => (
                                <div key={index} className='mb-4 fade-in-left' style={{ animationDelay: `${0.1 + index * 0.075}s`, animationFillMode: 'both' }}>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-mainBlack dark:text-white font-medium'>{skill.name}</span>
                                        <span className='text-sm text-mainBlack/60 dark:text-white/60'>{skill.level}%</span>
                                    </div>
                                    <p className='text-sm text-mainBlack/70 dark:text-white/70'>{skill.description}</p>
                                    <div className='w-full h-2 bg-mainGray/30 dark:bg-white/10 rounded-full mt-1'>
                                        <div className='h-full bg-mainBlue rounded-full transition-all duration-500' style={{ width: `${skill.level}%` }} />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechStackSection;
