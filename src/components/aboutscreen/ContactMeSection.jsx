import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactMeSection = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
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

        window.addEventListener('about-scroll-reset-done', handleReady);

        return () => window.removeEventListener('about-scroll-reset-done', handleReady);
    }, []);

    return (
        <section className='py-12 text-center px-4 bg-mainBlueLight dark:bg-darkMainBlueLight'>
            <h2 ref={titleRef} className={`text-3xl md:text-4xl font-semibold text-mainBlack dark:text-white ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                Want to <span className='text-red-500'>Talk</span>?
            </h2>

            <p ref={paragraphRef} className={`text-mainGray dark:text-white/90 text-base max-w-4xl text-center mx-auto mt-4 leading-relaxed ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                I'm always up for meaningful conversations, fresh ideas, and collaborating with curious minds.
                <br />
                Whether it's a project, a question, or just something worth sharing — I'd love to hear from you.
            </p>

            <div ref={buttonRef} className={`mt-6 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <button
                    className='text-white bg-mainBlue border border-mainBlue px-6 py-3 rounded-md text-base font-light hover:bg-transparent hover:text-mainBlue transition-all duration-300 ease-in-out flex items-center'
                    onClick={() => navigate('/contact')}
                >
                    Start a Conversation <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default ContactMeSection;
