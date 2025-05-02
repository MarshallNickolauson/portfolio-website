import { useEffect, useRef, useState } from 'react';

const SoftSkillsSection = () => {
    const softSkills = [
        'Communication',
        'Team Collaboration',
        'Adaptability',
        'Problem-Solving',
        'Initiative',
        'Time Management',
        'Attention to Detail',
        'Critical Thinking',
        'Leadership',
        'Empathy',
        'High-Pressure Decision Making',
        'Kindness',
    ];

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleReady = () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.target === containerRef.current && entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.4 }
            );

            if (containerRef.current) observer.observe(containerRef.current);
        };

        window.addEventListener('about-scroll-reset-done', handleReady);

        return () => window.removeEventListener('about-scroll-reset-done', handleReady);
    }, []);

    return (
        <section className='bg-white dark:bg-darkMainBlue pt-8 px-6' ref={containerRef}>
            <h2 className={`text-3xl md:text-4xl font-semibold text-center mb-8 text-mainBlack dark:text-white ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: `0.2s` }}>
                Professional Skills
            </h2>
            <div className={`flex flex-wrap justify-center gap-3 max-w-[1200px] mx-auto ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: `0.4s` }}>
                {softSkills.map((skill, index) => (
                    <span key={index} className='font-semibold text-mainBlack text-sm bg-mainBlueLight px-4 py-1.5 rounded-full border whitespace-nowrap'>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SoftSkillsSection;
