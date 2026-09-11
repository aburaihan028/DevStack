import { Link, useLocation } from 'react-router';
import Logo from '../assets/logo-text.png';
import { IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const location = useLocation();
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="h-17.5 flex justify-between items-center font-plus border-b-2 border-[#F1F5F9]">
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <IoMenuOutline
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="size-8"
                />
            </div>
            {/* Mobile Menu */}

            <div
                className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95vw] h-[50vh] bg-amber-600 text-base flex flex-col gap-y-3.5 md:hidden font-medium text-gray-800 transition-all duration-500 ease-in-out p-8 ${isMenuOpen ? 'top-16' : 'top-200'} font-plus text-white`}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <IoMdClose />
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            {/* Logo */}
            <Link to={'/'}>
                <img src={Logo} alt="Logo" className="ms-2.5" />
            </Link>
            {/* Desktop Navbar */}
            <ul className="hidden md:flex justify-center items-center gap-7">
                {navLinks.map((nav) => (
                    <Link
                        className={`${location.pathname === nav.path && 'text-[#DB2777]'} text-[#475569] `}
                        key={nav.name}
                        to={nav.path}
                    >
                        {nav.name}
                    </Link>
                ))}
            </ul>
            {/* Right Button */}
            <div className="flex justify-center items-center gap-x-5">
                <button className="text-[#334155] text-[14px] font-bold md:font-medium cursor-pointer ">
                    Sign In
                </button>
                <button className="py-2.5 px-5 bg-[#D91B7E] text-white font-semibold text-[14px] rounded-full cursor-pointer">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
