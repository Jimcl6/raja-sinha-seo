
import React from 'react';
import { HelpCircle, Clock, BarChart2 } from 'lucide-react';
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
            Not sure it works? Gave up on it? Just cruising?<br></br>
            I’ll meet you there—and help you see what your site could really do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Client Type 1 */}
          <Card className="border-l-4 border-l-amber-500 shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <div className="h-12 w-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6" />
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
              <div className="h-12 w-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
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
              <div className="h-12 w-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6" />
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
        
        <div className="mt-14 bg-yellow-50 rounded-lg p-8 shadow-inner max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-medium text-yellow-700 mb-2">Data-first</h4>
              <p className="text-gray-600">I use audits, analytics, and market research to guide every recommendation.</p>
            </div>
            <div>
              <h4 className="font-medium text-yellow-700 mb-2">Plain language</h4>
              <p className="text-gray-600">I simplify the strategy so you understand what we're doing and why.</p>
            </div>
            <div>
              <h4 className="font-medium text-yellow-700 mb-2">Result-focused</h4>
              <p className="text-gray-600">You'll know exactly what results to expect — and when.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Let's Talk About Your SEO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHelp;
