
import { motion } from 'framer-motion';
import { Instagram, Link, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <motion.h3 
          className="text-2xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Redes Sociais
        </motion.h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
          <motion.a
            href="https://www.instagram.com/fornodacacau" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-cacau-300 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Instagram className="h-6 w-6 mr-2" />
            <span className="text-lg">@fornodacacau</span>
          </motion.a>
          
          <motion.a
            href="https://www.fornodacacau.com.br" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-cacau-300 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link className="h-6 w-6 mr-2" />
            <span className="text-lg">www.fornodacacau.com.br</span>
          </motion.a>
          
          <motion.a
            href="mailto:faleconosco@fornodacacau.com.br" 
            className="flex items-center text-white hover:text-cacau-300 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Mail className="h-6 w-6 mr-2" />
            <span className="text-lg">faleconosco@fornodacacau.com.br</span>
          </motion.a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Forno da Cacau. Todos os direitos reservados.
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/184ce948-47a2-4786-af62-cb137d8f1081.png" 
                alt="Forno da Cacau" 
                className="h-8 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
