import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/hero_img/hero2.jpg";
import Footer from "../components/Footer";
import Section1 from "../content/Contact/section1";
import Section2 from "../content/Contact/section2";
import Section3 from "../content/Contact/section3";
import TempInactiveSection from '../components/TempInactiveSection';


function ContactPage() {
  return (
    <>
      <Navbar />
      <HeroSection
        imageSrc={heroImage}
        title="Contact Us"
        subTitle="Home > Contact"
        height="h-[70vh]"
        textSize="text-[2.5vw] sm:text-sm"
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
export default ContactPage;