import React from 'react';
import { motion } from "framer-motion";

const HeroSection = ({ imageSrc, title, subTitle, height = "h-[90vh]", textSize = '' }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className={`relative w-full ${height}`}>
        {/* Background Image */}
        <img
          src={imageSrc}
          alt="Kontainer Logistik"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1
            className="text-white text-[7vw] md:text-5xl font-bold text-center leading-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {title}
            </motion.span>

            <motion.span
              className={`${textSize} block`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {subTitle}
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;