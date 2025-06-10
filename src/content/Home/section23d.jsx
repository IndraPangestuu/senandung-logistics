import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import air from './icon/Pesawat.png';
import sea from './icon/Kapal.png';
import door from './icon/Truck.png';

const services = [
  {
    image: air,
    title: 'Air Freight',
    desc: 'Air Freight atau import barang melalui udara sangat ideal untuk memenuhi kebutuhan mendesak dan butuh pemenuhan cepat.',
    href: '/services/air-freight',
  },
  {
    image: sea,
    title: 'Sea Freight',
    desc: 'Sea Freight atau pengiriman barang melalui laut sangat ideal untuk barang berkapasitas besar dan biaya yang lebih murah.',
    href: '/services/sea-freight',
  },
  {
    image: door,
    title: 'Door to Door',
    desc: 'Layanan Door to Door yaitu layanan pengiriman barang dengan sistem EX WORKS, FOB, CNF, CIF, dari seluruh negara sampai ke alamat penerima.',
    href: '/services/door-to-door',
  },
];

const Section2 = () => {
  return (
    <section className="py-20 px-4 text-center max-w-7xl mx-auto font-roboto bg-[#F9FAFB]">
      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">Our Service</h2>
        <p className="text-xl md:text-2xl font-medium mt-2 text-gray-800">
          Connecting Your <span className="text-orange-500 font-semibold">Product</span> with <br />
          Its Perfect <span className="text-orange-500 font-semibold">Destination</span>
        </p>
      </motion.div>

      {/* Kartu layanan */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:scale-105 hover:rotate-[0.3deg] hover:shadow-2xl"
            initial={{ opacity: 0, y: 50, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
              perspective: 1000,
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="mx-auto h-24 mb-4 transition-transform hover:scale-110"
              whileHover={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-lg font-bold mb-2 text-gray-800">{service.title}</h3>
            <hr className="border-t border-gray-300 mb-4" />
            <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-end"
            >
              <Link
                to={service.href}
                className="text-orange-500 text-sm font-medium hover:underline transition-all duration-200"
              >
                Read More →
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
