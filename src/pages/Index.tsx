
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Credentials from '@/components/Credentials';
import ClientHelp from '@/components/ClientHelp';
import WhyMe from '@/components/WhyMe';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Credentials />
        <ClientHelp />
        <WhyMe />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
