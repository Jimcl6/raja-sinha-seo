
import React from 'react';
import { ArrowDown } from 'lucide-react';

const ServicesHero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-8 pb-10 md:pt-12 md:pb-14">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in mb-8">
                <span className="gradient-text">Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Most companies hire me for SEO.<br />
                <br />
                Once they see the value of outsourcing, they ask me to recruit talent for graphics, video editing, programming, IT, and more.<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">Scroll to know more.</span>
              </p>
              
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="animate-bounce">
                  <ArrowDown className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
            </div>
            
            {/* Right side - Your photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/0895bd47-f1dd-414a-8399-50741dbb6089.png" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
