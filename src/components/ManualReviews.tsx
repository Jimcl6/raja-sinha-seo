
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ManualReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      rating: 5,
      text: "Raja transformed our website's visibility completely. We went from page 3 to ranking #1 for our main keywords in just 4 months. His strategic approach and clear communication made all the difference.",
      source: "Google"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "GreenLeaf Consulting",
      rating: 5,
      text: "Outstanding SEO work! The detailed audit Raja provided opened our eyes to so many missed opportunities. Our organic traffic has doubled since implementing his recommendations.",
      source: "LinkedIn"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Coastal Realty Group",
      rating: 5,
      text: "Professional, knowledgeable, and results-driven. Raja's SEO strategies helped us dominate local search results. Highly recommend his services to any business serious about growth.",
      source: "Google"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Urban Fitness Studio",
      rating: 5,
      text: "The 3-hour SEO consultation was incredibly valuable. Raja identified critical issues and provided a clear roadmap for improvement. Best investment we've made for our online presence.",
      source: "Yelp"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real results from real businesses who trusted me with their SEO
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-md hover:shadow-lg transition-all border-l-4 border-l-yellow-400">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {review.source}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to join these success stories?
          </p>
          <a
            href="https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManualReviews;
