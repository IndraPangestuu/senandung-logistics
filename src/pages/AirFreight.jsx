import React from "react";
import Navbar from '../components/Navbar3d';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/hero2.jpg';
import Section1 from "../content/ServicesContent/section1";
import Section2 from "../content/ServicesContent/section2";
import Footer from '../components/Footer3d'

function AirFreight() {
  return(
    <>
      <Navbar />
      <HeroSection
        imageSrc={heroImage}
        title="AirFreight"
        subTitle= {(
          <>
            <a href="/">Home</a>
            <span>{" > "}</span>
            <a href="/services">Services</a>
            <span>{" > "}</span>
            <a href="/services/AirFreight">AirFreight</a>
          </>
        )}
        height='h-[70vh]'
        textSize='text-[2.5vw] sm:text-sm'
      />
      <Section1 />
      <Section2 />
      {/* <div className="min-h-screen flex flex-col px-20 lg:px-20"> */}
        {/* <main className="flex-grow"> */}
          {/* {/* <Section2 /> */}
          {/* <Section3 /> */}
        {/* </main> */}
      {/* </div> */}
      <Footer />
    </>
  )
}

export default AirFreight;