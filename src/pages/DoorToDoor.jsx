import React from "react";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/hero_img/hero3.jpg';
import Section1 from "../content/ServicesContent/DoorToDoor/section1";
import Section2 from "../content/ServicesContent/DoorToDoor/section2";
import Section3 from "../content/ServicesContent/DoorToDoor/section3";
import MiddleImageStack from "../content/ServicesContent/middleImageStack";
import Footer from '../components/Footer'
import TempInactiveSection from '../components/TempInactiveSection';

function AirFreight() {
  return(
    <>
      <Navbar />
      <HeroSection
        imageSrc={heroImage}
        title="Door To Door"
        subTitle= {(
          <>
            <a href="/">Home</a>
            <span>{" > "}</span>
            <span>Services</span>
            <span>{" > "}</span>
            <a href="/services/AirFreight">DoorToDoor</a>
          </>
        )}
        height='h-[70vh]'
        textSize='text-[2.5vw] sm:text-sm'
      />
      <TempInactiveSection>
        <Section1 />
        <MiddleImageStack />
        <Section2 />
        <Section3 />
      </TempInactiveSection>
      <Footer />
    </>
  )
}

export default AirFreight;