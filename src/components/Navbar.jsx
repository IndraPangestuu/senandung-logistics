import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_senandung/logo_mendatar_senandung.png';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCog, FaPhone } from 'react-icons/fa';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isBT, setIsBT] = useState(false);

  const lastScrollTop = useRef(window.scrollY);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const navRef = useRef(null);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setScrolled(currentScroll > 50);

    if (currentScroll !== lastScrollTop.current) {
      setTimeout(()=>{
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
        setIsBT(false);
        lastScrollTop.current = currentScroll;
      }, 100)
    }
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
      setIsBT(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setIsDropdownOpen(false); // Close dropdown when mobile menu toggles
  }, []);

  const toggleDropdown = useCallback(() => {
    setTimeout(() => {
      setIsDropdownOpen(prev => !prev);
    }, 100)
  }, []);

  const closeMobileMenu = useCallback(() => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }, 200);
  }, [setIsMobileMenuOpen]);

  // Handle link with delay before navigation
  const handleDelayedNav = (to) => {
    closeMobileMenu();
    setTimeout(() => {
      navigate(to);
    }, 200);
  };

  const handleClick = (e, navigasi = '/', closeMenu = false) => {
    e.preventDefault();
    setTimeout(() => {
      if (closeMenu) setIsDropdownOpen(false);
      navigate(navigasi);
    }, 200);
  };

  const handleMouseEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setTimeout(() => {
      setIsDropdownOpen(true);
    }, 100)
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setIsHover(false);
    }, 100);
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
            <Link
              to="/"
              className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:transition-all active:bg-orange-100 active:shadow-lg"
              onClick={(e) => handleClick(e)}>
              <FaHome className="mr-2" /> Home
            </Link>
          </motion.li>

          <motion.li
            ref={navRef}
            className="relative"
            onMouseEnter={() => {if (!isBT) handleMouseEnter()}}
            onMouseLeave={() => {if (!isBT) handleMouseLeave()}}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <button
              className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:transition-all active:bg-orange-100 active:shadow-lg"
              onClick={() => {
                if (!isHover) {
                  setTimeout(() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }, 100)
                  setIsHover(false);
                  setIsBT(!isBT);
                }
              }}
              disabled={isHover}
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
                    className="block px-4 py-3 hover:bg-orange-100 hover:transition active:bg-orange-100 active:shadow-lg"
                    onClick={(e) => {handleClick(e, navigasi="/services/SeaFreight", closeMenu=true)}}
                  >
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/SeaFreight"
                    className="block px-4 py-3 hover:bg-orange-100 hover:transition active:bg-orange-100 active:shadow-lg"
                    onClick={(e) => {handleClick(e, navigasi="/services/SeaFreight", closeMenu=true)}}>
                    Sea Freight
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/DoorToDoor"
                    className="block px-4 py-3 hover:bg-orange-100 hover:transition active:bg-orange-100 active:shadow-lg"
                    onClick={(e) => {handleClick(e, navigasi="/services/SeaFreight", closeMenu=true)}}>
                    Door to Door
                  </Link>
                </li>
              </motion.ul>
            )}
          </motion.li>

          <motion.li whileHover={{ scale: 1.05, y: -2 }}>
            <Link
              to="/about"
              className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:transition-all active:bg-orange-100 active:shadow-lg"
              onClick={(e) => handleClick(e, '/about')}>
              <FaInfoCircle className="mr-2" /> About Us
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05, y: -2 }}>
            <Link
              to="/contact"
              className="flex items-center px-4 py-2 rounded-xl hover:bg-orange-100 hover:transition-all active:bg-orange-100 active:shadow-lg"
              onClick={(e) => handleClick(e, '/contact')}>
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
          {/* Home */}
          <li className='border-b border-gray-400'>
            <button
              onClick={() => handleDelayedNav('/')}
              className="w-full text-left flex items-center py-3 transition-colors text-black active:text-orange-500"
            >
              <FaHome className="mr-2" /> Home
            </button>
          </li>

          {/* Services Dropdown */}
          <li className='border-b border-gray-400'>
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between transition-colors text-black active:text-orange-500 py-3 text-left"
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
                  <button
                    onClick={() => handleDelayedNav('/services/AirFreight')}
                    className="w-full text-left block py-2 transition-colors text-black active:text-orange-500"
                  >
                    Air Freight
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDelayedNav('/services/SeaFreight')}
                    className="w-full text-left block py-2 transition-colors text-black active:text-orange-500"
                  >
                    Sea Freight
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDelayedNav('/services/DoorToDoor')}
                    className="w-full text-left block py-2 transition-colors text-black active:text-orange-500"
                  >
                    Door To Door
                  </button>
                </li>
              </motion.ul>
            )}
          </li>

          {/* About */}
          <li className='border-b border-gray-400'>
            <button
              onClick={() => handleDelayedNav('/about')}
              className="w-full text-left flex items-center text-black active:text-orange-500 py-3 transition-colors"
            >
              <FaInfoCircle className="mr-2" /> About Us
            </button>
          </li>

          {/* Contact */}
          <li className='border-b border-gray-400'>
            <button
              onClick={() => handleDelayedNav('/contact')}
              className="w-full text-left flex items-center text-black active:text-orange-500 py-3 transition-colors"
            >
              <FaPhone className="mr-2" /> Contact Us
            </button>
          </li>
        </motion.ul>
      </div>
      )}
    </motion.nav>
  );
};

export default Navbar;