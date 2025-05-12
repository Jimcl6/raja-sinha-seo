
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesScaling = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* First Section: Traffic Growth */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="h-20 w-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-10 w-10" />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">
                  🚀 When Traffic Grows, So Should You
                </h2>
                
                <p className="text-lg text-gray-700 mb-8">
                  Once SEO starts working (and it will), you'll likely need more than just rankings — 
                  you'll need the right people to support the growth.
                </p>
                
                <Card className="p-6 bg-yellow-50 border-yellow-100 mb-8">
                  <h3 className="text-xl font-bold mb-4">🧑‍💻 Scalable SEO & Marketing Support</h3>
                  <ul className="space-y-3">
                    {[
                      "Access to trained designers, developers, and content creators",
                      "Custom-built folders, decks, and visual assets for marketing use",
                      "Ongoing SEO execution powered by a dedicated offshore team",
                      "White-label support or in-house SEO team setups",
                      "Senior consultant oversight to keep strategy sharp and results moving"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                
                <p className="text-lg text-gray-700">
                  Whether you want to build your own in-house SEO team or just need trusted people 
                  to get things done, I can help you scale smart — without the hiring headaches.
                </p>
              </div>
            </div>
          </div>
          
          {/* Second Section: Offshore Staffing */}
          <div className="mt-20">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="h-20 w-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                  <Users className="h-10 w-10" />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">
                  🌏 Offshore Staffing That Scales With You
                </h2>
                
                <p className="text-lg text-gray-700 mb-8">
                  As your traffic and business grow, you'll need reliable, skilled people to help you 
                  keep the momentum. The good news? You don't have to build it all alone.
                </p>
                
                <p className="text-lg text-gray-700 mb-8">
                  I connect clients from the US, UK, Australia, and Southeast Asia with top-tier 
                  Filipino talent — from essential support to advanced roles.
                </p>
                
                <Card className="p-6 bg-yellow-50 border-yellow-100 mb-8">
                  <h3 className="text-xl font-bold mb-4">💼 Roles We Can Help You Fill:</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">General support:</h4>
                      <p>Virtual assistants, customer service reps, email marketers, data entry</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Specialized talent:</h4>
                      <p>SEO specialists, web designers, developers, content writers, application testers</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cutting-edge support:</h4>
                      <p>AI prompt engineers, automation assistants, and analytics pros</p>
                    </div>
                  </div>
                </Card>
                
                <p className="text-lg text-gray-700 mb-8">
                  All team members are trained to align with your goals and are guided by senior 
                  consultants (like me) to ensure your strategy stays on track.
                </p>
                
                <p className="text-lg text-gray-700">
                  Whether you're growing fast or just want more done without burning out your 
                  in-house team — we help you scale smart, affordably, and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
            Let's Talk About Your Team Needs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesScaling;
