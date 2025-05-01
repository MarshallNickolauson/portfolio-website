import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LuMoon } from "react-icons/lu";

const Navbar = () => {

    const location = useLocation();
    
    return (
        <nav className='bg-white py-4 fixed w-full'>
            <div className='flex justify-between items-center px-4 max-w-[1200px] mx-auto'>
                <Link to='/' className='text-mainBlue font-semibold text-lg'>Marshall Nickolauson</Link>
                <div className='flex space-x-5 items-center'>
                    {['/', '/about', '/skills', '/projects', '/contact'].map((path, i) => {
                        const names = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`hover:text-mainBlue font-semibold text-md ${location.pathname === path ? 'text-mainBlue' : 'text-mainGrayDark'}`}
                            >
                                {names[i]}
                            </Link>
                        )
                    })}
                    <LuMoon className='text-mainBlack cursor-pointer' size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
