import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import QuoteForm from './components/QuoteForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <QuoteForm />
    <FAQSection />
    <Footer />
   </div>
  )
}

export default App
