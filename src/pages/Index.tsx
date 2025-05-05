
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Solution from '../components/Solution';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Decorative accent */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 h-screen w-16 md:w-24 opacity-30 pointer-events-none z-0">
        <img 
          src="/lovable-uploads/e495b39c-25ac-4a59-9ff5-8a2c757b1a55.png" 
          alt="Decorative pattern"
          className="h-full w-full object-cover"
        />
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Solution />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
