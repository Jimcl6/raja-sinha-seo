
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Palette, Code, Zap, Video, Brain } from 'lucide-react';

const OffshoreStaffing = () => {
  const staffingServices = [
    {
      title: "SEO & Marketing Teams",
      description: "Dedicated SEO specialists and marketing professionals to scale your campaigns.",
      icon: Users
    },
    {
      title: "Graphic Design Support",
      description: "Creative professionals skilled in Canva and advanced graphic design tools.",
      icon: Palette
    },
    {
      title: "Web Development",
      description: "From basic web solutions to advanced application development and prompting solutions.",
      icon: Code
    },
    {
      title: "Video Editing",
      description: "Professional video editing services for your marketing and content needs.",
      icon: Video
    },
    {
      title: "AI Prompting Specialists",
      description: "Experts in AI prompting and optimization for various AI tools and applications.",
      icon: Brain
    },
    {
      title: "Technical Support",
      description: "Comprehensive technical support for your digital marketing and development needs.",
      icon: Zap
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Remote & Offshore Staffing Solutions</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Build your own dedicated team in the Philippines with skilled professionals 
              who can handle your marketing, design, and development needs.
            </p>
          </div>
          
          {/* Featured Image for Remote Team */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl">
              <img 
                src="/images/remote-team-featured.jpg" 
                alt="Remote team collaboration and offshore staffing" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {staffingServices.map((service, index) => (
              <Card key={index} className="p-6 bg-[#f0f0f0] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you need ongoing support or want to build a dedicated team, 
              I can help you find and manage skilled professionals who align with your goals and budget.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8"
              onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
            >
              Discuss Your Team Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreStaffing;
