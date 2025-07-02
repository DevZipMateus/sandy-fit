
import React from 'react';

const SandyFooter = () => {
  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Planos', href: '#planos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const policies = [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Política de Trocas', href: '#' },
    { name: 'Entrega e Frete', href: '#' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-sandy-black text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/d5e471dc-42c3-4efe-b220-62c709c973e6.png" 
              alt="Sandy Store Fit"
              className="h-16 mb-6"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Fundada em 2024 com a missão de valorizar a autoestima feminina através da moda fitness. 
              Conjuntos que moldam o corpo e elevam a autoestima.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sandy_storefit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sandy-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                📸
              </a>
              <a 
                href="https://wa.me/5566997156722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp"
              >
                📱
              </a>
              <a 
                href="mailto:sandyellysteffany2016@gmail.com"
                className="w-10 h-10 bg-sandy-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-sandy-pink transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-sandy-pink mt-1">📍</span>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-sm">AV ARAPONGAS, 1889<br />PARQUE UNIVERSITÁRIO</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-sandy-pink">📱</span>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm">(66) 99715-6722</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-sandy-pink">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">sandyellysteffany2016@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-sandy-pink to-sandy-gold rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Fique por Dentro das Novidades
            </h3>
            <p className="mb-6 opacity-90">
              Seja a primeira a saber sobre lançamentos, promoções exclusivas e dicas de moda fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-full text-sandy-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-sandy-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Sandy Store Fit. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-gray-400 hover:text-sandy-pink transition-colors duration-300"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SandyFooter;
