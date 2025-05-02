import metaLogo from '../../assets/img/meta-logo.png';
import cuLogo from '../../assets/img/cu-logo.png';
import hsLogo from '../../assets/img/hs-logo.png';
import { FaAward } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
    const specializations = [
        {
            name: 'Meta Front-End Developer Professional Certificate',
            org: 'Meta',
            logo: metaLogo,
            date: 'June 2024',
            id: '448YFNHKUYBA',
            description: 'Covers HTML, CSS, JavaScript, React, and UI principles for building responsive web apps.',
        },
        {
            name: 'Meta Back-End Developer Professional Certificate',
            org: 'Meta',
            logo: metaLogo,
            date: 'February 2024',
            id: 'BHWXCCP9QEQ4',
            description: 'Focuses on Node.js, Express, databases, APIs, and server-side application deployment.',
        },
    ];

    const certifications = [
        {
            name: 'Network Systems Foundations',
            org: 'University of Colorado Boulder',
            logo: cuLogo,
            date: 'January 2025',
            id: 'LO36CG40LWA3',
            description: 'Covers the fundamentals of computer networks, including protocols, architectures, and security.',
        },
        {
            name: 'Advanced React',
            org: 'Meta',
            logo: metaLogo,
            date: 'June 2024',
            id: '3P78AX4UVBCG',
            description: 'Explores advanced concepts in React, including hooks, context API, and performance optimization.',
        },
        {
            name: 'Principles of UX/UI Design',
            org: 'Meta',
            logo: metaLogo,
            date: 'June 2024',
            id: 'MTMRSS8DNJD8',
            description: 'Covers user-centered design principles, usability testing, and design thinking methodologies.',
        },
        {
            name: 'Back-End Developer Capstone',
            org: 'Meta',
            logo: metaLogo,
            date: 'January 2024',
            id: 'PW56JH52EE5D',
            description: 'A hands-on project that demonstrates back-end development skills using Python and Django.',
        },
        {
            name: 'React Basics',
            org: 'Meta',
            logo: metaLogo,
            date: 'May 2024',
            id: 'A979MEL86EJF',
            description: 'Introduces the basics of React, including components, state management, and props.',
        },
        {
            name: 'Programming with JavaScript',
            org: 'Meta',
            logo: metaLogo,
            date: 'March 2024',
            id: '5W6BE77KZRAS',
            description: 'Covers the fundamentals of JavaScript programming, including syntax, data types, and control structures.',
        },
        {
            name: 'HTML and CSS in depth',
            org: 'Meta',
            logo: metaLogo,
            date: 'March 2024',
            id: 'GZUEFRL6KVXG',
            description: 'Covers the fundamentals of HTML and CSS, including layout, styling, and responsive design.',
        },
        {
            name: 'Coding Interview Preparation',
            org: 'Meta',
            logo: metaLogo,
            date: 'February 2024',
            id: 'C2FT44CPGVSJ',
            description: 'Prepares for coding interviews with practice problems and strategies for technical interviews.',
        },
        {
            name: 'Front-End Developer Capstone ',
            org: 'Meta',
            logo: metaLogo,
            date: 'June 2024',
            id: 'JQXDCFCHXVFJ',
            description: 'A hands-on project that demonstrates front-end development skills using React and CSS.',
        },
        {
            name: 'Introduction to Front-End Development',
            org: 'Meta',
            logo: metaLogo,
            date: 'February 2024',
            id: '4MXQ56XWPK72',
            description: 'Covers the basics of front-end development, including HTML, CSS, and JavaScript.',
        },
        {
            name: 'Version Control',
            org: 'Meta',
            logo: metaLogo,
            date: 'September 2023',
            id: 'VULWH22FQE7K',
            description: 'Covers the fundamentals of version control using Git, including branching, merging, and collaboration.',
        },
        {
            name: 'Django Web Framework',
            org: 'Meta',
            logo: metaLogo,
            date: 'November 2023',
            id: 'M6PY8QBWDPA6',
            description: 'Covers the basics of Django, including models, views, templates, and RESTful APIs.',
        },
        {
            name: 'Introduction to Back-End Development',
            org: 'Meta',
            logo: metaLogo,
            date: 'August 2023',
            id: 'UQBSS353RGX6',
            description: 'Covers the basics of back-end development, including databases, APIs, and server-side programming.',
        },
        {
            name: 'APIs',
            org: 'Meta',
            logo: metaLogo,
            date: 'December 2023',
            id: 'GPKMCJNU8M88',
            description: 'Covers the fundamentals of APIs, including RESTful design, authentication, and data formats.',
        },
        {
            name: 'Programming in Python',
            org: 'Meta',
            logo: metaLogo,
            date: 'September 2023',
            id: 'ZDD77ZRX3LE9',
            description: 'Covers the fundamentals of Python programming, including syntax, data types, and control structures.',
        },
        {
            name: 'The Full Stack',
            org: 'Meta',
            logo: metaLogo,
            date: 'January 2024',
            id: 'ZS9ZBXZ4J5SL',
            description: 'Covers the full stack of web development, including front-end, back-end, and deployment.',
        },
        {
            name: 'Introduction to Databases for Back-End Development',
            org: 'Meta',
            logo: metaLogo,
            date: 'October 2023',
            id: 'ZB3MN8BDGNVR',
            description: 'Covers the basics of databases, including SQL, NoSQL, and data modeling.',
        },
    ];

    const [visibleSections, setVisibleSections] = useState({
        title: false,
        specializations: false,
        certifications: false,
        highSchool: false,
    });

    const titleRef = useRef(null);
    const specializationsRef = useRef(null);
    const certificationsRef = useRef(null);
    const highSchoolRef = useRef(null);

    useEffect(() => {
        const sections = [
            { key: 'title', ref: titleRef },
            { key: 'specializations', ref: specializationsRef },
            { key: 'certifications', ref: certificationsRef },
            { key: 'highSchool', ref: highSchoolRef },
        ];

        const handleReady = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const section = sections.find((s) => s.ref.current === entry.target);
                            if (section && !visibleSections[section.key]) {
                                setVisibleSections((prev) => ({ ...prev, [section.key]: true }));
                            }
                        }
                    });
                },
                { threshold: 0.3 }
            );

            sections.forEach(({ ref }) => {
                if (ref.current) observer.observe(ref.current);
            });
        };

        window.addEventListener('about-scroll-reset-done', handleReady);

        return () => window.removeEventListener('about-scroll-reset-done', handleReady);
    }, [visibleSections]);

    const getAnimationClass = (sectionKey) => (visibleSections[sectionKey] ? 'fade-in-bottom opacity-100' : 'opacity-0');

    const getStyle = (index) => ({
        animationDelay: `${0.1 + index * 0.2}s`,
    });

    return (
        <section className='bg-white dark:bg-darkMainBlueLight px-6'>
            {/* Title */}
            <h2 ref={titleRef} className={`text-3xl md:text-4xl pt-10 font-semibold text-center text-mainBlack dark:text-white ${getAnimationClass('title')}`} style={getStyle(0)}>
                Education
            </h2>
            <p className={`text-md text-mainBlack dark:text-white text-center pt-2 ${getAnimationClass('title')}`} style={getStyle(1)}>
                Here are some of my specializations and certifications.
            </p>

            {/* Specializations */}
            <h1
                ref={specializationsRef}
                className={`flex items-center text-xl pt-5 font-semibold text-left max-w-3xl mx-auto text-mainBlack dark:text-white mb-2 border-b-2 pb-2 border-mainGray/50 ${getAnimationClass(
                    'specializations'
                )}`}
                style={getStyle(2)}
            >
                <FaAward className='mr-1 text-[#ff9900]' /> Specializations
            </h1>

            {specializations
                .sort((a, b) => new Date(`1 ${b.date}`) - new Date(`1 ${a.date}`))
                .map((spec, index) => (
                    <div
                        key={index}
                        className={`relative max-w-3xl mx-auto bg-white rounded-md border-[1px] border-mainGray/40 dark:border-mainBlue/60 dark:bg-darkMainBlueLight mt-4 ${getAnimationClass(
                            'specializations'
                        )}`}
                        style={getStyle(index + 3)}
                    >
                        <div className='relative px-4 py-2'>
                            <img src={spec.logo || metaLogo} alt='Logo' className='absolute right-3 top-1 h-8' />
                            <p className='text-md text-mainBlack dark:text-mainBlue font-semibold'>{spec.name}</p>
                            <p className='text-xs text-mainGray dark:text-white'>
                                {spec.org} &middot; {spec.date} &middot; ID: {spec.id}
                            </p>
                            <p className='text-sm text-mainBlack dark:text-white mt-2'>{spec.description}</p>
                            <a
                                href={`https://www.coursera.org/account/accomplishments/professional-cert/${spec.id}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-xs text-mainBlueDark dark:text-mainBlue mt-2 underline cursor-pointer'
                            >
                                View Credential
                            </a>
                        </div>
                    </div>
                ))}

            {/* Certifications */}
            <h1
                ref={certificationsRef}
                className={`flex items-center text-xl pt-5 font-semibold text-left max-w-3xl mx-auto text-mainBlack dark:text-white mb-2 border-b-2 pb-2 border-mainGray/50 ${getAnimationClass(
                    'certifications'
                )}`}
                style={getStyle(0)}
            >
                <FiAward className='mr-1 text-[#ff9900]' /> Certifications
            </h1>

            {certifications
                .sort((a, b) => new Date(`1 ${b.date}`) - new Date(`1 ${a.date}`))
                .map((cert, index) => (
                    <div
                        key={index}
                        className={`relative max-w-3xl mx-auto bg-white rounded-md border-[1px] border-mainGray/40 dark:border-mainBlue/60 dark:bg-darkMainBlueLight mt-4 ${getAnimationClass(
                            'certifications'
                        )}`}
                        style={getStyle(index + 1)}
                    >
                        <div className='relative px-4 py-2'>
                            <img src={cert.logo || cuLogo} alt='Logo' className='absolute right-3 top-1 h-8' />
                            <p className='text-md text-mainBlack dark:text-mainBlue font-semibold'>{cert.name}</p>
                            <p className='text-xs text-mainGray dark:text-white'>
                                {cert.org} &middot; {cert.date} &middot; ID: {cert.id}
                            </p>
                            <p className='text-sm text-mainBlack dark:text-white mt-2'>{cert.description}</p>
                            <a
                                href={`https://www.coursera.org/account/accomplishments/records/${cert.id}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-xs text-mainBlueDark dark:text-mainBlue mt-2 underline cursor-pointer'
                            >
                                View Credential
                            </a>
                        </div>
                    </div>
                ))}

            {/* High School */}
            <h1
                ref={highSchoolRef}
                className={`flex items-center text-xl pt-5 font-semibold text-left max-w-3xl mx-auto text-mainBlack dark:text-white mb-3 border-b-2 pb-2 border-mainGray/50 ${getAnimationClass(
                    'highSchool'
                )}`}
                style={getStyle(0)}
            >
                <LuGraduationCap className='mr-1 text-[#ff9900]' /> High School
            </h1>
            <div className='pb-3'>
                <div
                    className={`relative max-w-3xl mx-auto bg-white rounded-md border-[1px] border-mainGray/40 dark:border-mainBlue/60 dark:bg-darkMainBlueLight ${getAnimationClass('highSchool')}`}
                    style={getStyle(1)}
                >
                    <div className='relative px-4 py-2'>
                        <img src={hsLogo} alt='High School Logo' className='absolute right-3 top-1 h-8' />
                        <p className='text-md text-mainBlack dark:text-mainBlue font-semibold'>Mountainside High School</p>
                        <p className='text-xs text-mainGray dark:text-white'>Beaverton, Oregon, USA &middot; June 2022</p>
                        <p className='text-xs text-mainBlack dark:text-white'>GPA: 4.023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
