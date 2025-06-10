import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Section1 from '../content/Home/section1';
import Section2 from '../content/Home/section2';
import Section3 from '../content/Home/section3';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
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

export default HomePage;
