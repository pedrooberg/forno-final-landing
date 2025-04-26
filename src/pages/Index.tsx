
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
      <div className="fixed left-0 top-1/2 -translate-y-1/2 h-screen w-12 md:w-16 opacity-20 pointer-events-none z-0">
        <img 
          src="/lovable-uploads/6c266b4c-166e-4031-821e-647a9327f9bd.png" 
          alt="Decorative pattern"
          className="h-full object-cover"
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
