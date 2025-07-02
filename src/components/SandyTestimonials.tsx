
import React from 'react';

const SandyTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Personal Trainer",
      content: "As peças da Sandy Store Fit são incríveis! A qualidade do tecido e o caimento são perfeitos. Me sinto muito mais confiante nos meus treinos.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Ana Costa",
      role: "Estudante de Educação Física",
      content: "Comprei meu primeiro conjunto e me apaixonei! O atendimento foi excepcional e a peça chegou rapidinho. Super recomendo!",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Juliana Santos",
      role: "Empresária",
      content: "Finalmente encontrei uma marca que entende o corpo feminino real. As peças valorizam as curvas e são super confortáveis.",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Carla Oliveira",
      role: "Mãe e Atleta",
      content: "Depois da maternidade, tinha dificuldade em encontrar roupas que me fizessem sentir bem. A Sandy Store Fit mudou isso!",
      rating: 5,
      image: "👩‍🍼"
    },
    {
      name: "Fernanda Lima",
      role: "Instrutora de Pilates",
      content: "Uso as peças tanto para dar aulas quanto para treinar. A durabilidade é impressionante e o visual sempre impecável.",
      rating: 5,
      image: "🧘‍♀️"
    },
    {
      name: "Patricia Rocha",
      role: "Corredora",
      content: "As leggings não marcam, não incomodam e têm um caimento perfeito. Já sou cliente fiel e sempre indico para as amigas!",
      rating: 5,
      image: "🏃‍♀️"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            O que nossas <span className="gradient-pink bg-clip-text text-transparent">clientes</span> dizem
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            A satisfação das nossas clientes é nossa maior conquista. 
            Veja os depoimentos de quem já se apaixonou pela Sandy Store Fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 card-hover">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <svg 
                    key={starIndex} 
                    className="w-5 h-5 text-sandy-gold fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-sandy-black">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-sandy-pink to-sandy-gold rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Clientes Satisfeitas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-sm opacity-90">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Suporte Rápido</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-4">
            Que tal ser a próxima cliente satisfeita?
          </h3>
          <p className="text-body mb-6">
            Junte-se às centenas de mulheres que já transformaram seus treinos com a Sandy Store Fit.
          </p>
          <a 
            href="https://www.instagram.com/sandy_storefit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fazer Meu Pedido
          </a>
        </div>
      </div>
    </section>
  );
};

export default SandyTestimonials;
