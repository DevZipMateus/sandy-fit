
import React, { useState } from 'react';
import { X } from 'lucide-react';

const SandyGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/037c2b50-2cbe-40a7-866c-e9f6aa8e3f80.png",
      alt: "Conjunto azul e cinza - Tam G - R$ 99,90",
      title: "Conjunto Azul e Cinza"
    },
    {
      src: "/lovable-uploads/e73da214-cec3-4f9a-bb71-eaabf4297ad2.png",
      alt: "Modelo usando conjunto fitness preto",
      title: "Conjunto Fitness Preto"
    },
    {
      src: "/lovable-uploads/51eeb795-f883-464a-b1da-218a98298a13.png",
      alt: "Conjunto preto - Tam G - R$ 99,90",
      title: "Conjunto Preto Clássico"
    },
    {
      src: "/lovable-uploads/a3ed4faf-e347-42e9-8ee7-03aef62e7a87.png",
      alt: "Conjunto roxo em manequim",
      title: "Conjunto Roxo Premium"
    },
    {
      src: "/lovable-uploads/0d746be5-dc29-47ad-a39c-c18940d15459.png",
      alt: "Detalhe das costas do conjunto roxo",
      title: "Detalhes do Design"
    },
    {
      src: "/lovable-uploads/988c7b5d-4155-49af-b06f-6fddb491d0a0.png",
      alt: "Modelo usando conjunto bege",
      title: "Conjunto Bege Elegante"
    },
    {
      src: "/lovable-uploads/b606b63d-2f8d-496b-ae92-2c6ba1bee876.png",
      alt: "Conjunto azul royal",
      title: "Conjunto Azul Royal"
    },
    {
      src: "/lovable-uploads/c854e9e8-9854-4f6e-bb33-a762af78fa6e.png",
      alt: "Conjunto laranja e preto - Tam G - R$ 99,90",
      title: "Conjunto Laranja e Preto"
    },
    {
      src: "/lovable-uploads/7c5685c9-af8d-4e9d-a2df-30a64e23b0c8.png",
      alt: "Modelo usando conjunto vermelho",
      title: "Conjunto Vermelho Vibrante"
    },
    {
      src: "/lovable-uploads/392f7b7e-89bb-4f59-87b7-4c2dfd6de4cd.png",
      alt: "Modelo usando conjunto bege claro",
      title: "Conjunto Bege Claro"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-sandy-black mb-3 sm:mb-4">
            Nossa <span className="bg-gradient-pink bg-clip-text text-gray-950">Galeria</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Confira nossa coleção exclusiva de conjuntos fitness. Peças que combinam estilo, conforto e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer card-hover"
              onClick={() => openModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-white font-medium text-base sm:text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para exibir imagem ampliada */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={closeModal} 
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors z-10"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Imagem ampliada" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg" 
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          </div>
        )}

        <div className="text-center mt-8 sm:mt-12">
          <button 
            onClick={() => window.open('https://wa.me/5566997156722', '_blank')} 
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6"
          >
            Ver Mais Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default SandyGallery;
