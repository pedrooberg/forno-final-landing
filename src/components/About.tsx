
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossa História
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça a paixão e tradição por trás do Forno da Cacau
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-cacau-400 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Cacau preparando pães artesanais" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cacau-800 mb-6">
              Tradição familiar em cada receita
            </h3>
            <p className="text-lg text-cacau-700 mb-6">
              Tudo começou em 2010, quando Cacau decidiu transformar sua paixão por panificação em um negócio. 
              Com receitas de família passadas por gerações e técnicas artesanais cuidadosamente preservadas, 
              nasceu o Forno da Cacau.
            </p>
            <p className="text-lg text-cacau-700 mb-6">
              Nossa filosofia é simples: ingredientes de qualidade, processos artesanais e muito amor em cada 
              produto que sai do nosso forno. Não utilizamos conservantes ou aditivos químicos, respeitando o 
              tempo de fermentação natural que traz sabor e qualidade aos nossos produtos.
            </p>
            <p className="text-lg text-cacau-700">
              Hoje, o Forno da Cacau é reconhecido pela excelência em pães artesanais, doces especiais e 
              produtos de confeitaria que encantam paladares e criam momentos de felicidade à mesa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
