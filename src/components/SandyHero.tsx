
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
      
      {/* Decorative elements - Melhorados para responsividade */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-sandy-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-sandy-gold/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content - Melhorado para mobile */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-bold text-sandy-black mb-3 sm:mb-4 md:mb-6 leading-tight">
              Conjuntos que 
              <span className="gradient-pink bg-clip-text text-transparent block sm:inline"> moldam o corpo</span> e 
              <span className="gradient-gold bg-clip-text text-transparent block sm:inline"> elevam autoestima</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
              Fundada em 02 de fevereiro de 2024, a Sandy Store Fit nasceu com a missão de valorizar a autoestima feminina através da moda fitness. Oferecemos peças que unem conforto, estilo e qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
              <button 
                onClick={() => scrollToSection('#galeria')}
                className="btn-primary w-full sm:w-auto min-w-[140px]"
              >
                Ver Coleção
              </button>
              <button 
                onClick={() => scrollToSection('#sobre')}
                className="btn-secondary w-full sm:w-auto min-w-[140px]"
              >
                Nossa História
              </button>
            </div>

            {/* Stats - Melhorados para mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200 mx-2 sm:mx-0">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-sandy-pink">2024</div>
                <div className="text-xs sm:text-sm text-gray-600">Fundada</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-sandy-gold">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Feminino</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-sandy-black">Fitness</div>
                <div className="text-xs sm:text-sm text-gray-600">Especializada</div>
              </div>
            </div>
          </div>

          {/* Logo/Image - Melhorado para responsividade */}
          <div className="flex justify-center lg:justify-end animate-slide-up order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sandy-pink to-sandy-gold opacity-20 rounded-full blur-2xl transform scale-110"></div>
              <img 
                src="/lovable-uploads/7129160d-e8be-4cae-9e17-2d5289d0ff56.png" 
                alt="Sandy Store Fit - Moda Fitness que Eleva a Autoestima"
                className="relative z-10 w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Melhorado para mobile */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-sandy-pink rounded-full flex justify-center">
          <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 md:h-3 bg-sandy-pink rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default SandyHero;
