import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-white text-6xl" />,
    text: (
      <>
        Jalan Gunung Sahari 1, Blok B No.31 Lt. LG, <br />
        Jakarta Utara, Daerah Khusus Ibukota, <br />
        Jakarta-14420
      </>
    ),
  },
  {
    icon: <FaWhatsapp className="text-white text-6xl" />,
    text: (
      <>
        0851-6118-7089 (Sendy) <br />
        0851-7978-6991 (Yonathan)
      </>
    ),
  },
  {
    icon: <FaEnvelope className="text-white text-6xl" />,
    text: "pt.senandungmelodisejahtera@gmail.com",
  },
];

const Section1 = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 text-center">
      <motion.h2
        className="text-xl md:text-3xl font-bold text-black mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Nikmati kemudahan konsultasi dan transaksi dengan menghubungi kami.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg p-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-orange-500 rounded-full w-25 h-25 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <p className="text-base text-justify font-semibold text-gray-800 leading-relaxed break-all">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section1;