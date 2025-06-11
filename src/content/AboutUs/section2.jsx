import React, { useState } from "react";
import logo from "../AboutUs/icon/logo_senandung.png"; // Ganti dengan path logo kamu
import containerImg1 from "../AboutUs/icon/container1.jpg"; // Ganti dengan path gambar
import containerImg2 from "../AboutUs/icon/container2.jpg"; // Ganti juga

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="bg-white text-gray-800 px-6 py-10 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      
      {/* KIRI: Judul dan Gambar Kontainer */}
      <div>
        <p className="text-orange-500 font-semibold mb-2">Frequently Asked Questions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug mb-6">
          Dynamic & Adaptive <br />
          Transport Solutions
        </h2>

        {/* Gambar kontainer */}
        <div className="relative w-full max-w-sm">
          <img src={containerImg1} alt="Kontainer" className="rounded-md mb-4" />
          <img
            src={containerImg2}
            alt="Kontainer 2"
            className="rounded-md absolute bottom-[-10px] right-[-40px] w-60  shadow-md"
          />
        </div>
      </div>

      {/* KANAN: Logo dan Visi/Misi */}
      <div className="text-sm md:text-base">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo PT Senandung Melodi Sejahtera" className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b border-gray-300 pb-1 mb-4 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("vision")}
            className={`pb-1 transition-colors text-lg ${
              activeTab === "vision"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-900"
            }`}
          >
            Our Vission
          </button>
          <button
            onClick={() => setActiveTab("mission")}
            className={`pb-1 transition-colors text-lg ${
              activeTab === "mission"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-900"
            }`}
          >
            Our Mission
          </button>
        </div>

        {/* Konten */}
        <p className="text-gray-700 leading-relaxed text-justify text-2xl">
          {activeTab === "vision" ? (
            <>
              Menjadikan <span className="font-medium">PT. Senandung Melodi Sejahtera</span> sebagai Forwarder pilihan utama dan terpercaya bagi pelanggan dalam pengelolaan dokumen impor.
            </>
          ) : (
            <>
              Memberikan pelayanan terbaik, cepat, dan profesional dalam pengurusan dokumen impor serta membangun hubungan jangka panjang dengan mitra bisnis.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Section2;
