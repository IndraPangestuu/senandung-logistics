import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo_senandung/logo_senandung.png";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Section1 = () => {
  return (
    <motion.div
      className="bg-white text-gray-800 p-6 md:py-16 md:px-10 font-sans max-w-6xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Logo dan Nama Perusahaan */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={logo}
          alt="Logo PT Senandung Melodi Sejahtera"
          className="w-12 h-12 md:w-20 md:h-20 bg-transparent"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600 leading-8">SENANDUNG</h1>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 leading-8">MELODI SEJAHTERA</h2>
        </div>
      </motion.div>

      {/* Grid: Deskripsi dan Tagline */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium text-justify">
          PT Senandung Melodi Sejahtera adalah perusahaan penyedia jasa pengurusan impor (freight forwarding)
          yang telah berdiri sejak tahun 2022 dan berbasis di Jakarta, Indonesia. Kami menawarkan solusi impor
          yang terpercaya melalui jalur laut dan udara, serta menangani seluruh proses dan dokumen kepabeanan
          (PPJK) secara cepat, tepat, dan efisien.
        </p>

        <div className="text-center md:text-left pl-6 md:pl-20">
          <p className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
            Your Trusted<br />
            Partner in <span className="text-orange-500">Global<br />Trade and Logistics</span>
          </p>
        </div>
      </motion.div>

      {/* Cakupan Layanan */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-left sm:text-center text-xl md:text-2xl font-bold text-blue-900 mb-6">
          Cakupan layanan PT. Senandung Melodi Sejahtera
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 px-4 md:px-6 text-blue-900 text-sm max-w-4xl mx-auto">
          {[
            ["Pengurusan dokumen kepabeanan", "Proses customs clearance", "Layanan all-in-one"],
            ["Pengiriman door-to-door", "Jasa undername", "Pengiriman barang ke seluruh Indonesia"],
          ].map((group, groupIndex) => (
            <ul key={groupIndex} className="list-disc list-inside space-y-2 text-base md:text-lg pl-4">
              {group.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i + groupIndex * group.length}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="font-semibold">{item}</span>
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Section1;