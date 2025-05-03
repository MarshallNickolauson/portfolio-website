import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SkillsSection = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isTechStackVisible, setIsTechStackVisible] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);
    const techStackRef = useRef(null);

    const cardData = [
        {
            title: 'Frontend',
            skills: ['React', 'Redux', 'Tailwind CSS'],
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'JWT Auth'],
        },
        {
            title: 'Database',
            skills: ['MongoDB', 'MySQL', 'Redis'],
        },
        {
            title: 'DevOps',
            skills: ['Docker', 'Git', 'Nginx'],
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
                    if (entry.target === techStackRef.current && entry.isIntersecting) {
                        setIsTechStackVisible(true);
                    }
                },
                { threshold: 0.3 }
            );

            if (titleRef.current) observer.observe(titleRef.current);
            if (buttonRef.current) observer.observe(buttonRef.current);
            if (techStackRef.current) observer.observe(techStackRef.current);
        };

        window.addEventListener('scroll-reset-done', handleReady);

        return () => window.removeEventListener('scroll-reset-done', handleReady);
    }, []);

    return (
        <section className='pb-10 bg-white dark:bg-darkMainBlue'>
            <h2 ref={titleRef} className={`text-3xl text-mainBlack dark:text-white font-semibold text-center pt-8 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                How I Work
            </h2>
            <p ref={subtitleRef} className={`text-md text-mainGray dark:text-white/60 text-center mt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                A few of the most important skills to turn challenges into opportunities.
            </p>

            {/* Tech Stack Cards */}
            <div className='mt-10 px-6' ref={techStackRef}>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto'>
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-darkMainBlueLight py-3 px-4 rounded-lg border border-mainBlue/50 shadow-md ${isTechStackVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                            <h3 className='text-md text-center font-semibold text-mainBlack dark:text-white mb-2'>{card.title}</h3>
                            <div className='flex flex-wrap gap-2 justify-center text-center'>
                                {card.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className='bg-transparent text-mainBlack dark:text-white text-xs px-3 py-1 rounded-full border border-mainBlack/30 dark:border-white/20'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div ref={buttonRef} className={`mt-10 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <button
                    className='text-mainBlue dark:text-white border border-mainBlue dark:border-white px-6 py-3 rounded-md text-base font-medium hover:bg-mainBlue dark:hover:border-mainBlue hover:text-white transition flex items-center'
                    onClick={() => navigate('/skills')}
                >
                    Explore Skills <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default SkillsSection;
