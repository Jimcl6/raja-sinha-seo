
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-4">
          <div className="w-full lg:w-1/2 lg:pr-2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in">
              <span className="block">SEO using a</span>
              <span className="gradient-text">Business Owner's Mindset.</span>
            </h1>
            
            <div className="space-y-1">
              <p className="text-base md:text-lg font-feature italic text-gray-600 max-w-2xl mx-auto lg:mx-0 slide-up">
                No Guesswork, Only Results!
              </p>
              <p className="text-xl md:text-2xl text-yellow-600 font-bold max-w-2xl mx-auto lg:mx-0 slide-up">
                15+ years of experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6"
                onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/work">
                <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                  See My Work
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] lg:w-[640px] lg:h-[320px] shadow-xl">
              <img 
                src={isMobile ? "/lovable-uploads/4fd4f384-f1e3-43cf-a4d6-47d63f82355d.png" : "/lovable-uploads/17c4546a-e074-47c2-ae56-740cfb1b308e.png"}
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
