
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Canais de Atendimento B2B
          </motion.h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-cacau-400" />
              <a href="mailto:faleconosco@fornodacacau.com.br" className="text-xl text-white hover:text-cacau-300 transition-colors">
                faleconosco@fornodacacau.com.br
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-cacau-400" />
              <a href="tel:+558299614-6604" className="text-xl text-white hover:text-cacau-300 transition-colors">
                +55 82 99614-6604
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Direção Executiva</h3>
              <p className="text-xl font-semibold text-cacau-300 mb-2">Pedro Oberg</p>
              <p className="text-white mb-4">Direção Financeira e Comercial</p>
              <a href="mailto:pedrooberg@fornodacacau.com.br" className="text-gray-300 hover:text-cacau-300 transition-colors block mb-2">
                pedrooberg@fornodacacau.com.br
              </a>
              <a href="tel:+558299624-9229" className="text-gray-300 hover:text-cacau-300 transition-colors">
                (82) 99624-9229
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Direção Operacional</h3>
              <p className="text-xl font-semibold text-cacau-300 mb-2">Karolyn Mello</p>
              <p className="text-white mb-4">Direção de Operações e Produtos</p>
              <a href="mailto:karolyn.mello@fornodacacau.com.br" className="text-gray-300 hover:text-cacau-300 transition-colors block mb-2">
                karolyn.mello@fornodacacau.com.br
              </a>
              <a href="tel:+558299946-1983" className="text-gray-300 hover:text-cacau-300 transition-colors">
                (82) 99946-1983
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
