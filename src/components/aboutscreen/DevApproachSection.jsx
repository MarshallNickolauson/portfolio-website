import { useEffect, useRef, useState } from 'react';

const cardData = [
    {
        title: 'Clean Code Matters',
        content:
            "I believe in writing clean, maintainable code that's easy to understand and extend. Good code should read like a well-written story. This approach reduces bugs, makes collaboration easier, and ensures a project can evolve over time.",
    },
    {
        title: 'Always Learning',
        content:
            "The tech world evolves rapidly, and I'm committed to continuous learning and improvement. I dedicate time each week to explore new technologies and techniques. This ensures I can always stay ahead of the curve.",
    },
    {
        title: 'User-First Approach',
        content:
            "There's no need to reinvent the wheel when it comes to clean, user-friendly UI. I enjoy prioritizing user experience and accessibility in everything I build. Technical excellence means nothing if the end product doesn't serve users well.",
    },
];

const DevApproachSection = () => {
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
        <section className='bg-white dark:bg-darkMainBlue px-6 pb-10' ref={containerRef}>
            <h2
                className={`text-3xl md:text-4xl pt-10 font-semibold text-center mb-8 text-mainBlack dark:text-white ${
                    isVisible ? 'fade-in-bottom' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.2s' }}
            >
                My Approach to Development
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-white dark:bg-darkMainBlueLight rounded-lg p-6 border-[1px] border-mainBlue ${
                            isVisible ? 'fade-in-bottom' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                        <h3 className='text-xl font-semibold text-mainBlack dark:text-white mb-4'>{card.title}</h3>
                        <p className='text-md text-mainGray dark:text-white'>{card.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DevApproachSection;
