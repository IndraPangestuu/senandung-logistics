import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_mendatar_senandung.png';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCog, FaPhone } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`backdrop-blur-md bg-white/70 shadow-2xl z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      } rounded-b-2xl`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-14 w-auto max-h-20 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg space-x-6 font-medium">
          <motion.li whileHover={{ scale: 1.05, y: -2 }}>
            <Link to="/" className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:shadow-lg transition-all">
              <FaHome className="mr-2" /> Home
            </Link>
          </motion.li>

          <motion.li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="cursor-pointer flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:shadow-lg transition-all">
              <FaCog className="mr-2" /> Services <FiChevronDown className="ml-2" />
            </span>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 mt-2 bg-white/80 backdrop-blur-md border-b-4 border-orange-500 shadow-xl z-30 w-48 rounded-xl overflow-hidden"
              >
                <li><Link to="/services/AirFreight" className="block px-4 py-3 hover:bg-orange-100 transition">Air Freight</Link></li>
                <li><Link to="/services/SeaFreight" className="block px-4 py-3 hover:bg-orange-100 transition">Sea Freight</Link></li>
                <li><Link to="/services/DoortoDoor" className="block px-4 py-3 hover:bg-orange-100 transition">Door to Door</Link></li>
              </motion.ul>
            )}
          </motion.li>

          <motion.li whileHover={{ scale: 1.05, y: -2 }}>
            <Link to="/about" className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:shadow-lg transition-all">
              <FaInfoCircle className="mr-2" /> About Us
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05, y: -2 }}>
            <Link to="/contact" className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:shadow-lg transition-all">
              <FaPhone className="mr-2" /> Contact Us
            </Link>
          </motion.li>
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
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden bg-white/90 backdrop-blur p-4 space-y-4 border-t border-orange-400 shadow-lg rounded-b-2xl"
        >
          <li>
            <Link to="/" className="flex items-center hover:text-orange-500 transition">
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
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
