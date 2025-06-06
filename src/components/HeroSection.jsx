import React from 'react';

const HeroSection = ({ imageSrc, title, subTitle, height = "h-[90vh]", textSize = ''}) => {
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
          <h1 className="text-white text-[7vw] md:text-5xl font-bold text-center leading-tight">
            <span className='block'>{title}</span>
            <span className={`${textSize} block`}>{subTitle}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
