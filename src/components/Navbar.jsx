import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const hamburgerIconRef = useRef(null);
    const mobileMenu = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
        hamburgerIconRef.current.classList.remove('open');
        mobileMenu.current.classList.remove('opacity-100', 'hidden');
        mobileMenu.current.classList.add('hidden', 'opacity-0');
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && mobileMenu.current && !mobileMenu.current.contains(event.target) && !hamburgerIconRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        const handleScroll = () => {
            if (menuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpen]);

    const toggleHamburgerIcon = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            hamburgerIconRef.current.classList.add('open');
            mobileMenu.current.classList.remove('opacity-0', 'hidden');
            mobileMenu.current.classList.add('opacity-100');
        } else {
            hamburgerIconRef.current.classList.remove('open');
            mobileMenu.current.classList.remove('opacity-100');
            mobileMenu.current.classList.add('opacity-0', 'hidden');
        }
    };

    return (
        <div className='relative z-50 mt-3'>
            <nav className={`container mx-auto px-5 lg:px-0 py-2 flex justify-between items-center transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Logo */}
                <h1 className='font-roboto font-bold text-3xl text-mainOrange'>{"<MDN />"}</h1>

                {/* Desktop Menu */}
                <div className='hidden md:flex space-x-10'>
                    <a href='#skills' className='font-ropa text-white text-xl hover:underline'>Skills</a>
                    <a href='#projects' className='font-ropa text-white text-xl hover:underline'>Projects</a>
                    <a href='#resume' className='font-ropa text-white text-xl hover:underline'>Resume</a>
                    <a href='#contact' className='font-ropa text-white text-xl hover:underline'>Contact</a>
                </div>

                {/* Hamburger menu icon (small screens) */}
                <button
                    ref={hamburgerIconRef}
                    id="menu-btn"
                    className="block hamburger md:hidden focus:outline-none z-50"
                    onClick={toggleHamburgerIcon}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={mobileMenu}
                className={`fixed top-20 left-0 w-full py-6 bg-darkGrayBackground text-white flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100' : 'hidden opacity-0'}`}
            >
                <a href='#skills' className='font-ropa text-white text-2xl mb-6 hover:underline' onClick={toggleHamburgerIcon}>Skills</a>
                <a href='#projects' className='font-ropa text-white text-2xl mb-6 hover:underline' onClick={toggleHamburgerIcon}>Projects</a>
                <a href='#resume' className='font-ropa text-white text-2xl mb-6 hover:underline' onClick={toggleHamburgerIcon}>Resume</a>
                <a href='#contact' className='font-ropa text-white text-2xl hover:underline' onClick={toggleHamburgerIcon}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
