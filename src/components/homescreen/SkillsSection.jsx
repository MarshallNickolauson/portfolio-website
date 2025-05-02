import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SkillsSection = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

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
                },
                { threshold: 0.4 }
            );

            if (titleRef.current) observer.observe(titleRef.current);
            if (buttonRef.current) observer.observe(buttonRef.current);
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
            <div className='mt-8'>
                <h1 className='text-center'>Cards like from the skills page here</h1>
            </div>
            <div ref={buttonRef} className={`mt-6 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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
