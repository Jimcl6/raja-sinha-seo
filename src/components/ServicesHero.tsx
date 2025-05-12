
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
            
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-yellow-100 w-full max-w-md aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="SEO Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
