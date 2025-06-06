import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/HeroSection'));
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import QuoteForm from '../components/QuoteForm';
import heroImage from '../assets/transport-logistics-products2.jpg';

function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection
        imageSrc={heroImage}
        title="Percayakan Export Import"
        subTitle="Anda pada Ahlinya"
        />
      </Suspense>
      <AboutSection />
      <ServicesSection />
      <QuoteForm />
    </div>
  );
}

export default HomePage;
