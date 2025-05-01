import { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TestimonialsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'Viestarts Vidins',
            title: 'CEO at LinguaCore',
            feedback:
                'Impressive work on leveraging AI-powered translations in your project, Marshall. Implementing Docker and NGINX for containerization and security are crucial skills in our evolving tech landscape. Keep pushing the boundaries with these innovative approaches!',
            linkedin: '#',
        },
        {
            id: 2,
            name: 'Viestarts Vidins',
            title: 'CEO at LinguaCore',
            feedback:
                'Impressive work on leveraging AI-powered translations in your project, Marshall. Implementing Docker and NGINX for containerization and security are crucial skills in our evolving tech landscape. Keep pushing the boundaries with these innovative approaches!',
            linkedin: '#',
        },
        {
            id: 3,
            name: 'Viestarts Vidins',
            title: 'CEO at LinguaCore',
            feedback:
                'Impressive work on leveraging AI-powered translations in your project, Marshall. Implementing Docker and NGINX for containerization and security are crucial skills in our evolving tech landscape. Keep pushing the boundaries with these innovative approaches!',
            linkedin: '#',
        },
    ];

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

    return (
        <section className='bg-mainBlueLight py-6'>
            <h2
                ref={titleRef}
                className={`text-3xl text-mainBlack font-semibold text-center ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
            >
                What <span className='text-red-500'>Real</span> People Say
            </h2>
            <p
                className={`text-base text-md text-mainGray text-center mt-2 ${isVisible ? 'fade-in-bottom' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
            >
                Here's what some people have said so far about my work.
            </p>

            <div className='flex flex-wrap justify-center gap-6 mt-8 px-4 pb-2'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`bg-white shadow-md rounded-xl border border-[#e0ecff] w-[270px] p-6 flex flex-col space-y-4 ${
                            isVisible ? 'fade-in-bottom' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                    >
                        <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 bg-gray-300 rounded-full' />
                            <div>
                                <p className='font-semibold text-mainBlack'>{testimonial.name}</p>
                                <p className='text-sm text-mainGray'>{testimonial.title}</p>
                            </div>
                        </div>
                        <hr className='border-t border-mainBlueLight' />
                        <p className='text-sm italic text-mainGrayDark leading-relaxed'>
                            “{testimonial.feedback}”
                        </p>
                        <a
                            href={testimonial.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-mainBlue font-semibold text-sm flex items-center space-x-1'
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