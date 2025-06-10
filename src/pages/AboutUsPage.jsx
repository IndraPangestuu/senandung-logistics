import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Section1 from '../content/AboutUs/section1';
// import Section2 from '../content/AboutUs/section2';
// import Section3 from '../content/AboutUs/section3';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col px-20 lg:px-20">
        <main className="flex-grow">
          <Section1 />
          {/* <Section2 />
          <Section3 /> */}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
