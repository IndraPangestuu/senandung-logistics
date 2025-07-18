import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/hero_img/hero2.jpg';
import Footer from '../components/Footer'
import Section1 from '../content/AboutUs/section1';
import Section2 from '../content/AboutUs/section2';
import Section3 from '../content/AboutUs/section3';
import TempInactiveSection from '../components/TempInactiveSection';

function AboutUs() {
  return (
    <>
      <Navbar />
      <HeroSection
        imageSrc={heroImage}
        title="About Us"
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
      <TempInactiveSection>
        <Section1 />
        <Section2 />
        <Section3 />
      </TempInactiveSection>
      <Footer />
    </>
  );
}

export default AboutUs;
