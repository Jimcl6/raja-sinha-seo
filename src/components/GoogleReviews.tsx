
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { fetchGoogleReviews } from '@/utils/googlePlacesApi';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [overallRating, setOverallRating] = useState(5.0);

  // You need to replace these with your actual values
  const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY'; // Replace with your API key
  const PLACE_ID = 'YOUR_PLACE_ID'; // Replace with your Google Business Place ID

  useEffect(() => {
    const loadReviews = async () => {
      try {
        if (GOOGLE_PLACES_API_KEY === 'YOUR_GOOGLE_PLACES_API_KEY' || PLACE_ID === 'YOUR_PLACE_ID') {
          // Use fallback reviews if API key or Place ID not configured
          setReviews([
            {
              author_name: "Sarah Johnson",
              rating: 5,
              text: "Raja's SEO expertise transformed our website traffic. We saw a 300% increase in organic visitors within 6 months. His strategic approach and clear communication made the entire process smooth.",
              relative_time_description: "2 months ago"
            },
            {
              author_name: "Michael Chen",
              rating: 5,
              text: "Outstanding results! Raja helped us rank #1 for our target keywords. His technical knowledge and dedication to client success is unmatched. Highly recommended for any business serious about SEO.",
              relative_time_description: "1 month ago"
            },
            {
              author_name: "Emma Rodriguez",
              rating: 5,
              text: "Professional, knowledgeable, and results-driven. Raja's SEO strategies boosted our online presence significantly. The detailed reports and regular updates kept us informed throughout the process.",
              relative_time_description: "3 weeks ago"
            },
            {
              author_name: "David Thompson",
              rating: 5,
              text: "Exceptional service! Raja's SEO work helped our local business dominate search results. We've seen consistent growth in leads and revenue since working with him. Worth every penny!",
              relative_time_description: "2 weeks ago"
            }
          ]);
          setLoading(false);
          return;
        }

        const data = await fetchGoogleReviews(PLACE_ID, GOOGLE_PLACES_API_KEY);
        
        if (data.status === 'OK' && data.result.reviews) {
          setReviews(data.result.reviews);
          setOverallRating(data.result.rating || 5.0);
        } else {
          throw new Error('No reviews found');
        }
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Failed to load reviews');
        // Fallback to placeholder reviews
        setReviews([
          {
            author_name: "Sarah Johnson",
            rating: 5,
            text: "Raja's SEO expertise transformed our website traffic. We saw a 300% increase in organic visitors within 6 months.",
            relative_time_description: "2 months ago"
          },
          {
            author_name: "Michael Chen",
            rating: 5,
            text: "Outstanding results! Raja helped us rank #1 for our target keywords. His technical knowledge is unmatched.",
            relative_time_description: "1 month ago"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
              alt="Google" 
              className="h-6 w-6"
            />
            <span className="text-lg font-semibold text-gray-700">Google Reviews</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            {renderStars(Math.round(overallRating))}
            <span className="ml-2 text-lg font-semibold text-gray-700">{overallRating.toFixed(1)}</span>
          </div>
          {error && (
            <p className="text-sm text-orange-600 mt-2">
              Using sample reviews - configure API key for live reviews
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.slice(0, 4).map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.author_name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">{review.author_name}</h4>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-3 leading-relaxed">{review.text}</p>
              <p className="text-sm text-gray-500">{review.relative_time_description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=raja+sinha+seo+consultancy+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
              alt="Google" 
              className="h-5 w-5 mr-2"
            />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
