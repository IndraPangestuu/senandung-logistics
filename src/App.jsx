import React, { useState, lazy} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import { Navbar as NavbarFM } from '@heroui/react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App;
