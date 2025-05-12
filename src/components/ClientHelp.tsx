
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClientHelp = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who I Help — No Matter Where You're Starting From
          </h2>
          <p className="text-lg text-gray-600">
            Not sure it works? Gave up on it? Just cruising?<br />
            I'll meet you there—and help you see what your site could really do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Client Type 1 */}
          <Card className="border-l-4 border-l-amber-500 shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <div className="h-60 w-full mb-4 overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/ab917ca6-9ea5-4dfe-a98e-d1a011a2e0d7.png" 
                  alt="Person looking at whiteboard" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardTitle className="text-xl">"I Don't Believe in SEO"</CardTitle>
              <CardDescription>You've heard SEO takes forever, or maybe you've been burned by empty promises.</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-yellow-600 mb-3">How I Help:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I break down exactly how SEO works in your industry using real data.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I'll show you what your competitors are doing — and what you're missing.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>You'll understand what SEO can (and can't) do — with realistic expectations.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Client Type 2 */}
          <Card className="border-l-4 border-l-red-500 shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <div className="h-60 w-full mb-4 overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/fe13677c-0be4-4f97-ae0d-247950c900cf.png" 
                  alt="Person writing on paper" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-xl">"I Tried SEO But Gave Up"</CardTitle>
              <CardDescription>You invested in SEO, didn't see results, and moved on.</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-yellow-600 mb-3">How I Help:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I audit what was done and where it went wrong.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I explain everything in plain English — not technical jargon.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I give you a clear, simple plan to fix it — and show you the results you should have gotten.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Client Type 3 */}
          <Card className="border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <div className="h-60 w-full mb-4 overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/2ae0e69e-ecbe-4f74-aedd-6a44808a3664.png" 
                  alt="Person looking at city view" 
                  className="w-full h-full object-cover object-center-bottom"
                  style={{ objectPosition: '70% 50%' }}
                />
              </div>
              <CardTitle className="text-xl">"I'm Doing Okay — But Not Growing"</CardTitle>
              <CardDescription>You're ranking for a few keywords and getting some traffic — but it's not moving the needle.</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-yellow-600 mb-3">How I Help:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I benchmark your current SEO against top performers in your space.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I reveal hidden opportunities for growth (technical, content, or backlinks).</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-yellow-500 mr-2">•</span>
                  <span>I map out what it will take to move from "okay" to dominating your niche.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientHelp;
