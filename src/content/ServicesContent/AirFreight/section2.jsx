import React from "react";
import { motion } from "framer-motion";
import imgSection2 from '../../../assets/content_img/planebox2.jpg';

const Section2 = () => {
  return (
    <section className="relative container mx-auto px-4 md:-mt-[1vw] pl-15">
      <div className="flex gap-12 items-start">
        {/* Gambar menumpuk */}
        <motion.div
          className="flex-1 hidden md:flex relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: "all" }}
        >
          <img
            src={imgSection2}
            alt="Image-Section2"
            className="w-[350px] h-[210px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Teks daftar keunggulan */}
        <motion.div
          className="flex-[2] flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0C2D57]">
            Why Choose <span className="text-[#0C2D57]">PT. Senandung Melodi Sejahtera</span> ?
          </h2>
          <ul className="list-disc pl-6 text-[#505050] leading-relaxed text-lg">
            <li>Layanan end-to-end</li>
            <li>Bebas repot urus bea cukai & pajak</li>
            <li>Jaringan global</li>
            <li>Real-time tracking</li>
            <li>Cocok untuk barang kecil, bernilai tinggi</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;