import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LuMoon } from 'react-icons/lu';
import { MdOutlineWbSunny } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const location = useLocation();
    const { darkMode, toggleTheme } = useTheme();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-white/60 dark:bg-gray-900 backdrop-blur-lg shadow-sm shadow-mainBlueLight' : 'bg-white dark:bg-gray-900'
            } py-4`}
        >
            <div className='flex justify-between items-center px-4 max-w-[1200px] mx-auto'>
                <Link to='/' className='text-mainBlue font-semibold text-lg'>
                    Marshall Nickolauson
                </Link>
                <div className='flex space-x-5 items-center'>
                    {['/', '/about', '/skills', '/projects', '/contact'].map((path, i) => {
                        const names = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`hover:text-mainBlue font-semibold transition-colors duration-200 text-md ${location.pathname === path ? 'text-mainBlue' : 'text-mainGrayDark'}`}
                            >
                                {names[i]}
                            </Link>
                        );
                    })}

                    {darkMode ? (
                        <MdOutlineWbSunny className='text-white cursor-pointer' size={20} onClick={toggleTheme} />
                    ) : (
                        <LuMoon className='text-mainBlack cursor-pointer' size={20} onClick={toggleTheme} />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
