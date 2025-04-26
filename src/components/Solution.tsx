
import { motion } from 'framer-motion';
import { Box, ArrowDown } from 'lucide-react';

const solutionItems = [
  {
    id: 1,
    title: "Geladeiras e freezers em comodato"
  },
  {
    id: 2,
    title: "Fornos profissionais em comodato"
  },
  {
    id: 3,
    title: "Letreiro luminoso personalizado em comodato"
  },
  {
    id: 4,
    title: "Harmonização completa do cardápio por Sommelier"
  },
  {
    id: 5,
    title: "Abastecimento regular de produtos"
  },
  {
    id: 6,
    title: "Treinamento especializado da equipe"
  }
];

const Solution = () => {
  return (
    <section id="solution" className="section bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Box className="text-cacau-400 h-8 w-8" />
            <h2 className="section-title">Solução Integrada</h2>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Investimos diretamente no seu ponto comercial, oferecendo:
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {solutionItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-cacau-500"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#contact" className="btn-primary group">
            Agende a avaliação da elegibilidade do seu ponto
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
