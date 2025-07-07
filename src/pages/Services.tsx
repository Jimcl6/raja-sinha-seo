
import React from 'react';
import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import ServicesList from '@/components/ServicesList';
import OffshoreStaffing from '@/components/OffshoreStaffing';
import ContactCTA from '@/components/ContactCTA';
import ManualReviews from '@/components/ManualReviews';
import Footer from '@/components/Footer';
import SEOHelmet from '@/components/SEOHelmet';
import SchemaMarkup from '@/components/SchemaMarkup';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet 
        title="SEO Services Philippines | Professional SEO Consulting - Raja Sinha"
        description="Comprehensive SEO services including technical audits, content optimization, and search strategy. Proven results for 100+ businesses in Philippines and worldwide."
        keywords="SEO services Philippines, technical SEO audit, content optimization, search engine marketing, local SEO"
        canonicalUrl="https://rajasinhaseo.com/services"
      />
      <SchemaMarkup type="service" />
      
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesList />
        <OffshoreStaffing />
        <ContactCTA />
        <ManualReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
