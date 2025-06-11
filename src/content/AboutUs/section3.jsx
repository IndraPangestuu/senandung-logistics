import React from "react";
import iconAsia from "../AboutUs/icon/asia.png"; // Ganti dengan path ikon yang sesuai
import iconIndonesia from "../AboutUs/icon/indonesia.png";
import icon24Hours from "../AboutUs/icon/24hours.png";

const section3 = () => {
  const commitments = [
    {
      icon: iconAsia,
      title: "Agen Impor Tersebar di Seluruh Asia",
      description: "Impor barang dengan efisien dari berbagai negara.",
    },
    {
      icon: iconIndonesia,
      title: "Pengiriman Ke Seluruh Indonesia",
      description: "Pengiriman domestik dengan cepat dan harga kompetitif.",
    },
    {
      icon: icon24Hours,
      title: "Layanan Chat dan Konsultasi 24 jam",
      description: "Customer service selalu siap menjawab pertanyaan Anda.",
    },
  ];

  return (
    <div className="bg-white py-14 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">Our Commitment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {commitments.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg p-10 flex flex-col items-center text-center"
          >
            <img src={item.icon} alt={item.title} className="w-20 h-25 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default section3;
