import React from "react";
import { motion } from "framer-motion";
import imgSection from '../../../assets/content_img/planebox1.jpg';
import logo from '../../../assets/logo_mendatar_senandung.png';

const Section1 = () => {
  return (
    <section className="relative container mx-auto px-8 mt-15 h-[580px]">
      <div className="flex h-full gap-12">
        {/* Gambar Kiri */}
        <motion.div
          className="flex-1 hidden md:flex items-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay:0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={imgSection}
            alt="Image-Section1"
            className="h-[420px] w-[290px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Logo dan Teks */}
        <motion.div
          className="flex-[3] flex flex-col pt-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <img src={logo} alt="Logo" className="w-[500px]" />
          </div>
          <div className="mt-8 text-justify text-[#505050] leading-relaxed text-lg">
            <p>
              PT. Senandung Melodi Sejahtera siap membantu Anda mengelola proses tersebut dengan efisien.
              Layanan Door To Door kami dirancang untuk memberikan solusi impor end-to-end, mulai dari pengurusan izin dan dokumentasi,
              pemeriksaan barang secara menyeluruh, hingga pengelolaan pajak dan bea cukai yang kompleks.
            </p>
            <br />
            <p>
              Layanan door-to-door PT. Senandung Melodi Sejahtera memudahkan pengiriman barang dari luar negeri langsung ke tujuan di Indonesia. Kami jemput barang dari lokasi asal (gudang, rumah, atau kantor) dan antar hingga ke alamat penerima. Semua proses—dari pengangkutan, dokumen ekspor-impor, hingga bea cukai—kami tangani sepenuhnya. Hemat waktu, praktis, dan barang tiba aman sesuai jadwal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;