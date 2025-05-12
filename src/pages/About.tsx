
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Book, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* About Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Me</h1>
              <p className="text-xl text-gray-600">
                SEO consulting with a business-owner mindset and a passion for clarity.
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Book className="h-8 w-8 mr-3 text-yellow-500" />
                <h2 className="text-3xl font-bold">👋 A Bit About Me — From Language Lover to SEO Guide</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  I've always been drawn to language and history — even as a kid with too much free time and too many books. 
                  That passion eventually led me to the world of business, where I graduated with a degree in Business Administration in 2002.
                </p>
                
                <p>
                  My professional journey began in real estate project management for a New Jersey-based firm. 
                  It was there I first started helping clients with virtual assistance — and thanks to their referrals, 
                  I built a strong reputation. But it was SEO that truly clicked for me.
                </p>
                
                <p>
                  I realized I had a natural knack for understanding the meaning behind words — not just from a linguistic point of view, 
                  but also how search engines interpret them and how users respond to them. 
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
            </div>
          </div>
        </section>
        
        <Separator className="max-w-4xl mx-auto" />
        
        {/* Results-Driven SEO Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 mr-3 text-yellow-500" />
                <h2 className="text-3xl font-bold">🧠 SEO Is No Longer Just About Rankings — It's About Results</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Over the years, I've done more than just study search engines. I've studied people.
                </p>
                
                <p>
                  I've read countless books, audited thousands of web pages, and observed how visitors behave — how they read, 
                  click, hesitate, or convert. I've noticed the small things that often go overlooked: the way color influences trust, 
                  how content is grouped into digestible sections, and how a simple change in a call-to-action button can drive 
                  (or destroy) conversions.
                </p>
                
                <p>
                  Many SEOs stop at rankings. But in reality, traffic without action is just noise.
                </p>
                
                <p className="font-medium text-lg my-6 text-center">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
