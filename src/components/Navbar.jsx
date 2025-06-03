import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: lucide-react icons (npm install lucide-react)
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="px-20 mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <h3 className="text-orange-500 font-extrabold text-lg">SENANDUNG</h3>
          <h2 className="text-blue-900 font-semibold text-sm">MELODI SEJAHTERA</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-800 font-medium">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-orange-500 focus:outline-none"
            >
              Services ▾
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white shadow-lg mt-2 rounded-md py-2 w-40 text-sm animate-fadeIn">
                <li><Link to="/services#air-freight" className="block px-4 py-2 hover:bg-gray-100">Air Freight</Link></li>
                <li><Link to="/services#sea-freight" className="block px-4 py-2 hover:bg-gray-100">Sea Freight</Link></li>
                <li><Link to="/services#door-to-door" className="block px-4 py-2 hover:bg-gray-100">Door to Door</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 animate-slideDown bg-white shadow-md">
          <ul className="space-y-3 text-gray-800 font-medium">
            <li><Link to="/" className="block hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="block hover:text-orange-500">About</Link></li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-center hover:text-orange-500"
              >
                Services ▾
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 space-y-1 text-sm pl-4">
                  <li><Link to="/services#air-freight" className="block hover:text-orange-500">Air Freight</Link></li>
                  <li><Link to="/services#sea-freight" className="block hover:text-orange-500">Sea Freight</Link></li>
                  <li><Link to="/services#door-to-door" className="block hover:text-orange-500">Door to Door</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="block hover:text-orange-500">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
