
import React from 'react';
import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import ClientLogos from '@/components/ClientLogos';
import ServicesAudit from '@/components/ServicesAudit';
import ServicesALaCarte from '@/components/ServicesALaCarte';
import ServicesScaling from '@/components/ServicesScaling';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ClientLogos />
        <ServicesAudit />
        <ServicesALaCarte />
        <ServicesScaling />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
