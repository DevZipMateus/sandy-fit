
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="heading-secondary mb-3 sm:mb-4 md:mb-6">
            Nossa <span className="bg-gradient-pink bg-clip-text text-gray-950">Galeria</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto px-2 sm:px-4 lg:px-0">
            Confira nossa coleção exclusiva de conjuntos fitness. Peças que combinam estilo, conforto e qualidade.
          </p>
        </div>

        {/* Grid responsivo melhorado */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer card-hover"
              onClick={() => openModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 xs:h-52 sm:h-60 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                  <h3 className="text-white font-medium text-sm sm:text-base lg:text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal melhorado para mobile */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full w-full">
              <button 
                onClick={closeModal} 
                className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 sm:p-2 transition-colors z-10"
              >
                <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Imagem ampliada" 
                className="max-w-full max-h-[95vh] object-contain rounded-lg mx-auto" 
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          </div>
        )}

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <button 
            onClick={() => window.open('https://wa.me/5566997156722', '_blank')} 
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver Mais Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default SandyGallery;
