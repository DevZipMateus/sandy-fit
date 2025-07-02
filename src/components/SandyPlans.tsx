
import React from 'react';

const SandyPlans = () => {
  const categories = [
    {
      title: "Linha Básica",
      description: "Peças essenciais para o dia a dia fitness",
      price: "A partir de R$ 89",
      features: [
        "Tecido dry-fit de qualidade",
        "Modelagem confortável",
        "Cores clássicas",
        "Durabilidade garantida"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-800"
    },
    {
      title: "Linha Premium",
      description: "Conjuntos exclusivos com design diferenciado",
      price: "A partir de R$ 139",
      features: [
        "Tecidos premium importados",
        "Estampas exclusivas",
        "Modelagem anatômica",
        "Acabamento de luxo",
        "Embalagem especial"
      ],
      popular: true,
      gradient: "from-sandy-pink to-sandy-gold"
    },
    {
      title: "Linha Signature",
      description: "Coleção limitada com peças únicas",
      price: "A partir de R$ 189",
      features: [
        "Edição limitada",
        "Design exclusivo",
        "Materiais de altíssima qualidade",
        "Bordados especiais",
        "Certificado de autenticidade"
      ],
      popular: false,
      gradient: "from-sandy-gold to-yellow-500"
    }
  ];

  const benefits = [
    "Frete grátis para compras acima de R$ 150",
    "Troca gratuita em até 7 dias",
    "Parcelamento em até 6x sem juros",
    "Desconto de 10% na primeira compra",
    "Acesso antecipado aos lançamentos",
    "Suporte especializado via WhatsApp"
  ];

  return (
    <section id="planos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Nossas <span className="gradient-pink bg-clip-text text-transparent">Coleções</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Escolha a linha que mais combina com seu estilo e orçamento. 
            Todas as nossas peças são desenvolvidas com a mesma paixão e cuidado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover relative ${
                category.popular ? 'ring-2 ring-sandy-pink scale-105' : ''
              }`}
            >
              {category.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sandy-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6`}>
                {index + 1}
              </div>

              <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-3">
                {category.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {category.description}
              </p>

              <div className="text-3xl font-bold text-sandy-pink mb-6">
                {category.price}
              </div>

              <ul className="space-y-3 mb-8">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-sandy-pink mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                category.popular 
                  ? 'bg-sandy-pink text-white hover:bg-sandy-pink/90' 
                  : 'bg-sandy-gold text-sandy-black hover:bg-sandy-gold/90'
              }`}>
                Ver Coleção
              </button>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-8 text-center">
            Vantagens Exclusivas
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandyPlans;
