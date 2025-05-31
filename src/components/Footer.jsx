import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const footer = () => {
  return (
    <footer className="bg-[#0C2D57] px-4 md:px-12 pt-12 pb-6">
      <div className="max-w-2xl flex flex-col md:flex-row justify-between gap-12 text-white text-base">
        {/* Alamat & Kontak */}
        <div className="flex-1 space-y-4 text-left">
          <div className="flex items-start gap-3">
            <MapPin size={24} className="mt-1" />
            <p className="break-words">
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
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Links</h2>
          <p>Home</p>
          <p>Services</p>
          <p>Contact</p>
        </div>

        {/* Layanan */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Services</h2>
          <p>Air Freight</p>
          <p>Sea Freight</p>
          <p>Door to Door</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-40 border-t border-white/30 pt-8 text-center text-white/50 text-sm">
        <p className="leading-tight px-2">
          Copyright ©2025 PT Senandung Melodi Sejahtera. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;