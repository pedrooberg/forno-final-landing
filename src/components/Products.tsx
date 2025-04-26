
import { useState } from 'react';
import { motion } from 'framer-motion';

// Product categories
const categories = [
  { id: 'paes', name: 'Pães' },
  { id: 'doces', name: 'Doces' },
  { id: 'bolos', name: 'Bolos' },
  { id: 'salgados', name: 'Salgados' }
];

// Product data
const products = [
  {
    id: 1,
    name: 'Pão de Fermentação Natural',
    description: 'Feito com massa madre cultivada em nossa padaria, farinha orgânica e longa fermentação.',
    price: 'R$ 18,90',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'paes'
  },
  {
    id: 2,
    name: 'Pão de Queijo',
    description: 'Receita mineira tradicional feita com queijo curado de alta qualidade e polvilho artesanal.',
    price: 'R$ 15,50',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    category: 'paes'
  },
  {
    id: 3,
    name: 'Croissant',
    description: 'Massa folhada feita com manteiga importada, resultando em camadas crocantes e interior macio.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    category: 'paes'
  },
  {
    id: 4,
    name: 'Pudim de Leite',
    description: 'Clássico pudim de leite condensado com calda de caramelo.',
    price: 'R$ 10,90',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'doces'
  },
  {
    id: 5,
    name: 'Bolo de Chocolate',
    description: 'Bolo fofinho de chocolate com cobertura ganache.',
    price: 'R$ 69,90',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    category: 'bolos'
  },
  {
    id: 6,
    name: 'Empada de Frango',
    description: 'Massa amanteigada com recheio cremoso de frango.',
    price: 'R$ 8,50',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    category: 'salgados'
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('paes');
  
  const filteredProducts = products.filter(
    product => activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <section id="products" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos Produtos
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descubra nossas criações artesanais feitas com ingredientes selecionados
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cacau-700 text-white'
                  : 'bg-cream-100 text-cacau-700 hover:bg-cream-200'
              }`}
            >
              {category.name}
            </button>
          ))}
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
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-cream-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cacau-900">{product.name}</h3>
                  <span className="text-lg font-semibold text-cacau-600">{product.price}</span>
                </div>
                <p className="text-cacau-700">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
