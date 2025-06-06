import React, {Suspense, lazy} from 'react';
const HeroSection = lazy(() => import('../components/HeroSection'));
import heroImage from '../assets/transport-logistics-concept.jpg';

const AboutUsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection
          imageSrc={heroImage}
          title="About"
          subTitle="Home > About"
          height='h-[70vh]'
          textSize='text-[2.5vw] sm:text-sm'
        />
      </Suspense>
    </div>
  )
}

export default AboutUsPage;