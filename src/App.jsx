import React from 'react';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Booking from './components/Booking';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grain-overlay">
      <Hero />
      <Programs />
      <Booking />
      <Coaches />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
