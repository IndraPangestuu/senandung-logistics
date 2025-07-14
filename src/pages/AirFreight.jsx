import React from "react";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/hero3.jpg';
import Section1 from "../content/ServicesContent/AirFreight/section1";
import Section2 from "../content/ServicesContent/AirFreight/section2";
import Section3 from "../content/ServicesContent/AirFreight/section3";
import MiddleImageStack from "../content/ServicesContent/middleImageStack";
import TempInactiveSection from '../components/TempInactiveSection';
import Footer from '../components/Footer3d'

function AirFreight() {
  return(
    <>
      <Navbar />
      <HeroSection
        imageSrc={heroImage}
        title="Air Freight"
        subTitle= {(
          <>
            <a href="/">Home</a>
            <span>{" > "}</span>
            <span>Services</span>
            <span>{" > "}</span>
            <a href="/services/AirFreight">AirFreight</a>
          </>
        )}
        height='h-[70vh]'
        textSize='text-[2.5vw] sm:text-sm'/>
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