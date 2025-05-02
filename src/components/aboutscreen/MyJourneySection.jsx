import { useEffect, useRef, useState } from 'react';

const JourneySection = () => {
    const journeyData = [
        {
            date: '2025 - Present',
            title: 'Student and Builder',
            description:
                'Now pursuing a Master of Science in Computer Science at the University of Colorado Boulder. While continuing to build full stack apps for fun, I’m now diving deeper into formal CS fundamentals and have carefully mapped out my academic path. I also got married this year to the love of my life, and together we serve full-time in our ministry, keeping God at the center of it all.',
            verse: '"And let us not be weary in well doing: for in due season we shall reap, if we faint not." – Galatians 6:9',
        },
        {
            date: '2024 - 2025',
            title: 'Certified Full Stack Developer',
            description:
                'I completed several professional certifications from Meta and IBM, learning both front-end and back-end development. To take it further, I taught myself how to containerize and deploy applications using Docker, Redis, NGINX, HTTPS, and more. This stage was about making production-ready apps that actually work in the real world.',
            verse: '"And whatsoever ye do, do it heartily, as to the Lord, and not unto men;" – Colossians 3:23',
        },
        {
            date: '2023 - 2024',
            title: 'Self-Taught Explorer',
            description:
                'This was my “try everything” phase. I explored many programming languages and got hands-on with Spring Boot and Java through Amigoscode. I also built a few automation bots in Python. It wasn’t deeply structured, but it expanded my horizons and helped me understand where I wanted to go next.',
            verse: '"For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end." – Jeremiah 29:11',
        },
        {
            date: '2022 - 2023',
            title: 'Certified Neophyte',
            description:
                'I knew nothing about coding. One day, I followed an obscure JavaScript tutorial to turn my computer into a blockchain node. It didn’t work—I failed, and I was frustrated. That moment pushed me to look up how to start learning web development. I spent 12 hours that day diving into HTML, CSS, and JavaScript. The next day, and many days after, I prayed often for God’s guidance on how to move forward. That was the beginning of something great.',
            verse: '“Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.” – Proverbs 3:5–6',
        },
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
                { threshold: 0.2 }
            );

            if (containerRef.current) observer.observe(containerRef.current);
        };

        window.addEventListener('about-scroll-reset-done', handleReady);

        return () => window.removeEventListener('about-scroll-reset-done', handleReady);
    }, []);

    return (
        <section className='bg-white dark:bg-darkMainBlueLight px-6' ref={containerRef}>
            <h2 className={`text-3xl md:text-4xl pt-10 font-semibold text-center mb-8 text-mainBlack dark:text-white ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: `0.2s` }}>
                My Journey
            </h2>
            <div className='relative max-w-4xl mx-auto'>
                {journeyData.map((item, index) => (
                    <div key={index} className={`relative pl-12 pb-10 ${isVisible ? 'fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                        <div className='absolute left-[10px] top-[7px] w-4 h-4 rounded-full bg-mainBlue z-10 transform -translate-x-1/2' />

                        {index < journeyData.length - 1 && (
                            <div
                                className={`absolute left-[10px] top-4 w-[3px] bg-mainBlue/70 z-0 transform -translate-x-1/2 ${isVisible ? 'draw-down' : 'opacity-0'}`}
                                style={{
                                    animationDelay: `${1.3 + index * 0.5}s`,
                                    animationFillMode: 'forwards',
                                }}
                            />
                        )}

                        <h3 className='text-lg font-semibold text-mainBlack dark:text-white'>{item.date}</h3>
                        <p className='text-md text-mainBlue dark:text-mainBlue/ font-medium mb-2'>
                            {item.title} {item.company && <span className='text-mainGray dark:text-white'>at {item.company}</span>}
                        </p>
                        <p className='text-sm text-mainGray dark:text-white'>{item.description}</p>
                        <p className='text-sm italic text-mainBlueDark dark:text-mainBlue mt-2'>{item.verse}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneySection;
