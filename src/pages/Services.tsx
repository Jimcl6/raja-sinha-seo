
import React from 'react';
import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import ServicesList from '@/components/ServicesList';
import OffshoreStaffing from '@/components/OffshoreStaffing';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesList />
        <OffshoreStaffing />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
