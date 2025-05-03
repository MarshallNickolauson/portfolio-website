import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/contactscreen/HeroSection';
import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import emailjs from 'emailjs-com';
import { FaCircle } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';

const ContactScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('contact-scroll-reset-done'));
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ls9kg08', 'template_zuwzjmg', e.target, 'op65DIYPiM6yeO0HH').then(
            (result) => {
                setShowSuccess(true);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            },
            (error) => {
                console.error(error);
                setShowError(true);
            }
        );
    };

    return (
        <>
            <HeroSection />

            <section className='bg-white dark:bg-darkMainBlue pt-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-[800px] mx-auto'>
                    {/* Message Form */}
                    <div className='relative bg-white p-4 w-[400px] dark:bg-darkMainBlueLight rounded-md shadow-lg shadow-mainBlack/20 dark:shadow-mainBlue/20 border-[1px] border-mainGray/50 fade-in-right flex flex-col'>
                        <h1 className='text-mainBlack dark:text-white font-semibold text-xl mb-1'>Send a Message</h1>
                        <p className='text-mainGray dark:text-white/80 text-xs'>Fill out the form below and I'll get back to you as soon as possible.</p>
                        {/* Success & Error Messages */}
                        {(showSuccess || showError) && (
                            <div className='absolute top-[80px] left-1/2 -translate-x-1/2 text-xs '>
                                <p className={`${showSuccess ? 'text-green-500' : 'text-red-600'} text-center`}>{showSuccess ? 'Message sent successfully!' : `Error sending message.`}</p>
                            </div>
                        )}
                        <form className='flex flex-col mt-4 space-y-3 flex-1' onSubmit={sendEmail}>
                            {/* Name */}
                            <div className='flex flex-col'>
                                <label htmlFor='name' className='text-mainBlack dark:text-white font-medium text-sm pb-1'>
                                    Name
                                </label>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    required
                                    placeholder='Your name'
                                    className='bg-transparent border border-mainGray/50 dark:border-mainBlue/50 rounded-md px-3 py-2 text-sm text-mainBlack dark:text-white placeholder:text-mainGray dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-mainBlue transition'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Email */}
                            <div className='flex flex-col'>
                                <label htmlFor='email' className='text-mainBlack dark:text-white font-medium text-sm pb-1'>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    required
                                    placeholder='you@example.com'
                                    className='bg-transparent border border-mainGray/50 dark:border-mainBlue/50 rounded-md px-3 py-2 text-sm text-mainBlack dark:text-white placeholder:text-mainGray dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-mainBlue transition'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Subject */}
                            <div className='flex flex-col'>
                                <label htmlFor='subject' className='text-mainBlack dark:text-white font-medium text-sm pb-1'>
                                    Subject
                                </label>
                                <input
                                    id='subject'
                                    name='subject'
                                    type='text'
                                    required
                                    placeholder='Subject'
                                    className='bg-transparent border border-mainGray/50 dark:border-mainBlue/50 rounded-md px-3 py-2 text-sm text-mainBlack dark:text-white placeholder:text-mainGray dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-mainBlue transition'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            {/* Message */}
                            <div className='flex flex-col flex-1'>
                                <label htmlFor='message' className='text-mainBlack dark:text-white font-medium text-sm pb-1'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    required
                                    placeholder='Your message'
                                    className='bg-transparent border border-mainGray/50 dark:border-mainBlue/50 rounded-md px-3 py-2 text-sm text-mainBlack dark:text-white placeholder:text-mainGray dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-mainBlue resize-none transition h-full'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            {/* Submit Button */}
                            <button type='submit' className='bg-mainBlue text-white rounded-md px-4 py-2 mt-2 hover:bg-mainBlue/80 transition-colors duration-200 text-sm font-medium'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className='flex flex-col gap-3 w-[400px] fade-in-left'>
                        {/* Contact Information Box */}
                        <div className='bg-white dark:bg-darkMainBlueLight rounded-md shadow-lg shadow-mainBlack/20 dark:shadow-mainBlue/20 border-[1px] border-mainGray/50 p-4'>
                            <h2 className='text-mainBlack dark:text-white font-semibold text-xl'>Contact Information</h2>
                            <p className='text-mainGray dark:text-white/80 text-xs mt-1'>Feel free to reach out through any of these channels.</p>
                            <div className='flex flex-col mt-4 space-y-4'>
                                {/* Email */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <MdOutlineMailOutline size={23} className='text-mainBlue' />
                                        <h1 className='text-mainBlack dark:text-white text-md'>Email</h1>
                                    </div>
                                    <h1
                                        className='text-mainGray inline dark:text-white/80 text-xs mt-1 cursor-pointer hover:text-mainBlue transition duration-200 pl-[31px]'
                                        onClick={() => window.open('mailto:marshnickol101@gmail.com', '_blank')}
                                    >
                                        marshnickol101@gmail.com
                                    </h1>
                                </div>
                                {/* LinkedIn */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <LuLinkedin size={23} className='text-mainBlue' />
                                        <h1 className='text-mainBlack inline dark:text-white text-md'>LinkedIn</h1>
                                    </div>
                                    <h1
                                        className='text-mainGray dark:text-white/80 text-xs mt-1 cursor-pointer hover:text-mainBlue transition duration-200 pl-[31px]'
                                        onClick={() => window.open('https://www.linkedin.com/in/marshall-nickolauson-3a7b04274/', '_blank')}
                                    >
                                        linkedin.com/in/marshall-nickolauson
                                    </h1>
                                </div>
                                {/* GitHub */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <FiGithub size={23} className='text-mainBlue' />
                                        <h1 className='text-mainBlack inline dark:text-white text-md'>GitHub</h1>
                                    </div>
                                    <h1
                                        className='text-mainGray dark:text-white/80 text-xs mt-1 cursor-pointer hover:text-mainBlue transition duration-200 pl-[31px]'
                                        onClick={() => window.open('https://github.com/MarshallNickolauson', '_blank')}
                                    >
                                        github.com/MarshallNickolauson
                                    </h1>
                                </div>
                                {/* Location */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <SlLocationPin size={23} className='text-mainBlue' />
                                        <h1 className='text-mainBlack inline dark:text-white text-md'>Location</h1>
                                    </div>
                                    <h1
                                        className='text-mainGray dark:text-white/80 text-xs mt-1 cursor-pointer hover:text-mainBlue transition duration-200 pl-[31px]'
                                        onClick={() => window.open('https://i.kym-cdn.com/photos/images/original/002/103/969/840.png', '_blank')}
                                    >
                                        Reveal Address
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Availability Box */}
                        <div className='bg-white dark:bg-darkMainBlueLight rounded-md shadow-lg shadow-mainBlack/20 dark:shadow-mainBlue/20 border-[1px] border-mainGray/50 p-4'>
                            <h2 className='text-mainBlack dark:text-white font-semibold text-xl'>Availability</h2>
                            <p className='text-mainGray dark:text-white/80 text-xs mt-1'>
                                I'm currently available for <strong>small</strong> freelance work and new opportunities. My typical response time is within 24 hours.
                            </p>
                            <div className='flex items-center gap-2 mt-4'>
                                <FaCircle className='text-green-500' size={8} />
                                <p className='text-sm text-mainBlack dark:text-white font-medium'>Available for new projects</p>
                            </div>
                            <div className='flex items-start gap-3 mt-4'>
                                <FiCalendar className='text-mainBlue mt-1' size={23} />
                                <p className='text-mainBlack dark:text-white font-semibold text-sm'>Current Schedule</p>
                            </div>
                            <p className='text-xs pl-[35px] text-mainGray dark:text-white/70'>Producing web apps until August, 2025, then starting up studies again at Colorado Boulder for MSCS.</p>
                            <div className='flex items-start gap-3 mt-4'>
                                <FiClock className='text-mainBlue mt-1' size={23} />
                                <p className='text-mainBlack dark:text-white font-semibold text-sm'>Office Hours</p>
                            </div>
                            <p className='text-xs pl-[35px] text-mainGray dark:text-white/70'>Mon, Tue, Thu, Fri, 5pm - 9pm EST</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactScreen;
