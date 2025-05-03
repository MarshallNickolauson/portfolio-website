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

        window.addEventListener('projects-scroll-reset-done', handleReady);

        return () => window.removeEventListener('projects-scroll-reset-done', handleReady);
    }, []);

    return (
        <section className='py-6 text-center px-4 bg-mainBlueLight dark:bg-darkMainBlueLight'>
            <h2 ref={titleRef} className={`text-3xl md:text-4xl font-semibold text-mainBlack dark:text-white ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                Have a <span className='text-red-500'>Question</span>?
            </h2>

            <p
                ref={paragraphRef}
                className={`text-mainGray dark:text-white/90 text-base max-w-4xl text-center mx-auto mt-4 leading-relaxed ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
            >
                I’m always open to new ideas, thoughtful questions, or simply a good chat. <br />
                Whether you're planning a project, curious about something, or just want to connect — I’d be happy to talk.
            </p>

            <div ref={buttonRef} className={`mt-6 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <button
                    className='text-white bg-mainBlue border border-mainBlue px-6 py-3 rounded-md text-base font-light hover:bg-transparent hover:text-mainBlue transition-all duration-300 ease-in-out flex items-center'
                    onClick={() => navigate('/contact')}
                >
                    Let's Chat! <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default ContactMeSection;
