
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Entre em Contato
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Faça seu pedido ou tire suas dúvidas
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact info */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-cacau-800 mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-cacau-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cacau-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-cacau-800 mb-1">Endereço</h4>
                  <p className="text-cacau-600">Rua das Flores, 123 - Centro</p>
                  <p className="text-cacau-600">São Paulo, SP - 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-cacau-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cacau-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-cacau-800 mb-1">Telefone</h4>
                  <p className="text-cacau-600">(11) 99999-9999</p>
                  <p className="text-cacau-600">(11) 3333-3333</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-cacau-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cacau-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-cacau-800 mb-1">E-mail</h4>
                  <p className="text-cacau-600">contato@fornodacacau.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-cacau-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cacau-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-cacau-800 mb-1">Horário de Funcionamento</h4>
                  <p className="text-cacau-600">Segunda à Sexta: 7h às 19h</p>
                  <p className="text-cacau-600">Sábados: 7h às 18h</p>
                  <p className="text-cacau-600">Domingos: 7h às 12h</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-cacau-800 mb-6">Envie uma mensagem</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-cacau-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-cacau-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cacau-500"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-cacau-700 mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-cacau-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cacau-500"
                  placeholder="Seu e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-cacau-700 mb-2">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-cacau-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cacau-500"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-cacau-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-cacau-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cacau-500"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
