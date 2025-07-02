
import React from 'react';

const SandyServices = () => {
  const services = [
    {
      title: "Conjuntos Fitness Completos",
      description: "Top e legging coordenados para um visual harmonioso e estiloso.",
      features: ["Tecidos de alta qualidade", "Modelagem anatômica", "Cores vibrantes"],
      icon: "👕"
    },
    {
      title: "Peças Individuais",
      description: "Tops, leggings e shorts avulsos para você montar seus looks únicos.",
      features: ["Variedade de modelos", "Tamanhos inclusivos", "Mix and match"],
      icon: "✨"
    },
    {
      title: "Coleções Sazonais",
      description: "Lançamentos exclusivos seguindo as tendências da moda fitness.",
      features: ["Estampas exclusivas", "Edições limitadas", "Pré-vendas especiais"],
      icon: "🌟"
    },
    {
      title: "Atendimento Personalizado",
      description: "Consultoria de estilo e ajuda na escolha das peças ideais para você.",
      features: ["Orientação de tamanhos", "Dicas de combinações", "Suporte pós-venda"],
      icon: "💬"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Nossos <span className="gradient-gold bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Oferecemos moda fitness feminina completa, com peças pensadas para valorizar seu corpo 
            e elevar sua autoestima em cada treino e no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 card-hover group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-sandy-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-sandy-pink rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sandy-pink to-sandy-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Pronta para se Sentir Incrível?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Descubra como nossas peças podem transformar seus treinos e sua autoestima.
            </p>
            <a 
              href="https://www.instagram.com/sandy_storefit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-sandy-pink px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Conheça Nossa Coleção
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandyServices;
