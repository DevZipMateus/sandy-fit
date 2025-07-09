
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const SandyPlans = () => {
  const categories = [{
    title: "Linha Básica",
    description: "Peças essenciais para o dia a dia fitness",
    price: "A partir de R$ 89",
    features: ["Tecido dry-fit de qualidade", "Modelagem confortável", "Cores clássicas", "Durabilidade garantida"],
    popular: false,
    gradient: "from-gray-600 to-gray-800"
  }, {
    title: "Linha Premium",
    description: "Conjuntos exclusivos com design diferenciado",
    price: "A partir de R$ 139",
    features: ["Tecidos premium importados", "Estampas exclusivas", "Modelagem anatômica", "Acabamento de luxo", "Embalagem especial"],
    popular: true,
    gradient: "from-sandy-pink to-sandy-gold"
  }, {
    title: "Linha Signature",
    description: "Coleção limitada com peças únicas",
    price: "A partir de R$ 189",
    features: ["Edição limitada", "Design exclusivo", "Materiais de altíssima qualidade", "Bordados especiais", "Certificado de autenticidade"],
    popular: false,
    gradient: "from-sandy-gold to-yellow-500"
  }];
  
  const benefits = ["Frete grátis para compras acima de R$ 150", "Troca gratuita em até 7 dias", "Parcelamento em até 6x sem juros", "Desconto de 10% na primeira compra", "Acesso antecipado aos lançamentos", "Suporte especializado via WhatsApp"];

  return (
    <section id="planos" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Nossos <span className="bg-gradient-pink bg-clip-text text-transparent">Planos</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Escolha o plano perfeito para seu estilo de vida fitness. Qualidade e sofisticação em cada peça.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className={`relative overflow-hidden ${category.popular ? 'ring-2 ring-sandy-pink scale-105' : ''} card-hover`}>
              {category.popular && (
                <div className="absolute top-4 right-4 bg-sandy-pink text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} className="fill-current" />
                  Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair">{category.title}</CardTitle>
                <CardDescription className="text-gray-600">{category.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-sandy-black">{category.price}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-sandy-pink mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${category.popular ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => window.open('https://wa.me/5566997156722', '_blank')}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-playfair font-semibold text-center mb-8 text-sandy-black">
            Benefícios Exclusivos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={16} className="text-sandy-pink mt-1 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandyPlans;
