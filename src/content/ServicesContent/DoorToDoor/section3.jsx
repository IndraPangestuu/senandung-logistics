import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Section3 = () => {
  return (
    <section className="container mx-auto mb-20 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-15 px-8">
        {/* Left Content - Fade + Slide + Scale */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: "all" }}
        >
          <h2 className="text-4xl font-bold text-[#0C2D57] md:leading-snug">
            Get the Best and Most Transparent Price Quote Today
          </h2>
          <p className="mt-3 text-[#505050] text-sm md:text-base">
            Solusi impor cepat, aman, dan legal dari titik asal hingga tujuan akhir.
            <a href="#" className="text-[#FF5722] font-semibold ml-1" download>
              Download PDF
            </a>
          </p>
        </motion.div>

        {/* Right Card - Zoom with Bounce Effect */}
        <motion.div
          className="bg-[#FF5722] text-white rounded-xl shadow-md p-6 w-[240px] h-[300px] text-center flex flex-col justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.3 }}
          viewport={{ once: true, amount: "all" }}
        >
          <p className="text-md">Need Help ?</p>
          <p className="font-bold text-xl mt-1 mb-3 leading-tight">
            Your Shipping <br /> Questions Answered
          </p>
          <div className="flex items-center justify-center gap-2 text-white text-md font-semibold mt-2">
            <FaWhatsapp size={20} />
            <span>0851-6118-7089</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;