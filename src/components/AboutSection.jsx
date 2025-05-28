import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section 
      className="py-16 bg-white px-4 md:px-10 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ahli <span className="text-orange-600">Impor-Ekspor</span> dan{' '}
            <span className="text-orange-600">Distribusi</span> untuk Seluruh Indonesia
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            PT SENANDUNG MELODI SEJAHTERA adalah perusahaan jasa pengurusan import
            (freight forwarding) yang berdiri sejak tahun 2022 dan berbasis di Jakarta, Indonesia.
            Kami menyediakan solusi import terpercaya melalui pengiriman laut dan udara,
            serta menangani seluruh kebutuhan dokumen impor (PPJK) dengan cepat dan tepat.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Dengan tim yang berpengalaman dan berdedikasi, kami berkomitmen memberikan layanan
            yang aman, efisien, dan profesional menjadikan kami mitra logistik andalan Anda di Indonesia.
            <span className="text-blue-600"> - Read More</span>
          </p>
        </motion.div>

        {/* Image Area */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src="/worker1.jpg"
            alt="Pekerja Logistik"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/worker2.jpg"
            alt="Gudang"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
