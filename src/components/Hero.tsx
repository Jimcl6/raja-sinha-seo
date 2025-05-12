
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in">
              <span className="block">SEO using a</span>
              <span className="gradient-text">Business Owner's Mindset.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0 slide-up">
              No Guesswork, Only Results!
            </p>
            <br>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0 slide-up">
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
          
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-100 shadow-xl">
              <img 
                src="/lovable-uploads/7806e948-dad2-4255-b973-64a352c4a0df.png" 
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
