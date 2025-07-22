
import React from 'react';

const SandyAbout = () => {
  const values = [
    {
      title: "Autoestima",
      description: "Cada peça é pensada para fazer você se sentir confiante e poderosa.",
      icon: "💪"
    },
    {
      title: "Qualidade",
      description: "Materiais selecionados e acabamento impecável em cada produto.",
      icon: "✨"
    },
    {
      title: "Respeito ao corpo real",
      description: "Celebramos a diversidade e a beleza única de cada mulher.",
      icon: "❤️"
    },
    {
      title: "Atendimento humanizado",
      description: "Cada cliente é especial e merece um atendimento personalizado.",
      icon: "🤝"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-sandy-black mb-4 sm:mb-6">
            Sobre a <span className="gradient-pink bg-clip-text text-transparent">Sandy Store Fit</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Fundada em 02 de fevereiro de 2024, nascemos com uma missão clara: valorizar a autoestima feminina através da moda fitness, oferecendo peças que unem conforto, estilo e qualidade para mulheres reais que cuidam de si com amor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Mission */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover">
              <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-sandy-black mb-3 sm:mb-4">
                Nossa Missão
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                <strong className="text-sandy-pink">Vestir com propósito, promovendo bem-estar e confiança.</strong> 
                Acreditamos que a roupa certa pode transformar não apenas a aparência, mas também como você se sente consigo mesma.
              </p>
            </div>

            <div className="bg-gradient-to-r from-sandy-pink to-sandy-gold p-6 sm:p-8 rounded-2xl text-white">
              <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 sm:mb-4">
                Nosso Slogan
              </h3>
              <p className="text-base sm:text-lg font-medium">
                "Conjuntos que moldam o corpo e elevam autoestima"
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-sandy-black mb-6 sm:mb-8 text-center lg:text-left">
              Nossos Valores
            </h3>
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md card-hover">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl flex-shrink-0">{value.icon}</div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-sandy-black mb-1 sm:mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-sandy-black mb-6 sm:mb-8 text-center">
            Nossa Jornada
          </h3>
          <div className="flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-pink rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mx-auto">
                2024
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-sandy-black mb-2 sm:mb-3">
                Fevereiro - Fundação
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                Sandy Store Fit nasce com o propósito de revolucionar a moda fitness feminina, 
                focando na autoestima e bem-estar das mulheres brasileiras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandyAbout;
