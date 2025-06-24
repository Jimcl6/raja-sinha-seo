
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ManualReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "David D.",
      rating: 5,
      text: "Raja's team has done an amazing job for us in many capacities, from SEO, data entry to advanced propriety web applications. I highly recommend them, though we will never tell anyone about them so as not to give away our best competitive advantage.",
      source: "Google"
    },
    {
      id: 2,
      name: "Ivan S.",
      rating: 5,
      text: "Raja has been an integral component to the evolution of our business, bringing a freshness and heightened presence to our placement on the web. We couldn't be more pleased.",
      source: "Google"
    },
    {
      id: 3,
      name: "Jeff S.",
      rating: 5,
      text: "Raja has worked with my company for years. They offer a very good value for United States-based customers and they will continue to be our SEO and web developer. I am happy with their pricing and their service.",
      source: "Google"
    },
    {
      id: 4,
      name: "John F.",
      rating: 5,
      text: "I am so fortunate to have discovered Raja, who took time to understand my business inside and out. He helped clarify some of my thinking about my business model. He is well responsive, friendly and thorough. My experience with him has been excellent since day one.",
      source: "Google"
    },
    {
      id: 5,
      name: "Jacob",
      rating: 5,
      text: "Raja has helped us more than two years now and I am bold enough to say that our success as a business has hinged upon his help in our website and online experience. I am very happy working with him and not only does he do the job we request but he engages us.",
      source: "Google"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
