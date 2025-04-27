
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Pizza, Utensils, Coffee, ChefHat, Box } from 'lucide-react';

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
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Package className="text-white h-8 w-8" />
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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-black/40 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-neon hover:shadow-[0_0_25px_4px_rgba(0,64,128,0.4),0_0_50px_8px_rgba(0,32,64,0.3)] transition-all duration-500 p-6"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <product.Icon className="h-16 w-16 text-white" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-white text-justify max-w-[90%] mx-auto">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
