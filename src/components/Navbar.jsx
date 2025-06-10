import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_mendatar_senandung.png';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCog, FaPhone } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    const timeout = setTimeout(() => setIsDropdownOpen(false), 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className={`bg-white border-t-1 shadow-sm z-30 fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto max-h-20 object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg space-x-8">
          <li>
            <Link to="/" className="flex items-center hover:text-orange-500 transition">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          <li className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <span className="cursor-pointer flex items-center hover:text-orange-500 transition">
              <FaCog className="mr-1" /> Services <FiChevronDown className="ml-2" />
            </span>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white border-b-4 border-orange-500 shadow-lg z-20 w-48 rounded-b">
                <li><Link to="/services/AirFreight" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">Air Freight</Link></li>
                <li><Link to="/services/SeaFreight" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">Sea Freight</Link></li>
                <li><Link to="/services/DoortoDoor" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">Door to Door</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" className="flex items-center hover:text-orange-500 transition">
              <FaInfoCircle className="mr-1" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center hover:text-orange-500 transition">
              <FaPhone className="mr-1" /> Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white border-t border-orange-500 p-4 space-y-3">
          <li>
            <Link to="/" className="flex items-center hover:text-orange-500">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center hover:text-orange-500"
            >
              <span><FaCog className="mr-2 inline" /> Services</span>
              <span>{isDropdownOpen ? '▼' : '▶'}</span>
            </button>
            {isDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li><Link to="/services/AirFreight" className="hover:text-orange-500 block">Air Freight</Link></li>
                <li><Link to="/services/SeaFreight" className="hover:text-orange-500 block">Sea Freight</Link></li>
                <li><Link to="/services/DoortoDoor" className="hover:text-orange-500 block">Door to Door</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" className="flex items-center hover:text-orange-500">
              <FaInfoCircle className="mr-2" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center hover:text-orange-500">
              <FaPhone className="mr-2" /> Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
