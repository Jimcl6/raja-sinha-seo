import React from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
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
        </div>
        
        {/* Google Reviews Widget Container */}
        <div className="max-w-6xl mx-auto">
          {/* Replace this div with your actual Google Reviews widget embed code */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
            <div className="mb-4">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-lg font-semibold text-gray-700">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                To display your actual Google Reviews widget:
              </p>
              <ol className="text-left text-sm text-gray-600 space-y-2 max-w-md mx-auto">
                <li>1. Go to <a href="https://search.google.com/local/writereview?placeid=" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google My Business</a></li>
                <li>2. Find your business and copy the Place ID from the URL</li>
                <li>3. Use a Google Reviews widget generator like <a href="https://www.reviewsongoogle.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ReviewsOnGoogle.com</a></li>
                <li>4. Generate the widget code and replace this placeholder</li>
              </ol>
            </div>
            
            {/* Placeholder widget - replace with actual embed code */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
              <p className="text-gray-500 text-sm">
                Google Reviews Widget will appear here
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Replace this div with your Google Reviews widget embed code
              </p>
            </div>
          </div>
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
