import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className='pt-12 bg-white dark:bg-darkMainBlue'>
            <div className='border-t border-mainGrayLight py-10'>
                <div className='flex items-center justify-between max-w-[1200px] mx-auto px-4'>
                    <h1 className='text-sm text-mainGrayDark dark:text-white/80'>&copy; {new Date().getFullYear()} Marshall Nickolauson</h1>
                    <div className='flex items-center space-x-4'>
                        <FiGithub
                            size={25}
                            className='text-mainGrayDark dark:text-white/80 hover:text-mainBlue dark:hover:text-mainBlue transition-all duration-200 cursor-pointer'
                            onClick={() => window.open('https://github.com/MarshallNickolauson', 'GitHub')}
                        />
                        <LuLinkedin
                            size={25}
                            className='text-mainGrayDark dark:text-white/80 hover:text-mainBlue dark:hover:text-mainBlue transition-all duration-200 cursor-pointer'
                            onClick={() => window.open('https://www.linkedin.com/in/marshall-nickolauson-3a7b04274/', 'LinkedIn')}
                        />
                        <MdOutlineMailOutline
                            size={25}
                            className='text-mainGrayDark dark:text-white/80 hover:text-mainBlue dark:hover:text-mainBlue transition-all duration-200 cursor-pointer'
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setTimeout(() => navigate('/contact'), 50);
                            }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
