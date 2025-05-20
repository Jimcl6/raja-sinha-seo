
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

const SeeMyWork = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Craft Restaurant",
      subtitle: "Local Restaurant Website Redesign",
      description: "A complete website redesign to reflect the restaurant's unique ambiance, improve user experience for online reservations, and optimize for local search.",
      challenge: "The restaurant's old website was outdated, slow, and not mobile-friendly, leading to a poor user experience and missed reservation opportunities.",
      solution: "I redesigned the website with a modern, responsive layout that captures the restaurant's ambiance. Implemented an optimized reservation system and location-based SEO.",
      results: "50% increase in online reservations, 35% increase in organic traffic, and first-page Google ranking for key local search terms.",
      image: "/lovable-uploads/d99b57ad-f414-4fe6-96c1-7ce95c64cafa.png"
    },
    {
      id: 2,
      title: "Cogniwise Solutions",
      subtitle: "IT Consultancy SEO Overhaul",
      description: "Strategic SEO implementation for an IT consultancy to increase their visibility in a competitive market and generate quality leads.",
      challenge: "Despite offering excellent services, the company struggled with online visibility and lead generation in a saturated market.",
      solution: "I developed and executed a comprehensive SEO strategy focusing on technical optimization, content marketing, and authority building through targeted outreach.",
      results: "120% increase in organic traffic within 6 months, 15 new keyword rankings on page 1 of Google, and 40% increase in qualified leads.",
      image: "/lovable-uploads/7c92d583-54d0-4eb5-8bb2-cbdc4c147313.png"
    },
    {
      id: 3,
      title: "Bloom Boutique",
      subtitle: "E-commerce Conversion Optimization",
      description: "E-commerce optimization project focusing on increasing conversion rates and average order value for a fashion boutique.",
      challenge: "The store had good traffic but suffered from poor conversion rates, high cart abandonment, and low average order values.",
      solution: "I implemented a comprehensive CRO strategy including streamlined checkout process, improved product pages, strategic cross-selling, and data-driven A/B testing.",
      results: "75% increase in conversion rate, 30% reduction in cart abandonment, and 25% increase in average order value.",
      image: "/lovable-uploads/7532a2f8-b4e4-437a-80c4-28235766761e.png"
    },
    {
      id: 4,
      title: "Wellness Hub",
      subtitle: "Healthcare Provider Content Strategy",
      description: "Developing and implementing a comprehensive content strategy for a healthcare provider to establish thought leadership and patient trust.",
      challenge: "The client needed to distinguish themselves in a crowded healthcare market and build patient trust through authoritative content.",
      solution: "I developed a multi-channel content strategy focusing on educational content, patient testimonials, and thought leadership pieces distributed across their website, social media, and email campaigns.",
      results: "200% increase in blog traffic, 45% growth in email subscribers, and significant improvement in patient acquisition from digital channels.",
      image: "/lovable-uploads/57b027fb-50e3-4ee9-a558-f9ee7d926667.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Case Studies</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Explore how my strategic SEO expertise has helped businesses transform their digital presence and achieve measurable results.
            </p>
          </div>
        </div>
        
        {/* Case Studies */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                  <CardDescription className="text-lg text-yellow-600 font-medium">{study.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-800">Challenge:</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-800">Solution:</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-800">Results:</h3>
                      <p className="text-gray-600">{study.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeeMyWork;
