import React, { useEffect, useState, useRef } from 'react';

const TempInactiveSection = ({ children, scrollThreshold = 5 }) => {
  const [isActivated, setIsActivated] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const totalScrolled = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;

      if (deltaY > 0) {
        // Scroll ke bawah
        totalScrolled.current += deltaY;

        if (totalScrolled.current >= scrollThreshold) {
          setIsActivated(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  if (!isActivated) {
    return <div style={{ height: '30vh' }} />;
  }

  return <>{children}</>;
};

export default TempInactiveSection;