
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type?: 'website' | 'person' | 'service' | 'article' | 'contact';
  data?: Record<string, any>;
}

const SchemaMarkup = ({ type = 'website', data = {} }: SchemaMarkupProps) => {
  const getSchemaData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'website':
        return {
          ...baseSchema,
          "@type": "WebSite",
          "name": "Raja Sinha SEO Consultancy",
          "url": "https://rajasinhaseo.com",
          "description": "SEO Consultancy Philippines that works for any business. Contact Raja to Audit, Make SEO Recommendations and Fix your website for Search.",
          "author": {
            "@type": "Person",
            "name": "Raja Sinha",
            "jobTitle": "SEO Consultant",
            "url": "https://rajasinhaseo.com/about"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://rajasinhaseo.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'person':
        return {
          ...baseSchema,
          "@type": "Person",
          "name": "Raja Sinha",
          "jobTitle": "SEO Consultant & Digital Marketing Expert",
          "description": "Experienced SEO consultant helping 100+ businesses improve their search rankings and online visibility.",
          "url": "https://rajasinhaseo.com",
          "sameAs": [
            "https://rajasinhaseo.com/about"
          ],
          "knowsAbout": [
            "Search Engine Optimization",
            "Digital Marketing",
            "Technical SEO",
            "Content Strategy",
            "Local SEO"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "SEO Consultant",
            "description": "Provides SEO audits, recommendations, and optimization services for businesses"
          }
        };

      case 'service':
        return {
          ...baseSchema,
          "@type": "Service",
          "name": "SEO Consultancy Services",
          "description": "Professional SEO services including audits, technical optimization, and search strategy consulting.",
          "provider": {
            "@type": "Person",
            "name": "Raja Sinha",
            "jobTitle": "SEO Consultant"
          },
          "areaServed": "Philippines",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SEO Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Audit",
                  "description": "Comprehensive website SEO analysis and recommendations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical SEO",
                  "description": "Technical website optimization for better search performance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Consulting",
                  "description": "Strategic SEO guidance and implementation support"
                }
              }
            ]
          }
        };

      case 'contact':
        return {
          ...baseSchema,
          "@type": "ContactPage",
          "name": "Contact Raja Sinha SEO Consultant",
          "description": "Get in touch with Raja Sinha for SEO consultation and digital marketing services.",
          "mainEntity": {
            "@type": "Person",
            "name": "Raja Sinha",
            "jobTitle": "SEO Consultant",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business",
              "availableLanguage": ["English"]
            }
          }
        };

      default:
        return baseSchema;
    }
  };

  const schemaData = { ...getSchemaData(), ...data };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
