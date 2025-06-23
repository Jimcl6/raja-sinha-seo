
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Book, Brain, ArrowRight, User, BookText, Sparkles, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* About Hero Section - similar to Services */}
        <div className="relative overflow-hidden bg-white pt-8 pb-10 md:pt-12 md:pb-14">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in mb-8">
                    <span className="gradient-text">About Raja Sinha</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-700 mb-8">
                    SEO consulting with a business-owner mindset and a passion for clarity.
                  </p>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg">
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                {/* Right side - Your photo */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-yellow-100">
                    <img 
                      src="/lovable-uploads/01ac6572-e5af-41d9-8f12-cf175b932d61.png" 
                      alt="Raja Sinha" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Introduction Section */}
        <section className="py-16 bg-[#f0f0f0]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-10">
                <div className="h-12 w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">👋 A Bit About Me — From Language Lover to SEO Guide</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6 text-gray-700">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                    <p className="pl-6 text-lg">
                      I've always been drawn to language and history — even as a kid with too much free time and too many books. 
                      That passion eventually led me to the world of business, where I graduated with a degree in Business Administration in 2002.
                    </p>
                  </div>
                  
                  <p className="pl-6 text-lg">
                    My professional journey began in real estate project management for a New Jersey-based firm. 
                    It was there I first started helping clients with virtual assistance — and thanks to their referrals, 
                    I built a strong reputation. But it was SEO that truly clicked for me.
                  </p>
                  
                  <Card className="border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-yellow-50 to-amber-50 border-2">
                    <CardContent className="p-6 relative">
                      <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-lg font-medium text-gray-800 italic">
                        "I realized I had a natural knack for understanding the meaning behind words — not just from a linguistic point of view, 
                        but also how search engines interpret them and how users respond to them."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p className="pl-6 text-lg">
                    That curiosity turned into skill, and over the years, into results for 100+ clients.
                  </p>
                  
                  <p className="pl-6 text-lg">
                    Today, I use that same clarity and love for language to help businesses make smarter, simpler SEO decisions. 
                    It might look complicated from the outside — but with the right guide, 
                    SEO becomes less of a mystery and more of a powerful tool.
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg border-l-4 border-yellow-500">
                    <p className="font-medium text-gray-800 text-lg">
                      If you want someone who can see your business the way a search engine does and the way a customer does — I'm your guy.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="sticky top-24">
                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-yellow-100 transform hover:scale-105 transition-transform duration-300">
                      <div className="aspect-w-4 aspect-h-3 w-full bg-gray-100">
                        <img 
                          src="/lovable-uploads/f58edded-4932-42c6-bd20-f5c5aa22069b.png" 
                          alt="Raja Sinha" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm text-gray-500">Diving deep into search analytics to uncover opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-200 shadow-lg mt-6">
                      <User className="h-8 w-8 text-yellow-600 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-800">100+ Clients</h3>
                        <p className="text-sm text-gray-600">Helped across various industries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results-Driven SEO Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-10">
                <div className="h-12 w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">🧠 SEO Is No Longer Just About Rankings — It's About Results</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div className="sticky top-24">
                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-yellow-100 transform hover:scale-105 transition-transform duration-300">
                      <div className="aspect-w-4 aspect-h-3 w-full bg-gray-100">
                        <img 
                          src="/lovable-uploads/01ac6572-e5af-41d9-8f12-cf175b932d61.png" 
                          alt="Raja Sinha - Turning complex data into actionable strategies" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm text-gray-500">Turning complex data into actionable strategies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-200 shadow-lg mt-6">
                      <BookText className="h-8 w-8 text-yellow-600 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-800">Beyond Rankings</h3>
                        <p className="text-sm text-gray-600">Focusing on conversions & revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6 text-gray-700">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                    <p className="pl-6 text-lg">
                      Over the years, I've done more than just study search engines. I've studied people.
                    </p>
                  </div>
                  
                  <p className="pl-6 text-lg">
                    I've read countless books, audited thousands of web pages, and observed how visitors behave — how they read, 
                    click, hesitate, or convert. I've noticed the small things that often go overlooked: the way color influences trust, 
                    how content is grouped into digestible sections, and how a simple change in a call-to-action button can drive 
                    (or destroy) conversions.
                  </p>
                  
                  <Card className="border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-yellow-50 to-amber-50 border-2">
                    <CardContent className="p-6 text-center relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Target className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-lg font-medium text-gray-800">
                        Many SEOs stop at rankings. But in reality, traffic without action is just noise.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-amber-100 p-8 rounded-lg border-l-4 border-yellow-500 shadow-lg">
                    <p className="text-xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent">
                      If visitors aren't engaging, calling, or buying — what good is being #1 on Google?
                    </p>
                  </div>
                  
                  <p className="pl-6 text-lg">
                    That's why my work goes beyond just bringing people to your site. I focus on what happens after they land. 
                    I look at how the page communicates, how it feels, and how it performs — not just technically, but psychologically. 
                    Because that's what turns rankings into revenue.
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <p className="font-medium text-gray-800 text-lg">
                      SEO today is part marketing, part UX, part content, part tech — and all about outcomes. 
                      That challenge? I live for it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-[#f0f0f0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rethink Your SEO?</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Let's have a conversation about your business goals and how smart, results-focused SEO can help you reach them.
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default About;
