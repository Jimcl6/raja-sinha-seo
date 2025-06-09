
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ThreeHourService = () => {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/f740e973-ca88-4fc1-8d18-5ba333c546cc.png')"
        }}
      ></div>
      
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Think your website could do better?
          </h2>
          <p className="text-2xl text-white font-semibold">
            I'll tell you — for free.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-yellow-100 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">What you'll receive:</h3>
            <ul className="space-y-4">
              {[
                "A no-pressure PDF with key findings",
                "Clear takeaways on how to move forward",
                "No jargon, no cookie-cutter checklists — just pure insight",
                "A 3-hour review, but a long-lasting impact"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-white font-semibold mb-6 italic">IT'S A REAL REVIEW!</p>
            <Button 
              size="lg" 
              className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
              onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
            >
              Get Yours Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeHourService;
