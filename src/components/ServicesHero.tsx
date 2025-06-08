
import React from 'react';
import { ArrowDown } from 'lucide-react';

const ServicesHero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in mb-8">
            <span className="gradient-text">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            This is how I help my clients
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="animate-bounce">
              <ArrowDown className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          
          <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80" 
              alt="Professional SEO Services" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
