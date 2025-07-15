import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo_senandung/logo_senandung.png";
import containerImg1 from "../../assets/icon/container1.jpg";
import containerImg2 from "../../assets/icon/container2.jpg";

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="text-gray-800 px-4 py-10 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
      {/* KIRI: Judul dan Gambar Kontainer */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-orange-500 font-semibold mb-2 text-sm md:text-base">Frequently Asked Questions</p>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug mb-6 break-words">
          Dynamic & Adaptive Transport Solutions
        </h2>

        <div className="relative w-full max-w-xs md:max-w-xs lg:max-w-sm mx-auto overflow-hidden">
          <img src={containerImg1} alt="Kontainer" className="rounded-md mb-4 w-full max-w-full" />
          <img
            src={containerImg2}
            alt="Kontainer 2"
            className="rounded-md absolute bottom-[-10px] right-[-10px] md:right-[-20px] lg:right-[-30px] w-32 md:w-40 lg:w-52 shadow-md max-w-full"
          />
        </div>
      </motion.div>

      {/* KANAN: Logo dan Visi/Misi */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-sm md:text-base flex flex-col md:items-center md:justify-center text-left md:text-center max-w-full px-[8%] md:px-0"
      >
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo PT Senandung Melodi Sejahtera" className="w-18 h-18 md:w-20 md:h-20 max-w-full" />
        </div>

        <div className="flex justify-center space-x-4 md:space-x-6 border-b border-gray-300 pb-2 mb-4 text-xs md:text-sm font-semibold overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("vision")}
            className={`pb-1 transition-colors text-base md:text-lg ${
              activeTab === "vision"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-900"
            }`}
          >
            Our Vision
          </button>
          <button
            onClick={() => setActiveTab("mission")}
            className={`pb-1 transition-colors text-base md:text-lg ${
              activeTab === "mission"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-900"
            }`}
          >
            Our Mission
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 leading-relaxed text-justify md:text-center text-base md:text-xl break-words max-w-full"
          >
            {activeTab === "vision" ? (
              <>
                Menjadikan <span className="font-medium">PT. Senandung Melodi Sejahtera</span> sebagai Forwarder pilihan utama dan terpercaya bagi pelanggan dalam pengelolaan dokumen impor.
              </>
            ) : (
              <>
                Memberikan pelayanan terbaik, cepat, dan profesional dalam pengurusan dokumen impor serta membangun hubungan jangka panjang dengan mitra bisnis.
              </>
            )}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Section2;