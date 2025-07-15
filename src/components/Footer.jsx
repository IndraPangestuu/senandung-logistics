import Tilt from 'react-parallax-tilt';

import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <div className="bg-[#0C2D57] h-fit px-4 md:px-12 pt-12 pb-6 text-white">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_0.5fr_1fr] gap-6 text-sm md:text-base">
                {/* Alamat & Kontak */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Contact Us</h3>
                    <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-1" />
                        <p className="break-words leading-relaxed">
                            Jalan Gunung Sahari 1, Blok B No.31 Lt. LG, Jakarta Utara,
                            Daerah Khusus Ibukota Jakarta 14420
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={16} />
                        <p>0851-6118-7089 / 0851-7978-6991</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail size={16} />
                        <p className="break-words">
                            pt.senandungmelodisejahtera@gmail.com
                        </p>
                    </div>
                </div>

                {/* Link Navigasi */}
                <div className="max-w-3xl grid gap-12 text-sm md:text-base">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-orange-500 transition-colors duration-200">Home</a></li>
                            <li><a href="/services" className="hover:text-orange-500 transition-colors duration-200">Services</a></li>
                            <li><a href="/about" className="hover:text-orange-500 transition-colors duration-200">About Us</a></li>
                            <li><a href="/contact" className="hover:text-orange-500 transition-colors duration-200">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Layanan */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Our Services</h3>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:text-orange-500 transition-colors duration-200">Air Freight</a></li>
                        <li><a href="" className="hover:text-orange-500 transition-colors duration-200">Sea Freight</a></li>
                        <li><a href="" className="hover:text-orange-500 transition-colors duration-200">Door to Door</a></li>
                    </ul>

                    {/* Media Sosial */}
                    <div className="flex space-x-4 mt-6">
                        <Tilt>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                                <Facebook size={20} />
                            </a>
                        </Tilt>
                        <Tilt>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                                <Instagram size={20} />
                            </a>
                        </Tilt>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 border-t border-white/30 pt-6 text-center text-white/50 text-xs md:text-sm">
                <p className="leading-tight">
                    Copyright © {new Date().getFullYear()} PT Senandung Melodi Sejahtera. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;