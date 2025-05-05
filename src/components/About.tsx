import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <BookOpen className="text-white h-8 w-8" />
            <h2 className="section-title">Quem somos nós</h2>
          </motion.div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-white text-lg leading-relaxed bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-neon hover:shadow-[0_0_25px_4px_rgba(0,64,128,0.4),0_0_50px_8px_rgba(0,32,64,0.3)] transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-justify">
            Com 22 anos de experiência em pizzarias e restaurantes, o Forno da Cacau renasce como líder em 
            soluções gastronômicas B2B, atendendo bares, restaurantes, pizzarias, hotéis, pousadas, 
            supermercados e resorts com excelência.
          </p>
          
          <div className="flex items-center justify-center my-10">
            <div className="h-1 w-20 bg-gradient-to-r from-italian-green via-italian-white to-italian-red rounded-full"></div>
          </div>
          
          <p className="text-justify">
            Nossos produtos seguem a tradição napolitana italiana, com massas de longa fermentação, 
            molhos de tomates ricos em umami e outros produtos que demandem tempo para serem feitos, 
            armazenamento adequado, experiência e dedicação de cozinha para um resultado excepcional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
