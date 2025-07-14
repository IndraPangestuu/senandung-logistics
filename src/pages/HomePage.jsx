import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer3d';
import Section1 from '../content/Home/section13d';
import Section2 from '../content/Home/section23d';
import Section3 from '../content/Home/section33d';
import heroImage from '../assets/hero1.jpg';
import HeroSection from '../components/HeroSection';
import TempInactiveSection from '../components/TempInactiveSection';

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
          <TempInactiveSection>
            <Section1 />
            <Section2 />
            <Section3 />
          </TempInactiveSection>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
