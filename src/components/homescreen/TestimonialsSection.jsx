import { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import viestarts from '../../assets/img/viestarts.png';

const TestimonialsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'Viestarts Vidins',
            title: 'CEO at LinguaCore',
            img: viestarts,
            feedback:
                'Impressive work on leveraging AI-powered translations in your project, Marshall. Implementing Docker and NGINX for containerization and security are crucial skills in our evolving tech landscape. Keep pushing the boundaries with these innovative approaches!',
            linkedin: '#',
        },
        {
            id: 2,
            name: 'Viestarts Vidins',
            title: 'CEO at LinguaCore',
            img: viestarts,
            feedback:
                'Impressive work on leveraging AI-powered translations in your project, Marshall. Implementing Docker and NGINX for containerization and security are crucial skills in our evolving tech landscape. Keep pushing the boundaries with these innovative approaches!',
            linkedin: '#',
        },
        {
            id: 3,
            name: 'Viestarts Vidins',
            title: 'CEO at LinguaCore',
            img: viestarts,
            feedback:
                'Impressive work on leveraging AI-powered translations in your project, Marshall. Implementing Docker and NGINX for containerization and security are crucial skills in our evolving tech landscape. Keep pushing the boundaries with these innovative approaches!',
            linkedin: '#',
        },
    ];

    useEffect(() => {
        const handleReady = () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.4 }
            );

            if (titleRef.current) observer.observe(titleRef.current);
        };

        window.addEventListener('scroll-reset-done', handleReady);

        return () => {
            window.removeEventListener('scroll-reset-done', handleReady);
        };
    }, []);

    return (
        <section className='bg-mainBlueLight dark:bg-darkMainBlue py-10'>
            <h2
                ref={titleRef}
                className={`text-3xl text-mainBlack dark:text-white font-semibold text-center ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
            >
                What <span className='text-red-500'>Real</span> People Say
            </h2>
            <p
                className={`text-base text-md text-mainGray dark:text-white/60 text-center mt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
            >
                Here's what some people have said so far about my work.
            </p>

            <div className='flex flex-wrap justify-center gap-6 mt-8 px-4 pb-2'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`bg-white dark:bg-darkMainBlueLight shadow-md rounded-xl border border-mainBlue/20 dark:border-mainBlue/50 w-[270px] p-6 flex flex-col space-y-4 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                    >
                        <div className='flex items-center space-x-3'>
                            <img className='w-10 h-10 rounded-full border-[1px] border-mainBlue/50 shadow-sm dark:shadow-mainBlue object-cover' src={testimonial.img} alt="Pic" />
                            <div>
                                <p className='font-semibold text-mainBlack dark:text-white'>{testimonial.name}</p>
                                <p className='text-sm text-mainGray dark:text-white/60'>{testimonial.title}</p>
                            </div>
                        </div>
                        <hr className='border-t border-mainBlueLight dark:border-white/10' />
                        <p className='text-sm italic text-mainGrayDark dark:text-white/70 leading-relaxed'>“{testimonial.feedback}”</p>
                        <a
                            href={testimonial.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-mainBlue font-semibold text-sm flex items-center space-x-1 hover:underline'
                        >
                            <FaLinkedin /> <span>LinkedIn</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
