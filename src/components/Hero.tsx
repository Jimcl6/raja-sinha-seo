
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in">
              <span className="block">SEO That</span>
              <span className="gradient-text">Thinks Ahead</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0 slide-up">
              I help businesses rank faster and smarter by combining 15+ years of SEO expertise with a business owner's mindset. No guesswork, just results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                See My Work
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl">
                Your Photo Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
