import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import VideoTestimonials from './components/VideoTestimonials';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <VideoTestimonials />
      <Features />
      <TargetAudience />
      <Pricing />
      <CtaSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;