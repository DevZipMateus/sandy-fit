
import React from 'react';

const SandyHero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sandy-pink/10 via-white to-sandy-gold/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sandy-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sandy-gold/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-sandy-black mb-6 leading-tight">
              Conjuntos que 
              <span className="gradient-pink bg-clip-text text-transparent"> moldam o corpo</span> e 
              <span className="gradient-gold bg-clip-text text-transparent"> elevam autoestima</span>
            </h1>
            
            <p className="text-body mb-8 max-w-lg mx-auto lg:mx-0">
              Fundada em 02 de fevereiro de 2024, a Sandy Store Fit nasceu com a missão de valorizar a autoestima feminina através da moda fitness. Oferecemos peças que unem conforto, estilo e qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('#planos')}
                className="btn-primary"
              >
                Ver Coleção
              </button>
              <button 
                onClick={() => scrollToSection('#sobre')}
                className="btn-secondary"
              >
                Conheça Nossa História
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sandy-pink">2024</div>
                <div className="text-sm text-gray-600">Fundada</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sandy-gold">100%</div>
                <div className="text-sm text-gray-600">Feminino</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sandy-black">Fitness</div>
                <div className="text-sm text-gray-600">Especializada</div>
              </div>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sandy-pink to-sandy-gold opacity-20 rounded-full blur-2xl transform scale-110"></div>
              <img 
                src="/lovable-uploads/d5e471dc-42c3-4efe-b220-62c709c973e6.png" 
                alt="Sandy Store Fit - Moda Fitness que Eleva a Autoestima"
                className="relative z-10 w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sandy-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sandy-pink rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default SandyHero;
