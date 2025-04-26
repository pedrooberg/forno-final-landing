
import { useState } from 'react';
import { motion } from 'framer-motion';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Cliente Fiel',
    quote: 'Os pães do Forno da Cacau são simplesmente irresistíveis! O pão de fermentação natural é o melhor que já provei na vida.',
    avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
  },
  {
    id: 2,
    name: 'João Pereira',
    role: 'Chef de Cozinha',
    quote: 'Como profissional da gastronomia, posso dizer que os produtos do Forno da Cacau têm qualidade excepcional. A textura, o sabor, tudo perfeito.',
    avatar: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
  },
  {
    id: 3,
    name: 'Ana Santos',
    role: 'Nutricionista',
    quote: 'Recomendo os pães integrais do Forno da Cacau aos meus pacientes. São nutritivos, feitos com ingredientes de qualidade e sem aditivos artificiais.',
    avatar: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-cream-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            O que dizem nossos clientes
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A opinião de quem já experimentou e aprovou nossos produtos
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <svg className="w-12 h-12 text-cacau-300 opacity-30 mx-auto mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              
              <p className="text-xl md:text-2xl italic text-cacau-800 mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <h4 className="text-xl font-bold text-cacau-900">{testimonials[currentIndex].name}</h4>
              <p className="text-cacau-600">{testimonials[currentIndex].role}</p>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-white text-cacau-700 border border-cacau-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cacau-100 transition-colors"
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial} 
              className="bg-white text-cacau-700 border border-cacau-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cacau-100 transition-colors"
              aria-label="Próximo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-cacau-600 w-6' : 'bg-cacau-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
