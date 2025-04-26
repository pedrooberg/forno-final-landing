
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import breadAnimation from '../assets/animations/breadAnimation';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: breadAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-cream-100 to-white relative overflow-hidden">
      <div className="container-custom flex flex-col lg:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 mb-12 lg:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cacau-900 mb-6 leading-tight">
            Sabores artesanais para momentos especiais
          </h1>
          <p className="text-lg md:text-xl text-cacau-700 mb-8 max-w-lg">
            Pães e doces feitos com ingredientes selecionados e muito carinho. 
            Descubra o verdadeiro sabor da panificação artesanal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn-primary">
              Ver Produtos
            </a>
            <a 
              href="#contact" 
              className="border-2 border-cacau-700 text-cacau-700 hover:bg-cacau-100 px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium"
            >
              Fazer Pedido
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cacau-100 rounded-full opacity-70" />
      <div className="absolute top-20 right-10 w-20 h-20 bg-cream-200 rounded-full opacity-50" />
    </section>
  );
};

export default Hero;
