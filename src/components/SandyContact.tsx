
import React from 'react';

const SandyContact = () => {
  const contactInfo = [
    {
      title: "WhatsApp",
      content: "(66) 99715-6722",
      link: "https://wa.me/5566997156722",
      icon: "📱",
      description: "Fale conosco diretamente"
    },
    {
      title: "Email",
      content: "sandyellysteffany2016@gmail.com",
      link: "mailto:sandyellysteffany2016@gmail.com",
      icon: "📧",
      description: "Envie sua mensagem"
    },
    {
      title: "Instagram",
      content: "@sandy_storefit",
      link: "https://www.instagram.com/sandy_storefit",
      icon: "📸",
      description: "Siga nossas novidades"
    },
    {
      title: "Endereço",
      content: "AV ARAPONGAS, 1889 - PARQUE UNIVERSITÁRIO",
      link: "#",
      icon: "📍",
      description: "Nossa localização"
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Entre em <span className="gradient-gold bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar as peças perfeitas. 
            Entre em contato conosco e tire todas as suas dúvidas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-8">
                Fale Conosco
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="bg-white rounded-2xl p-6 shadow-lg card-hover group"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-sandy-black mb-2">
                      {info.title}
                    </h4>
                    <p className="text-sandy-pink font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-playfair font-semibold text-sandy-black mb-6">
                Horário de Atendimento
              </h4>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="font-medium text-sandy-black">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold text-sandy-black mb-6">
              Envie sua Mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sandy-pink focus:border-transparent transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sandy-pink focus:border-transparent transition-colors duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sandy-pink focus:border-transparent transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sandy-pink focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="pedido">Fazer um pedido</option>
                  <option value="duvida">Dúvida sobre produto</option>
                  <option value="troca">Troca ou devolução</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sandy-pink focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Conte-nos como podemos ajudar você..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-6 p-4 bg-sandy-pink bg-opacity-10 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>Resposta rápida garantida!</strong> 
                Respondemos todas as mensagens em até 2 horas durante o horário comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandyContact;
