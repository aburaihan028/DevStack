import { Link, useLocation } from 'react-router';
import Logo from '../assets/logo-text.png';
import { IoMenuOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const location = useLocation();
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // className="h-17.5 flex justify-between items-center font-plus border-b-2 border-[#F1F5F9]"
    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
                isScrolled
                    ? 'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4'
                    : 'py-4 md:py-6 '
            }`}
        >
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-1 text-gray-700 hover:text-black"
                >
                    <IoMenuOutline className="size-8" />
                </button>
            </div>
            {/* Overlay Mobile Click Menu Close */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
            {/* Mobile Menu */}
            <div
                className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95vw] h-[50vh] bg-amber-600 text-base flex flex-col gap-y-3.5 md:hidden font-medium text-gray-800 transition-all duration-500 ease-in-out p-8 ${
                    isMenuOpen
                        ? 'top-20 opacity-100 visible'
                        : '-top-full opacity-0 invisible'
                } font-plus text-white`}
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
            <ul className="hidden lg:flex justify-center items-center gap-7">
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
