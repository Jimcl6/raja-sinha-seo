
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock } from 'lucide-react';

const ThreeHourService = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Fix, Repair & Improve Your Website — in <span className="text-yellow-500">Just 3 Hours</span>
            </h2>
            <div className="ml-3 h-10 w-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="h-6 w-6" />
            </div>
          </div>
          <p className="font-feature italic text-xl text-gray-700 max-w-3xl mx-auto">
            Get a Full Expert Diagnosis that shows you exactly<br />
            what's working, what's not, and what to fix — fast.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-600">
              Whether you have an in-house SEO team or you're just starting out, this is your chance to get an honest, 
              technical, and practical third-party review of your website's performance.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">In just a few hours, you'll know:</h3>
              <ul className="space-y-3">
                {[
                  "Where your website is holding back your business",
                  "What to improve for better traffic, visibility, and engagement",
                  "What your current team (or agency) may have missed",
                  "If you're on the right track — or drifting from your goals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-yellow-100 bg-white">
              <CardContent className="pt-6">
                <p className="text-lg font-medium">
                  If you need help implementing changes.
                </p>
                <p className="text-yellow-600 font-semibold mt-2 mb-4">
                  I can take you further.
                </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
                >
                  Book A Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/42e582af-f809-4f7f-86a7-6bceebf8a973.png" 
                alt="Raja Sinha" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-black/40 rounded-xl backdrop-blur-sm">
                  <div className="text-6xl font-bold text-white">3</div>
                  <div className="text-2xl font-semibold text-white">Hours</div>
                  <div className="mt-4 text-lg text-gray-100">
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
