import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <section id="location" className="py-10 px-4 md:px-20 bg-white">
      <motion.div
        className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3}}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9406350336226!2d106.82908177620949!3d-6.138677960183371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a212a030b2a3f%3A0xa7d16fa5c6186b19!2sPT.%20SENANDUNG%20MELODI%20SEJAHTERA!5e0!3m2!1sen!2sid!4v1752485343214!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi PT Senandung Melodi"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Section2;