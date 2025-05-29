import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/HeroSection'));
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import QuoteForm from '../components/QuoteForm';

function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection />
      </Suspense>
      <AboutSection />
      <ServicesSection />
      <QuoteForm />
    </div>
  );
}

export default HomePage;
