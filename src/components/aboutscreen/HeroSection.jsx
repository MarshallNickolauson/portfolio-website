import pfp from '../../assets/img/pfp.png';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className='pt-[60px] bg-white dark:bg-darkMainBlue h-[580px] w-full'>
            <div className='flex justify-center pt-8'>
                <h1 className='text-3xl font-semibold bg-gradient-to-r from-mainBlue/80 to-mainBlueDark bg-clip-text text-transparent'>About Me</h1>
            </div>
            <div className='flex items-center pt-[50px] max-w-[1200px] mx-auto px-4'>
                <div className='w-1/3 flex justify-center'>
                    <img src={pfp} alt='Marshall Nickolauson PFP' className='w-[250px] h-full rounded-full border-[3px] border-mainBlue/50 shadow-md object-cover' />
                </div>
                <div className='w-2/3 flex flex-col items-start justify-center pl-[50px] space-y-4'>
                    <h1 className='text-3xl font-semibold text-mainBlack dark:text-white'>
                        Hello, I'm <span className='text-mainBlue'>Marshall.</span>
                    </h1>
                    <div className='flex flex-col text-md space-y-4 text-mainGray dark:text-white'>
                        <p>
                            I'm a passionate Full Stack Developer who loves making elegant, efficient, and user-friendly web applications. With over 3 years of hands-on experience, I've worked on a
                            range of projects — from personal experiments to complex container-based applications.
                        </p>
                        <p>
                            My journey in web development started with a curiosity about how technology can solve real-world problems. That curiosity drove me to pursue a degree in Computer Science,
                            where I'm currently building a strong foundation in programming principles and software architecture.
                        </p>
                        <p>
                            What excites me most about development is the constant learning and problem-solving. Every project brings new challenges and opportunities to grow, and I thrive in this
                            ever-evolving landscape of web technologies.
                        </p>
                        <div className='flex space-x-3 pt-2'>
                            <button className='bg-mainBlue text-white px-[20px] py-3 rounded-md hover:bg-transparent border-[1px] border-mainBlue hover:text-mainBlue dark:hover:text-white dark:hover:border-white transition-all duration-200' onClick={() => navigate('/contact')}>
                                <h1 className='flex items-center justify-center'>Get in Touch <FaArrowRight className='ml-2' /></h1>
                            </button>
                            <button className='bg-transparent px-[35px] text-mainBlue py-3 rounded-md border border-mainBlue dark:border-white dark:text-white hover:bg-mainBlue dark:hover:bg-mainBlue dark:hover:border-mainBlue hover:text-white transition duration-200' onClick={() => window.open('https://docs.google.com/document/d/1JkttniyEco43S85n2wKTBG6THwmV8ZMdJ2eAvO3bUnU/export?format=pdf', '_blank')}>
                                <h1 className='flex items-center justify-center'>Download Resume</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
