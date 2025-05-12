
import React from 'react';
import { ArrowRight, Target, Users, Search, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyMe = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Me?</h2>
          <p className="text-xl text-gray-700 mb-4">
            I don't just think like an SEO — I think like a business owner.
          </p>
          <p className="text-lg text-gray-600">
            My approach is rooted in understanding your business goals, your customers, and your market. 
            I step into your shoes and look at SEO from your perspective, uncovering opportunities 
            that align with your bottom line — not just search rankings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {/* Differentiator 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Business-first mindset</h3>
              <p className="text-gray-600">I treat your business like my own, combining strategy with execution. 
              Every SEO decision I make is tied to your business objectives and ROI.</p>
            </div>
          </div>
          
          {/* Differentiator 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Customer-focused content</h3>
              <p className="text-gray-600">I study what your audience wants to read, watch, or search — and build around that. 
              SEO that resonates with real people gets real results.</p>
            </div>
          </div>
          
          {/* Differentiator 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <Search className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Competitive research built-in</h3>
              <p className="text-gray-600">I naturally dig into your competitors to craft a stronger, data-driven plan.
              You'll know exactly where you stand and how to outperform them.</p>
            </div>
          </div>
          
          {/* Differentiator 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <PieChart className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Low-friction execution</h3>
              <p className="text-gray-600">My process is collaborative, simple to follow, and designed to avoid the usual SEO confusion.
              You'll understand what we're doing at every step.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-medium mb-6">
              If you're done with vague SEO talk and want someone who's helped over 100 clients grow real traffic — 
              let's talk. I'll show you what's possible for your business and how we can get there.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-6 text-lg">
              Schedule Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
