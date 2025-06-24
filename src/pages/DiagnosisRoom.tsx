import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualReviews from '@/components/ManualReviews';
import { Monitor, Search, BookOpen } from 'lucide-react';

const DiagnosisRoom = () => {
  // Sample diagnoses - in a real app, these would come from a database or API
  const diagnoses = [
    {
      id: 1,
      title: "E-commerce Site Speed Analysis",
      summary: "How a slow checkout process was costing this brand $10k monthly in abandoned carts",
      date: "May 4, 2025",
      image: "/placeholder.svg",
      tags: ["Performance", "E-commerce", "Conversion"]
    },
    {
      id: 2,
      title: "Local Business SEO Teardown",
      summary: "Fixing these 3 critical errors doubled this plumbing company's leads in 30 days",
      date: "April 27, 2025",
      image: "/placeholder.svg",
      tags: ["Local SEO", "Google Business", "Service Industry"]
    },
    {
      id: 3,
      title: "Content Strategy Review",
      summary: "Why this blog's traffic plateaued and the content restructure that fixed it",
      date: "April 15, 2025",
      image: "/placeholder.svg",
      tags: ["Content", "Information Architecture", "User Experience"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">The Diagnosis Room</h1>
              <p className="text-xl text-gray-700">
                Deep dive analyses of real websites, showing what works, what doesn't, and how to fix it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Technical Analysis</h3>
                <p className="text-gray-600">Uncovering hidden issues that impact rankings and conversions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">SEO Deep Dives</h3>
                <p className="text-gray-600">Revealing opportunities competitors are missing.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Action Plans</h3>
                <p className="text-gray-600">Clear steps to implement fixes and see real results.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Recent Diagnoses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diagnoses.map((diagnosis) => (
                <div key={diagnosis.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <img 
                    src={diagnosis.image} 
                    alt={diagnosis.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{diagnosis.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{diagnosis.date}</p>
                    <p className="text-gray-700 mb-4">{diagnosis.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {diagnosis.tags.map((tag, index) => (
                        <span key={index} className="bg-yellow-50 text-yellow-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="mt-6 text-yellow-600 font-medium hover:text-yellow-700 flex items-center">
                      Read full analysis
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium">
                View All Diagnoses
              </button>
            </div>
          </div>
        </section>
        <ManualReviews />
      </main>
      <Footer />
    </div>
  );
};

export default DiagnosisRoom;
