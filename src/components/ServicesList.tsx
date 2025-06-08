
import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, FileText, Globe, Link2, TrendingUp } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      title: "Site Audit",
      description: "Complete technical analysis of your website to identify issues and opportunities for improvement.",
      icon: Search
    },
    {
      title: "Keyword Research",
      description: "In-depth research to find the most valuable keywords for your business and niche.",
      icon: FileText
    },
    {
      title: "On-Page SEO",
      description: "Optimization of your website's content, structure, and technical elements.",
      icon: Globe
    },
    {
      title: "Off-Page SEO",
      description: "Building authority through strategic link building and external optimization.",
      icon: Link2
    },
    {
      title: "CRO - Conversion Rate Optimization",
      description: "Improving your website's ability to convert visitors into customers.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 bg-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Core Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
