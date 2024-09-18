import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logo2.png';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white p-4  flex justify-between items-center w-full">
            {/* Logo Section */}
            <div className="flex items-center h-12 w-auto space-x-4">
                <img
                    src={logo} // Replace with actual path
                    alt="Green n' Bean Logo"
                    className="w-24 cursor-pointer"
                />
                <h1 className="text-xl font-semibold text-green-700">Green N Bean Coffee</h1>
            </div>

            {/* Menu Links - Desktop */}
            <nav className="hidden md:flex space-x-6">
                <Link to="/home" className="text-gray-700 font-bold transition-colors hover:text-green-600">
                    Home
                </Link>
                <Link to="/menu" className="text-gray-700 font-bold transition-colors hover:text-green-600">
                    Menu
                </Link>
                <Link to="/about" className="text-gray-700 font-bold transition-colors hover:text-green-600">
                    About Us
                </Link>
                <Link to="/contact" className="text-gray-700 font-medium transition-colors hover:text-green-600">
                    Contact
                </Link>
            </nav>

            {/* Hamburger Menu - Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                    {/* Hamburger Icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Toggled) */}
            {isOpen && (
                <nav className="absolute shadow-md shadow-emerald-400 top-28 left-0 w-full bg-white flex flex-col items-center  z-10">
                    <Link
                        to="/home"
                        className="block py-2 text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        className="block py-2 text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className="block py-2 text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="block py-2 text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;