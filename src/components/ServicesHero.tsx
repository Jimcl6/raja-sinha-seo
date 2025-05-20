
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in mb-6">
              <span className="gradient-text">Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto lg:mx-0 slide-up mb-8">
              Strategic SEO services designed to grow your business with measurable results. 
              No fluff, no guesswork — just expert-level optimization that actually works.
            </p>
            
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6"
              onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-[#f0f0f0] w-full max-w-md aspect-[4/3]">
              <img 
                src="/lovable-uploads/7532a2f8-b4e4-437a-80c4-28235766761e.png" 
                alt="Raja Sinha SEO Consultancy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0f0f0]/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
