import { Link } from 'react-router';
import Logo from '../assets/logo-text.png';

const Footer = () => {
    const linkSections = [
        {
            title: 'PRODUCT',
            links: ['Home', 'Technologies', 'Projects'],
        },
        {
            title: 'COMPANY',
            links: ['About', 'Contact', 'Careers'],
        },
        {
            title: 'LEGAL',
            links: ['Privacy Policy', 'Terms of Service'],
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500 font-plus">
                <div>
                    <img className="w-34 md:w-32" src={Logo} alt={Logo} />
                    <p className="max-w-102.5 mt-6">
                        Curated tools, technologies, and resources for
                        developers building modern software.
                    </p>

                    {/* Social Links */}
                    <ul className="flex gap-x-3.5 mt-4.5">
                        <li>
                            <Link
                                className="text-[#475569] hover:text-[#D91B7E] transition-all duration-200 font-semibold"
                                to={'/'}
                            >
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#475569] hover:text-[#D91B7E] transition-all duration-200 font-semibold"
                                to={'/'}
                            >
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#475569] hover:text-[#D91B7E] transition-all duration-200 font-semibold"
                                to={'/'}
                            >
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to="#"
                                            className="hover:underline transition"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between py-4">
                <p className="text-sm md:text-base text-gray-500/80">
                    © 2026 Dev Stack. All rights reserved.
                </p>
                <ul className="cursor-pointer flex gap-x-2.5">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </>
    );
};

export default Footer;
