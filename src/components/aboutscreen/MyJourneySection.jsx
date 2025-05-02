import React from 'react';

const journeyData = [
    {
        date: '2023 - Present',
        title: 'Senior Developer',
        company: 'Tech Innovations',
        description:
            'Leading development of enterprise web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices across the team. Reduced application load time by 40% through performance optimizations.',
    },
    {
        date: '2021 - 2023',
        title: 'Full Stack Developer',
        company: 'WebSolutions Inc.',
        description:
            'Built and maintained various client websites and web applications. Led a team of 3 developers on a major e-commerce project that increased client revenue by 35%. Implemented CI/CD pipelines that reduced deployment time by 60%.',
    },
    {
        date: '2020 - 2021',
        title: 'Frontend Developer',
        company: 'StartupX',
        description:
            "Developed responsive user interfaces and implemented new features. Collaborated with designers to create intuitive user experiences. Contributed to the company's component library, improving development efficiency across teams.",
    },
    {
        date: '2019',
        title: 'Started Coding Journey',
        company: '',
        description:
            'Began learning web development through online courses and personal projects. Built my first e-commerce site for a local business, which led to my first professional role in the industry.',
    },
];

const JourneySection = () => {
    return (
        <section className='bg-white dark:bg-darkMainBlue py-16 px-6'>
            <h2 className='text-3xl md:text-4xl font-semibold text-center mb-12 text-mainBlack dark:text-white'>My Journey</h2>
            <div className='relative max-w-4xl mx-auto pl-6'>
                <div className='absolute -left-[4px] top-2 h-full border-l-4 border-mainBlue/60'></div>
                {journeyData.map((item, index) => (
                    <div key={index} className='mb-12 relative'>
                        <div className='absolute -left-[37px] top-1 w-6 h-6 bg-mainBlue rounded-full dark:border-darkMainBlue shadow-md' />
                        <h3 className='text-lg font-semibold text-mainBlack dark:text-white'>{item.date}</h3>
                        <p className='text-md text-mainBlue font-medium mb-2'>
                            {item.title} {item.company && <span className='text-mainGray dark:text-white'>at {item.company}</span>}
                        </p>
                        <p className='text-sm text-mainGray dark:text-white'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneySection;
