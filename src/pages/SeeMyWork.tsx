
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
      title: "Luxury Real Estate Brokerage",
      subtitle: "From Page 2 to Top Rankings",
      description: "A luxury real estate brokerage that was stuck on page 2 and below for desired keywords for over 2 years.",
      challenge: "Client's keywords were stuck in Pages 2-5 for desired keywords, limiting their visibility in a competitive market.",
      solution: "We identified that the problem was primarily in their technical SEO implementation. Several basic SEO requirements were not properly addressed.",
      results: "Within just 2 months, most of their keywords moved to Page 1, with their primary keywords reaching the coveted Position 1 on Page 1.",
      image: "/lovable-uploads/d99b57ad-f414-4fe6-96c1-7ce95c64cafa.png"
    },
    {
      id: 2,
      title: "High End Criminal Defense Attorney",
      subtitle: "Building Online Presence From Scratch",
      description: "A high-end criminal defense attorney with no website or online traffic needed to establish a strong digital presence.",
      challenge: "The client had no website and zero online traffic, making it difficult to attract potential clients in a competitive legal market.",
      solution: "We created a website designed to appeal to both the attorney and their target clients. We carefully analyzed and categorized keywords based on search volume and user intent, separating them into primary and secondary targets.",
      results: "In just 3 months, the site reached Page 3, and by 5 months we secured Page 1 rankings. When Google Maps reduced local results from 7 to 3, we pivoted to focus on local Maps optimization, securing top 3 positions for all desired keywords. We also reduced bounce rates and increased conversion on 'Free Consultation' buttons, generating more clients than ever before.",
      image: "/lovable-uploads/7c92d583-54d0-4eb5-8bb2-cbdc4c147313.png"
    },
    {
      id: 3,
      title: "Start-up Company in Philippines",
      subtitle: "From 110 to 10,000+ Monthly Visitors",
      description: "A start-up hiking company in the Philippines needed comprehensive help with their online presence and business operations.",
      challenge: "The company had minimal website traffic (<110 visits monthly) and needed help with their entire business model including web technology for hike schedules, bookings, and online payments with minimal manual intervention.",
      solution: "We conducted a complete analysis of their website, business model, marketing strategy, and administration processes. Our team built a new website with significant input from our creative team for both frontend and backend design.",
      results: "We successfully ranked them for the top 40 most hiked mountains in the Philippines, all on Page 1 (Ranks 1-5). Their customer base grew rapidly, which attracted hiking gear sponsors to their website, creating additional revenue streams.",
      image: "/lovable-uploads/7532a2f8-b4e4-437a-80c4-28235766761e.png"
    },
    {
      id: 4,
      title: "Logistics Company in Southeast Asia",
      subtitle: "Brand Protection Strategy",
      description: "A major logistics company in Southeast Asia specializing in cargo transport faced significant challenges with keyword hijacking by competitors.",
      challenge: "Competitors were hijacking the client's brand name in both paid search and organic results. When users searched for the client's brand name, they would often see competitor results instead.",
      solution: "I developed a comprehensive brand protection strategy that involved generating high-authority content across multiple platforms. We created and optimized numerous pages that mentioned their brand name and linked back to their main website, effectively creating a protective shield around their brand in search results.",
      results: "We successfully dominated search results with approximately 100 pages of brand-related content. For at least the first 10 pages of Google results when searching their brand name, users would see nothing but content related to their brand. This was accomplished through strategic content collaboration and link building, resulting in a highly satisfied client.",
      image: "/lovable-uploads/57b027fb-50e3-4ee9-a558-f9ee7d926667.png"
    },
    {
      id: 5,
      title: "SEO Agency in the UK",
      subtitle: "From a Single Campaign to 50 Campaigns Per Month",
      description: "A startup SEO agency in the UK with only one or two customers needed to scale their operations significantly.",
      challenge: "While white-labeling their campaigns, we encountered significant communication gaps between our client and their clients. Misunderstandings and misconceptions threatened to make the process unnecessarily complicated.",
      solution: "After recognizing that the white-label approach was causing inefficiencies, I consulted with my client to position me as a manager within their company. This allowed me to work directly with their customers, eliminating the communication barriers.",
      results: "We successfully ranked their clients in the competitive UK market, serving both B2B and B2C customers effectively. The streamlined communication process and quality results led to rapid growth, with the agency scaling from 1-2 clients to managing 50 campaigns in less than two weeks.",
      image: "/lovable-uploads/533a35a0-e5db-4b41-82f9-ecea43483e5c.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">My Work</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Explore how I discover my clients' struggles and obstacles through meaningful conversation,
              understand their traffic challenges, and deliver tailored solutions with measurable results.
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
