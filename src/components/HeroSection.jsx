import React from 'react';

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="full h-[90vh] w-full relative">
        {/* Background Image */}
        <img
          src="/hero.jpg"
          alt="Kontainer Logistik"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Percayakan Ekspor Impor <br /> Anda pada Ahlinya
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
