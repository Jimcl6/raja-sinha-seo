
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock } from 'lucide-react';

const ThreeHourService = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Know what's going on with your website! — in <span className="text-yellow-600">Just 3 Hours</span>
            </h2>
            <div className="ml-4 h-12 w-12 bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Clock className="h-7 w-7" />
            </div>
          </div>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-yellow-200">
            <p className="font-feature italic text-2xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Get a Realistic Review.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-yellow-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Most of the time we are unsure of our own abilities. Your website is kind of like that.</h3>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">In just a few hours, you'll know:</h4>
              <ul className="space-y-4">
                {[
                  "What's holding you back",
                  "What to improve",
                  "If any opportunities are being missed",
                  "If you're on the right track."
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
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              <video 
                src="/lovable-uploads/706cfdb8-5287-4b23-93ea-7242119fe196.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
                onError={(e) => console.error('Video failed to load:', e)}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                <div className="text-center p-8 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="text-7xl font-bold text-white drop-shadow-lg">3</div>
                  <div className="text-3xl font-semibold text-white drop-shadow-lg">Hours</div>
                  <div className="mt-4 text-xl text-gray-100 drop-shadow-lg">
                    Quick diagnosis.<br />Lasting impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeHourService;
