import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`bg-gradient-to-t from-white to-mainBlueLight h-[650px] w-full pt-[60px] transition-opacity duration-700 ease-out ${
                isVisible ? 'opacity-100 fade-in-bottom' : 'opacity-0'
            }`}
        >
            <div className='flex flex-col items-center justify-center h-full'>
                <h1
                    className={`font-semibold text-[5rem] bg-gradient-to-r from-mainBlue/85 to-mainBlueDark bg-clip-text text-transparent ${
                        isVisible ? 'fade-in-bottom' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.1s' }}
                >
                    Hi, I'm Marshall.
                </h1>
                <p
                    className={`font-medium text-mainGray text-[1.3rem] text-center ${
                        isVisible ? 'fade-in-bottom' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.3s' }}
                >
                    Full Stack Developer specialized in building beautiful,
                    <br />
                    lightning-fast web apps primarily with the MERN stack.
                </p>
                <div
                    className={`flex space-x-4 mt-5 ${
                        isVisible ? 'fade-in-bottom' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.5s' }}
                >
                    <button
                        className='bg-mainBlue text-white px-[20px] py-3 rounded-md hover:bg-transparent border-[1px] border-mainBlue hover:text-mainBlue transition-all duration-200'
                        onClick={() => navigate('/projects')}
                    >
                        <h1 className='flex items-center justify-center'>
                            View Projects <FaArrowRight className='ml-2' />
                        </h1>
                    </button>
                    <button
                        className='bg-transparent text-mainBlue px-[35px] py-3 rounded-md border-[1px] border-mainBlue hover:bg-mainBlue hover:text-white transition-all duration-200'
                        onClick={() => navigate('/contact')}
                    >
                        <h1 className='flex items-center justify-center'>Contact Me</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;