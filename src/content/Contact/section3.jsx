import React from "react";
import { motion } from 'framer-motion';

const Section3 = () => {
  return (
    <section className="bg-[#b5b2b1] font-roboto mt-20">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-end">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl w-full lg:w-[550px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold text-gray-800 mb-1">
              <span className="text-blue-900">Know the price</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-6">
              Get A Free Quote
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Your Name', 'Email Address',
                'Phone Number', 'Subject',
                'Pickup City', 'Delivery City',
                'Freight type', 'Incoterms'
              ].map((ph, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={ph}
                  className="transition-all duration-200 border border-gray-300 rounded-md focus:border-amber-500 focus:outline-none p-3 shadow-sm bg-white"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4">
              {['Width', 'Height', 'Length', 'Weight'].map((ph, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={ph}
                  className="transition-all duration-200 border border-gray-300 rounded-md focus:border-amber-500 focus:outline-none p-3 shadow-sm bg-white"
                />
              ))}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-orange-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all w-full"
            >
              Send Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section3;