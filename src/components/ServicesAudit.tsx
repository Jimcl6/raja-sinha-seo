
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, Wrench } from 'lucide-react';

const ServicesAudit = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-20 w-20 bg-[#f0f0f0] text-yellow-600 rounded-full flex items-center justify-center">
                <Wrench className="h-10 w-10" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🔧 What I Do <span className="text-gray-500 font-normal">(AKA: What Your Website Really Needs)</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                It all starts with a deep dive — a full audit of your site from top to bottom. 
                I don't just run reports. I diagnose. I look for what's holding you back and 
                what could push you forward. Then, we move smart.
              </p>
              
              <Card className="p-6 bg-[#f0f0f0] border-[#f0f0f0] mb-8">
                <h3 className="text-xl font-bold mb-4">✅ Core Audit Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Technical SEO check (site speed, indexing, metadata, structure)",
                    "Backlink review + competitor link gap analysis",
                    "Keyword research that fits your niche and goals",
                    "Google Search Console & Analytics insights",
                    "Google Business Profile optimization",
                    "Conversion Rate Optimization (CRO) audit",
                    "Design & UX review (forms, flow, mobile usability)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-black mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <p className="text-lg text-gray-700">
                Whether you're just getting started or need a second pair of expert eyes, 
                I'll show you what's working, what's not, and how to fix it — fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAudit;
