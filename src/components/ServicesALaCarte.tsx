
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const ServicesALaCarte = () => {
  return (
    <section className="py-16 bg-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            🧩 A La Carte Services
          </h2>
          
          <p className="text-xl text-center mb-12 text-gray-700">
            Need just one piece of the puzzle? I also offer:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "In-depth backlink analysis",
              "Local SEO tuning",
              "Content planning & page improvements",
              "Metadata & on-page SEO fixes",
              "Strategy consulting — for teams or solo founders"
            ].map((service, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                <span className="text-lg">{service}</span>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you're just getting started or need a second pair of expert eyes, 
              I'll show you what's working, what's not, and how to fix it — fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesALaCarte;
