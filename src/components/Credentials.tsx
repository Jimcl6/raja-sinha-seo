
import React from 'react';
import { CheckCircle2, Award, TrendingUp, Globe2 } from 'lucide-react';

const Credentials = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background image - mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img 
          src="/lovable-uploads/ac8f2cbd-04d3-48e0-a8ff-61232f06fd01.png" 
          alt="Credentials background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-500/20"></div>
      </div>
      
      {/* Background image - desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img 
          src="/lovable-uploads/ff650090-8b4f-448e-9ad3-b1ce320f3b1b.png" 
          alt="Credentials background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-500/20"></div>
      </div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Credentials You Can Trust
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Credential 1 */}
          <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">15+ Years Experience</h3>
            <p className="text-gray-600">Long-term expertise in SEO and digital marketing strategies</p>
          </div>
          
          {/* Credential 2 */}
          <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Business Leader</h3>
            <p className="text-gray-600">Former CEO of Filsupport BPO & Redkite Digital Marketing</p>
          </div>
          
          {/* Credential 3 */}
          <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Global Experience</h3>
            <p className="text-gray-600">Worked with client in the US | UK | AUS | SE ASIAN Markets</p>
          </div>
          
          {/* Credential 4 */}
          <div className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Proven Results</h3>
            <p className="text-gray-600">Helped rank 100s of web-pages to achieve measurable SEO growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
