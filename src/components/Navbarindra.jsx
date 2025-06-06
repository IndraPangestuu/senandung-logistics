import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // lucide-react icons
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';


import logonavbar from '../assets/Logo/logo_mendatar_senandung.png';

const Navbarindra = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-[11vh] max-w-full bg-white shadow-lg">
      <div className=" mx-auto px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img src={logonavbar} href="../pages/HomePage" alt="Senandung Melodi Sejahtera Logo" className="h-12 items-center px-3" />

          {/* Desktop Menu */}
          <div className="hidden md:flex text-[#0C2D57] text-balance text-lg space-x-8 px-20 gap-4">
            <a href="/" className="hover:text-blue-500 font-medium">Home</a>
            <a href="/about" className="hover:text-blue-500 font-medium">About</a>
            <a href="#" className="hover:text-blue-500 font-medium">Services</a>
            <a href="#" className="hover:text-blue-500 font-medium">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-4 space-y-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarindra;
