
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Book, Brain, ArrowRight, User, BookText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* About Hero with gradient background */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-12 space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
                  <span className="block">About</span>
                  <span className="gradient-text">Raja Sinha</span>
                </h1>
                <p className="text-xl text-gray-600 slide-up">
                  SEO consulting with a business-owner mindset and a passion for clarity.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-100 shadow-xl">
                  <img 
                    src="/lovable-uploads/01ac6572-e5af-41d9-8f12-cf175b932d61.png" 
                    alt="Raja Sinha" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction Section with Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center mb-10">
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <Book className="h-6 w-6 text-yellow-500" />
                </div>
                <h2 className="text-3xl font-bold">👋 A Bit About Me — From Language Lover to SEO Guide</h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-2/3 space-y-4 text-gray-700">
                  <p>
                    I've always been drawn to language and history — even as a kid with too much free time and too many books. 
                    That passion eventually led me to the world of business, where I graduated with a degree in Business Administration in 2002.
                  </p>
                  
                  <p>
                    My professional journey began in real estate project management for a New Jersey-based firm. 
                    It was there I first started helping clients with virtual assistance — and thanks to their referrals, 
                    I built a strong reputation. But it was SEO that truly clicked for me.
                  </p>
                  
                  <Card className="border-yellow-100 shadow-lg hover:shadow-xl transition-shadow my-6 bg-yellow-50 bg-opacity-50">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium text-gray-800 italic">
                        "I realized I had a natural knack for understanding the meaning behind words — not just from a linguistic point of view, 
                        but also how search engines interpret them and how users respond to them."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p>
                    That curiosity turned into skill, and over the years, into results for 100+ clients.
                  </p>
                  
                  <p>
                    Today, I use that same clarity and love for language to help businesses make smarter, simpler SEO decisions. 
                    It might look complicated from the outside — but with the right guide, 
                    SEO becomes less of a mystery and more of a powerful tool.
                  </p>
                  
                  <p>
                    If you want someone who can see your business the way a search engine does and the way a customer does — I'm your guy.
                  </p>
                </div>
                
                <div className="md:w-1/3">
                  <div className="sticky top-24 space-y-6">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                      <div className="aspect-w-4 aspect-h-3 w-full bg-gray-100">
                        <img 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Working on SEO" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm text-gray-500">Diving deep into search analytics to uncover opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <User className="h-8 w-8 text-yellow-500 mr-3" />
                      <div>
                        <h3 className="font-medium">100+ Clients</h3>
                        <p className="text-sm text-gray-600">Helped across various industries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-5xl mx-auto" />
        
        {/* Results-Driven SEO Section with Visual Elements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center mb-10">
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-yellow-500" />
                </div>
                <h2 className="text-3xl font-bold">🧠 SEO Is No Longer Just About Rankings — It's About Results</h2>
              </div>
              
              <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-24 space-y-6">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                      <div className="aspect-w-4 aspect-h-3 w-full bg-gray-100">
                        <img 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="SEO Strategy Session" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm text-gray-500">Turning complex data into actionable strategies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <BookText className="h-8 w-8 text-yellow-500 mr-3" />
                      <div>
                        <h3 className="font-medium">Beyond Rankings</h3>
                        <p className="text-sm text-gray-600">Focusing on conversions & revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-4 text-gray-700">
                  <p>
                    Over the years, I've done more than just study search engines. I've studied people.
                  </p>
                  
                  <p>
                    I've read countless books, audited thousands of web pages, and observed how visitors behave — how they read, 
                    click, hesitate, or convert. I've noticed the small things that often go overlooked: the way color influences trust, 
                    how content is grouped into digestible sections, and how a simple change in a call-to-action button can drive 
                    (or destroy) conversions.
                  </p>
                  
                  <Card className="border-yellow-100 shadow-lg hover:shadow-xl transition-shadow my-6 bg-yellow-50 bg-opacity-50">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium text-gray-800 text-center">
                        Many SEOs stop at rankings. But in reality, traffic without action is just noise.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p className="font-medium text-lg my-6 text-center bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    If visitors aren't engaging, calling, or buying — what good is being #1 on Google?
                  </p>
                  
                  <p>
                    That's why my work goes beyond just bringing people to your site. I focus on what happens after they land. 
                    I look at how the page communicates, how it feels, and how it performs — not just technically, but psychologically. 
                    Because that's what turns rankings into revenue.
                  </p>
                  
                  <p>
                    SEO today is part marketing, part UX, part content, part tech — and all about outcomes. 
                    That challenge? I live for it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Rethink Your SEO?</h2>
              <p className="text-lg text-gray-600 mb-8">
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
