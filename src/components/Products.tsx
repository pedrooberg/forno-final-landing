
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pizza, Clock, Utensils, Coffee, ChefHat, Box } from 'lucide-react';
import { Package } from 'lucide-react';

// Product data
const products = [
  {
    id: 1,
    name: 'Pizzas Pré-assadas',
    description: 'Médias ou individuais, embaladas a vácuo. Versões: tradicional, sem glúten ou sem glúten e sem lactose.',
    Icon: Pizza
  },
  {
    id: 2,
    name: 'Discos de Pizza',
    description: 'Tradicional ou sem glúten, com molho de tomates San Marzano.',
    Icon: Pizza
  },
  {
    id: 3,
    name: 'Pães Artesanais',
    description: 'Pão italiano tradicional e versão sem glúten.',
    Icon: Utensils
  },
  {
    id: 4,
    name: 'Molho Demi Glace',
    description: 'Fundo de carne escuro, com 48 horas de cocção em baixa temperatura, sem conservantes.',
    Icon: Coffee
  },
  {
    id: 5,
    name: 'Massa de Pizza Crua',
    description: 'Tradicional ou sem glúten, boleada e pronta para uso.',
    Icon: ChefHat
  },
  {
    id: 6,
    name: 'Embalagens Personalizadas',
    description: 'Caixas de pizza com a sua logomarca.',
    Icon: Box
  },
];

const Products = () => {
  return (
    <section id="products" className="section bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Package className="text-italian-green h-8 w-8" />
            <h2 className="section-title">Nossos Produtos</h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-900/80 backdrop-blur-md rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,64,128,0.1)] hover:shadow-[0_8px_32px_rgba(0,64,128,0.2)] border border-gray-700/50 transition-all duration-500 p-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <product.Icon className="h-16 w-16 text-italian-green" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300 text-justify">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
