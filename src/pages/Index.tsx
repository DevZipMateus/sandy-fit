
import React from 'react';
import SandyHeader from '../components/SandyHeader';
import SandyHero from '../components/SandyHero';
import SandyAbout from '../components/SandyAbout';
import SandyServices from '../components/SandyServices';
import SandyPlans from '../components/SandyPlans';
import SandyGallery from '../components/SandyGallery';
import SandyTestimonials from '../components/SandyTestimonials';
import SandyContact from '../components/SandyContact';
import SandyFooter from '../components/SandyFooter';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SandyHeader />
      <SandyHero />
      <SandyAbout />
      <SandyServices />
      <SandyPlans />
      <SandyGallery />
      <SandyTestimonials />
      <SandyContact />
      <SandyFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
