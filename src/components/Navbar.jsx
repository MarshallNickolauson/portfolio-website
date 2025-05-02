import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuMoon } from 'react-icons/lu';
import { MdOutlineWbSunny } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const location = useLocation();
    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <nav className={`fixed w-full z-50 py-4 backdrop-blur-2xl border-b-[1px] border-mainBlue/10 dark:border-mainBlack/50 bg-white/60 dark:bg-black/30 transition-colors duration-300`}>
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
                                    className={`hover:text-mainBlue font-semibold transition-colors duration-200 text-md ${
                                        location.pathname === path ? 'text-mainBlue' : 'text-mainGrayDark dark:text-white dark:hover:text-mainBlue'
                                    }`}
                                >
                                    {names[i]}
                                </Link>
                            );
                        })}
                        {darkMode ? (
                            <MdOutlineWbSunny className='text-white cursor-pointer hover:text-mainBlue' size={20} onClick={toggleTheme} />
                        ) : (
                            <LuMoon className='text-mainBlack cursor-pointer hover:text-mainBlue' size={20} onClick={toggleTheme} />
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
