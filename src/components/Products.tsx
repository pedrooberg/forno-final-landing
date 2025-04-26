
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

// Product data
const products = [
  {
    id: 1,
    name: 'Pizzas Pré-assadas',
    description: 'Médias ou individuais, embaladas a vácuo. Versões: tradicional, sem glúten ou sem glúten e sem lactose.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
  },
  {
    id: 2,
    name: 'Discos de Pizza',
    description: 'Tradicional ou sem glúten, com molho de tomates San Marzano.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
  },
  {
    id: 3,
    name: 'Pães Artesanais',
    description: 'Pão italiano tradicional e versão sem glúten.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
  },
  {
    id: 4,
    name: 'Molho Demi Glace',
    description: 'Fundo de carne escuro, com 48 horas de cocção em baixa temperatura, sem conservantes.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    id: 5,
    name: 'Massa de Pizza Crua',
    description: 'Tradicional ou sem glúten, boleada e pronta para uso.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
  },
  {
    id: 6,
    name: 'Embalagens Personalizadas',
    description: 'Caixas de pizza com a sua logomarca.',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac'
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
            <Package className="text-cacau-400 h-8 w-8" />
            <h2 className="section-title">Nossos Produtos</h2>
          </motion.div>
        </div>

        {/* Products Grid */}
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
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
