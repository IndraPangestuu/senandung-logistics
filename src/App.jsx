import React, { useState, lazy} from 'react'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const AirFreight = lazy(() => import('./pages/AirFreight'));
const SeaFreight = lazy(() => import('./pages/SeaFreight'));
const DoorToDoor = lazy(() => import('./pages/DoorToDoor'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services/AirFreight" element={<AirFreight />} />
        <Route path="/services/SeaFreight" element={<SeaFreight />} />
        <Route path="/services/DoorToDoor" element={<DoorToDoor />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App;