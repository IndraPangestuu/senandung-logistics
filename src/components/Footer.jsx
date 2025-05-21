import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Perusahaan */}
        <div>
          <h3 className="text-xl font-semibold mb-4">PT Senandung Melodi Sejahtera</h3>
          <p className="text-sm">Layanan logistik terpercaya dengan jangkauan nasional dan internasional.</p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm">
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
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-200"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-200"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-white mt-10 border-t border-white/30 pt-4">
        © {new Date().getFullYear()} PT Senandung Melodi Sejahtera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
