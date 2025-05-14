
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-20 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 lg:pr-8 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in">
              <span className="block">SEO using a</span>
              <span className="gradient-text">Business Owner's Mindset.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto lg:mx-0 slide-up">
              No Guesswork, Only Results!
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-2 max-w-2xl mx-auto lg:mx-0 slide-up">
              15+ years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                See My Work
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] shadow-xl">
              <img 
                src="/lovable-uploads/01f2c3c0-50d7-402a-a117-fdfa3ca7750e.png" 
                alt="Raja Sinha" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
