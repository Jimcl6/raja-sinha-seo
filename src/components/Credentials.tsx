
import React from 'react';
import { CheckCircle2, Award, TrendingUp, Globe2 } from 'lucide-react';

const Credentials = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background image - mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img 
          src="/lovable-uploads/5d5a7b63-e3d3-4736-bb67-d4d78c04ea39.png" 
          alt="My Background" 
          className="w-full h-full object-cover blur-sm"
        />
      </div>
      
      {/* Background image - desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img 
          src="/lovable-uploads/979d3dda-0bcf-4b5a-b1c6-7c6355704aa5.png" 
          alt="Professional background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-500/20"></div>
      </div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:text-white">
          <span className="gradient-text md:text-white">My Background</span>
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
