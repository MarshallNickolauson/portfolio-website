import { useEffect, useRef, useState } from 'react';
import pfp from '../../assets/img/pfp.png';
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
                { threshold: 0.2 }
            );

            if (containerRef.current) observer.observe(containerRef.current);
        };

        window.addEventListener('skills-scroll-reset-done', handleReady);

        return () => window.removeEventListener('skills-scroll-reset-done', handleReady);
    }, []);

    return (
        <section ref={containerRef} className='pt-[60px] bg-white dark:bg-darkMainBlue'>
            <div className='flex flex-col justify-center pt-8'>
                <h1
                    className={`text-4xl font-semibold text-center bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                >
                    Skills & Expertise
                </h1>
                <p className={`text-md text-mainBlack dark:text-white text-center max-w-3xl flex justify-center mx-auto pt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                    With a diverse skill set spanning frontend, backend, databases, and DevOps,<br/>I am well-equipped to tackle a wide range of challenges. 
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
