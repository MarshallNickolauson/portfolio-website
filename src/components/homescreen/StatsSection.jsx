import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
    const stats = [
        { number: 15, label: 'Projects Completed' },
        { number: 3, label: 'Years of Experience' },
        { number: 20, label: 'Specialized Certificates' },
        { number: 1000, label: 'Hours Coding' },
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);

        useEffect(() => {
            const handleReady = () => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            hasAnimated.current = true;
                    animateCounts();
                        }
                    },
                    { threshold: 0.4 }
                );
    
                if (containerRef.current) observer.observe(containerRef.current);
            };
    
            window.addEventListener('scroll-reset-done', handleReady);
    
            return () => window.removeEventListener('scroll-reset-done', handleReady);
        }, []);

    const animateCounts = () => {
        const duration = 2000;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts(
                stats.map((stat) =>
                    stat.number === 1000
                        ? Math.floor(progress * 1000)
                        : Math.floor(progress * stat.number)
                )
            );

            if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    };

    return (
        <section
            ref={containerRef}
            className='bg-mainBlueLight dark:bg-white h-[180px] w-full flex items-center justify-center'
        >
            <div className='flex space-x-20'>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center opacity-0 transform translate-y-10 transition-all duration-500 delay-${index * 200}`}
                        style={{
                            animation: hasAnimated.current
                                ? `fadeUp 0.5s ease-out ${index * 0.2}s forwards`
                                : 'none',
                        }}
                    >
                        <h1 className='text-[2.5rem] font-semibold text-mainBlueDark text-center'>
                            {counts[index]}+
                        </h1>
                        <p className='text-mainGrayDark text-[1.1rem] font-medium text-center'>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
            <style>
                {`
                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default StatsSection;