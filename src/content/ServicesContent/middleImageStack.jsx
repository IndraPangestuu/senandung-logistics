import React from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/content_img/planebox1.jpg';
import img2 from '../../assets/content_img/planebox2.jpg';

const variantImage1 = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const variantImage2 = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
  }
};

const MiddleImageStack = () => {
  return (
    <div className="flex md:hidden flex-col items-center justify-center gap-4 my-10">
      <motion.img
        src={img1}
        alt="Planebox1"
        className="w-[180px] h-[250px] object-cover rounded-xl shadow-lg"
        variants={variantImage1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
      />
      <motion.img
        src={img2}
        alt="Planebox2"
        className="w-[220px] h-[130px] object-cover rounded-xl shadow-lg -mt-10 ml-16"
        variants={variantImage2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
      />
    </div>
  );
};

export default MiddleImageStack;