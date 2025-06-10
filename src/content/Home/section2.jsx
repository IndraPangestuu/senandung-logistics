import React from 'react';
import { Link } from 'react-router-dom';
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

const section2 = () => {
  return (
    <div className="py-16 px-4 text-center max-w-7xl mx-auto font-roboto">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500">Our Service</h2>
      <p className="text-xl md:text-2xl font-medium mt-2">
        Connecting Your <span className="text-orange-500 font-semibold">Product</span> with <br />
        Its Perfect <span className="text-orange-500 font-semibold">Destination</span>
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <img src={service.image} alt={service.title} className="mx-auto h-24 mb-4" />
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <hr className="border-t border-gray-300 mb-4" />
            <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
            <Link to={service.href} className="text-orange-500 text-sm font-medium self-end cursor-pointer hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default section2;
