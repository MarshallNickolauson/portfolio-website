import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

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

        window.addEventListener('scroll-reset-done', handleReady);

        return () => window.removeEventListener('scroll-reset-done', handleReady);
    }, []);

    return (
        <>
            <div className='top-0 w-full h-[60px] bg-white dark:bg-darkMainBlue/80 z-40' />
            <div className={`bg-gradient-to-t from-white to-mainBlueLight dark:from-darkMainBlue dark:to-darkMainBlue/60 h-[580px] w-full`}>
                <div ref={containerRef} className='flex flex-col items-center justify-center h-full'>
                    <h1
                        className={`font-semibold text-[5rem] bg-gradient-to-r from-mainBlue/85 to-mainBlueDark bg-clip-text text-transparent ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                        style={{ animationDelay: '0.1s' }}
                    >
                        Hi, I'm Marshall.
                    </h1>
                    <p className={`font-medium text-mainGray dark:text-white text-[1.3rem] text-center ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                        Full Stack Developer specialized in building beautiful,
                        <br />
                        lightning-fast web apps using the MERN stack.
                    </p>
                    <div className={`flex space-x-4 mt-5 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                        <button
                            className='bg-mainBlue text-white px-[20px] py-3 rounded-md hover:bg-transparent border-[1px] border-mainBlue hover:text-mainBlue dark:hover:text-white dark:hover:border-white transition-all duration-200'
                            onClick={() => navigate('/projects')}
                        >
                            <h1 className='flex items-center justify-center'>
                                View Projects <FaArrowRight className='ml-2' />
                            </h1>
                        </button>
                        <button
                            className='bg-transparent px-[35px] text-mainBlue py-3 rounded-md border border-mainBlue dark:border-white dark:text-white hover:bg-mainBlue dark:hover:bg-transparent hover:text-white transition duration-200'
                            onClick={() => navigate('/contact')}
                        >
                            <h1 className='flex items-center justify-center'>Contact Me</h1>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
