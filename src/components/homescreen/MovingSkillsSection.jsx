import React, { useEffect, useRef, useState } from 'react';

const MovingSkillsSection = () => {
    const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'Flask', 'Redis', 'RESTful APIs', 'Tailwind CSS', 'Bootstrap'];
    const repeatedSkills = [...skills, ...skills];

    const containerRef = useRef(null);

    useEffect(() => {
        const handleReady = () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        containerRef.current.classList.add('fade-in');
                    }
                },
                { threshold: 0.4 }
            );

            if (containerRef.current) observer.observe(containerRef.current);
        };

        window.addEventListener('scroll-reset-done', handleReady);

        return () => window.removeEventListener('scroll-reset-done', handleReady);
    }, []);

    return (
        <section className={`bg-white dark:bg-darkMainBlue py-8 overflow-hidden `}>
            <div ref={containerRef} className='relative w-full'>
                <div className='marquee-track'>
                    {repeatedSkills.map((skill, index) => (
                        <span key={index} className='font-bold text-mainBlue text-sm bg-mainBlueLight px-5 py-2 mx-2 rounded-full border-[1px] border-mainBlue dark:bg-white/10 dark:text-white dark:border-white/40'>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovingSkillsSection;