
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLogos from '@/components/ClientLogos';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactImage from '@/components/ContactImage';
import ContactSuccessMessage from '@/components/ContactSuccessMessage';
import ManualReviews from '@/components/ManualReviews';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const handleSuccess = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center">
            <span className="gradient-text">Contact Me</span>
          </h1>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto font-feature italic text-gray-600">
            Not for nothing, but if you're here for SEO — you came to the right place.
          </p>

          {/* Mobile image - only visible on mobile */}
          {isMobile && (
            <div className="mb-8 mx-4">
              <ContactImage />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto mt-12">
            {/* Left column with image and contact info - hidden on mobile */}
            <div className={`flex flex-col justify-center ${isMobile ? 'hidden' : 'block'}`}>
              <ContactImage />
              <ContactInfo />
            </div>

            {/* Right column with form */}
            <div className="relative">
              {/* Form content */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                {!submitted ? (
                  <ContactForm onSuccess={handleSuccess} />
                ) : (
                  <ContactSuccessMessage onReset={handleReset} />
                )}
              </div>
            </div>
          </div>

          {/* Mobile contact info - only visible on mobile */}
          {isMobile && (
            <div className="mt-8 mx-4">
              <ContactInfo />
            </div>
          )}

          {/* Client Logos moved below the form and contact info */}
          <div className="mt-16">
            <ClientLogos />
          </div>
        </div>
        <ManualReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
