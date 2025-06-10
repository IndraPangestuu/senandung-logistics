import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Section1 from '../content/Home/section1';
import Section2 from '../content/Home/section2';
import Section3 from '../content/Home/section3';
import heroImage from '../assets/hero1.jpg';
import HeroSection from '../components/HeroSection';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <HeroSection
            imageSrc={heroImage}
            title="Percayakan Export Import"
            subTitle="Anda pada Ahlinya"
          />
          <Section1 />
          <Section2 />
          <Section3 />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
