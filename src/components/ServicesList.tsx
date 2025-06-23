
import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, FileText, Globe, Link2, TrendingUp, MapPin } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      title: "Site Audit",
      description: "Complete technical analysis of your website to identify issues and opportunities for improvement.",
      icon: Search,
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Keyword Research",
      description: "In-depth research to find the most valuable keywords for your business and niche.",
      icon: FileText,
      backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "On-Page SEO",
      description: "Optimization of your website's content, structure, and technical elements.",
      icon: Globe,
      backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Off-Page SEO",
      description: "Building authority through strategic link building and external optimization.",
      icon: Link2,
      backgroundImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "CRO - Conversion Rate Optimization",
      description: "Improving your website's ability to convert visitors into customers.",
      icon: TrendingUp,
      backgroundImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Local Maps Optimization & Local SEO",
      description: "Optimizing your business for local search results and Google My Business presence.",
      icon: MapPin,
      backgroundImage: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-8 bg-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">My Core Services</span>
          </h2>
          
          {/* Featured Image for SEO Services */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl">
              <img 
                src="/images/seo-services-featured.jpg" 
                alt="SEO Services - Analytics and optimization tools" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center mb-4">
                  <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="relative z-10">
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
