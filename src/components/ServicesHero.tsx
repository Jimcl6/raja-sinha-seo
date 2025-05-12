
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in mb-6">
            <span className="gradient-text">Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto slide-up mb-8">
            Strategic SEO services designed to grow your business with measurable results. 
            No fluff, no guesswork — just expert-level optimization that actually works.
          </p>
          
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
            Book a Free Strategy Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
