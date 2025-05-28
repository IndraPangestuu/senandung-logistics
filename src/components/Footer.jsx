import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-blue-950 text-white py-10 px-4 md:px-10 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Perusahaan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">PT Senandung Melodi Sejahtera</h3>
          <p className="text-sm">Layanan logistik terpercaya dengan jangkauan nasional dan internasional.</p>
        </motion.div>

        {/* Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Jl. Contoh No. 123, Jakarta
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +62 812 3456 7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@senandungmelodi.co.id
            </li>
          </ul>
        </motion.div>

        {/* Sosial Media */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h4 className="text-lg font-semibold mb-8">Ikuti Kami</h4>
          <div dir="rtl">
            <div className="ps-30 flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors duration-300 ease-in-out" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-300 ease-in-out" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-300 ease-in-out" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center text-xs text-white mt-10 border-t border-white/30 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        © {new Date().getFullYear()} PT Senandung Melodi Sejahtera. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
