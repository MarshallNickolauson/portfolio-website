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
        <section className='py-12 text-center px-4 bg-mainBlueLight dark:bg-white'>
            <h2
                ref={titleRef}
                className={`text-3xl font-semibold text-mainBlack ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
            >
                Let's <span className='text-red-500'>Connect</span>
            </h2>

            <p
                ref={paragraphRef}
                className={`text-mainGray text-base max-w-xl mx-auto mt-4 leading-relaxed ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
            >
                I am a passionate developer with 3+ years of experience building web applications that would solve real world problems. My approach combines technical expertise with a deep understanding of the design of user needs and business objectives. I believe in making solutions that aren’t just functional, but also intuitive, fast, and scalable.
            </p>

            <div
                ref={buttonRef}
                className={`mt-6 flex justify-center ${isButtonVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
            >
                <button
                    className='text-white bg-mainBlue border border-mainBlue px-6 py-3 rounded-md text-base font-medium hover:bg-transparent hover:text-mainBlue transition-all duration-300 ease-in-out flex items-center'
                    onClick={() => navigate('/contact')}
                >
                    Start a Conversation <FaArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
}

export default ContactMeSection
