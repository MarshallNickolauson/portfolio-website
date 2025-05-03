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

        window.addEventListener('contact-scroll-reset-done', handleReady);

        return () => window.removeEventListener('contact-scroll-reset-done', handleReady);
    }, []);

    return (
        <section ref={containerRef} className='pt-[60px] bg-white dark:bg-darkMainBlue'>
            <div className='flex flex-col justify-center pt-8'>
                <h1 className={`text-4xl font-semibold text-center bg-gradient-to-r pb-2 from-mainBlue/75 to-mainBlueDark bg-clip-text text-transparent ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}>
                    Get in Touch
                </h1>
                <p
                    className={`text-md text-mainBlack dark:text-white text-center max-w-3xl flex justify-center mx-auto pt-2 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: '0.2s' }}
                >
                    Want to talk, collaborate on a project, or hire? I'd love to hear from you.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
