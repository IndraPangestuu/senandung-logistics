import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/hero2.jpg';
import Footer from '../components/Footer'
import Section1 from '../content/AboutUs/section1';
import Section2 from '../content/AboutUs/section2';
import Section3 from '../content/AboutUs/section3';

function AboutUs() {
  return (
    <>
      <Navbar />
      <HeroSection
        imageSrc={heroImage}
        title="About"
        subTitle= {(
          <>
            <a href="/">Home</a>
            <span>{" > "}</span>
            <a href="/services">About</a>
          </>
        )}
        height='h-[70vh]'
        textSize='text-[2.5vw] sm:text-sm'
      />
      <div className="min-h-screen flex flex-col px-20 lg:px-20">
        <main className="flex-grow">
          <Section1 />
          <Section2 />
          <Section3 />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
