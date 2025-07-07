
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Credentials from '@/components/Credentials';
import ClientHelp from '@/components/ClientHelp';
import ThreeHourService from '@/components/ThreeHourService';
import WhyMe from '@/components/WhyMe';
import ContactCTA from '@/components/ContactCTA';
import ManualReviews from '@/components/ManualReviews';
import SEOBusinessSection from '@/components/SEOBusinessSection';
import Footer from '@/components/Footer';
import SEOHelmet from '@/components/SEOHelmet';
import SchemaMarkup from '@/components/SchemaMarkup';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet 
        title="SEO CONSULTANCY PHILIPPINES | RAJA SINHA SEO CONSULTANT"
        description="SEO Consultancy Philippines that works for any business. Contact Raja to Audit, Make SEO Recommendations and Fix your website for Search."
        keywords="SEO consultant Philippines, search engine optimization, digital marketing, website audit, technical SEO"
        canonicalUrl="https://rajasinhaseo.com"
      />
      <SchemaMarkup type="website" />
      <SchemaMarkup type="person" />
      
      <Header />
      <main className="flex-grow">
        <Hero />
        <Credentials />
        <ThreeHourService />
        <ClientHelp />
        <WhyMe />
        <ContactCTA />
        <ManualReviews />
        <SEOBusinessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
