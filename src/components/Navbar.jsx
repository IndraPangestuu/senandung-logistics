import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_senandung/logo_mendatar_senandung.png';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCog, FaPhone } from 'react-icons/fa';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setIsDropdownOpen(false); // Close dropdown when mobile menu toggles
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
    setIsHover(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, [handleScroll, handleClickOutside]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`backdrop-blur-md bg-white/70 shadow-2xl z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-5'
      } rounded-b-2xl`}
    >
      <div className="px-2 lg:container mx-auto flex justify-between items-center">
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
        <ul className="hidden md:flex text-md lg:text-lg space-x-2 font-medium">
          <motion.li whileHover={{ scale: 1.05, y: -2 }}>
            <Link to="/" className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:shadow-lg transition-all">
              <FaHome className="mr-2" /> Home
            </Link>
          </motion.li>

          <motion.li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <button
              className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:shadow-lg transition-all"
              onClick={() => {if (!isHover) setIsDropdownOpen(!isDropdownOpen); setIsHover(false);}}
            >
              <FaCog className="mr-2" /> Services
              <FiChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 mt-2 bg-white/90 backdrop-blur-md border-b-4 border-orange-500 shadow-xl z-30 w-48 rounded-xl overflow-hidden"
              >
                <li>
                  <Link
                    to="/services/AirFreight"
                    className="block px-4 py-3 hover:bg-orange-100 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/SeaFreight"
                    className="block px-4 py-3 hover:bg-orange-100 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sea Freight
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/DoorToDoor"
                    className="block px-4 py-3 hover:bg-orange-100 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Door to Door
                  </Link>
                </li>
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
          className="md:hidden mr-10 text-gray-900 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={navRef}>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden p-4 space-y-2"
          >
            <li className='border-b border-gray-400'>
              <Link
                to="/"
                className="flex items-center hover:text-orange-500 transition py-3"
                onClick={closeMobileMenu}
              >
                <FaHome className="mr-2"/> Home
              </Link>
            </li>

            <li className='border-b border-gray-400'>
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between hover:text-orange-500 py-3 text-left"
                aria-expanded={isDropdownOpen}
              >
                <span className="flex items-center">
                  <FaCog className="mr-2" /> Services
                </span>
                <FiChevronRight className={`transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-6 mt-2 space-y-2 pb-2 overflow-hidden"
                >
                  <li>
                    <Link
                      to="/services/AirFreight"
                      className="hover:text-orange-500 block py-2 transition"
                      onClick={closeMobileMenu}
                    >
                      Air Freight
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/AirFreight"
                      className="hover:text-orange-500 block py-2 transition"
                      onClick={closeMobileMenu}
                    >
                      Sea Freight
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/AirFreight"
                      className="hover:text-orange-500 block py-2 transition"
                      onClick={closeMobileMenu}
                    >
                      Door To Door
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>

            <li className='border-b border-gray-400'>
              <Link
                to="/about"
                className="flex items-center hover:text-orange-500 py-3 transition"
                onClick={closeMobileMenu}
              >
                <FaInfoCircle className="mr-2" /> About Us
              </Link>
            </li>

            <li className='border-b border-gray-400'>
              <Link
                to="/contact"
                className="flex items-center hover:text-orange-500 py-3 transition"
                onClick={closeMobileMenu}
              >
                <FaPhone className="mr-2" /> Contact Us
              </Link>
            </li>
          </motion.ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;