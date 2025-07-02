
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
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Sobre a <span className="gradient-pink bg-clip-text text-transparent">Sandy Store Fit</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Fundada em 02 de fevereiro de 2024, nascemos com uma missão clara: valorizar a autoestima feminina através da moda fitness, oferecendo peças que unem conforto, estilo e qualidade para mulheres reais que cuidam de si com amor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Mission */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-4">
                Nossa Missão
              </h3>
              <p className="text-body">
                <strong className="text-sandy-pink">Vestir com propósito, promovendo bem-estar e confiança.</strong> 
                Acreditamos que a roupa certa pode transformar não apenas a aparência, mas também como você se sente consigo mesma.
              </p>
            </div>

            <div className="bg-gradient-to-r from-sandy-pink to-sandy-gold p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Nosso Slogan
              </h3>
              <p className="text-lg font-medium">
                "Conjuntos que moldam o corpo e elevam autoestima"
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-8 text-center lg:text-left">
              Nossos Valores
            </h3>
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md card-hover">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{value.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-sandy-black mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-8 text-center">
            Nossa Jornada
          </h3>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-pink rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                2024
              </div>
              <h4 className="text-lg font-semibold text-sandy-black mb-2">
                Fevereiro - Fundação
              </h4>
              <p className="text-gray-600 max-w-md">
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
