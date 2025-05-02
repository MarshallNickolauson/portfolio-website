import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SkillsSection = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    // const projectsRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setIsButtonVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (buttonRef.current) observer.observe(buttonRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className='pb-10 bg-white dark:bg-darkMainBlue'>
            <h2 ref={titleRef} className={`text-3xl text-mainBlack font-semibold text-center pt-8 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                How I Work
            </h2>
            <p ref={subtitleRef} className={`text-md text-mainGray text-center mt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
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
