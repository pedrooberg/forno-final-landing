
import { motion } from 'framer-motion';
import { ArrowDown, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black relative overflow-hidden">
      <div className="container-custom flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <img 
            src="/lovable-uploads/184ce948-47a2-4786-af62-cb137d8f1081.png" 
            alt="Forno da Cacau" 
            className="h-28 md:h-36"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8 text-white"
        >
          <Phone className="h-5 w-5" />
          <span className="text-lg">+55 (82) 99614-6604</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Soluções Gastronômicas B2B
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Tradição Italiana, qualidade excepcional!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a href="#contact" className="btn-primary group">
            Agende uma Avaliação Gratuita
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
