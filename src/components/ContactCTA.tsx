
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your SEO?</h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Let's talk about your business goals and how strategic SEO can help you achieve them.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Book a Call */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Book a Strategy Call</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free 30-minute call to discuss your SEO goals and get personalized recommendations.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Schedule Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Option 2: Email */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <p className="text-gray-600 mb-6">
                Have questions or prefer email? Send me a message and I'll get back to you within 24 hours.
              </p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <p className="text-blue-200 mt-8">
            Your success is my priority. Let's create an SEO strategy that works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
