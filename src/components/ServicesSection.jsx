import React from 'react';
import { Plane, Ship, Truck } from 'lucide-react';

const services = [
  {
    title: 'Air Freight',
    icon: <Plane className="h-10 w-10 text-orange-500" />,
    description:
      'Air Freight atau import barang melalui udara sangat ideal untuk memenuhi kebutuhan mendesak dan butuh pemenuhan cepat.',
  },
  {
    title: 'Sea Freight',
    icon: <Ship className="h-10 w-10 text-orange-500" />,
    description:
      'Sea Freight atau pengiriman barang melalui laut sangat ideal untuk barang berkapasitas besar dan biaya yang lebih murah.',
  },
  {
    title: 'Door to Door',
    icon: <Truck className="h-10 w-10 text-orange-500" />,
    description:
      'Layanan Door to Door yaitu layanan pengiriman barang dengan sistem EX WORKS, FOB, CNF, CIF dari seluruh negara sampai ke alamat penerima.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-4">Our Service</h2>
      <p className="text-lg text-gray-800 mb-10">
        Connecting <span className="font-semibold text-black">Your Product</span> with its Perfect{' '}
        <span className="text-orange-500 font-semibold">Destination</span>
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-left"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
            <p className="text-sm text-gray-700 mb-4 text-center">{service.description}</p>
            <p className="text-sm text-blue-600 text-right w-full mt-auto">Read More</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
