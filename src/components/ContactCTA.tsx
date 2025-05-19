
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="py-16 md:py-24 bg-yellow-500 text-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your SEO?</h2>
          <p className="text-xl md:text-2xl mb-10 text-yellow-900">
            Let's talk about your business goals and how strategic SEO can help you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Book a Call */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Book a Strategy Call</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free 30-minute call to discuss your SEO goals and get personalized recommendations.
              </p>
              <Button 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => window.open('https://calendly.com/filnep-qwgu/30min', '_blank')}
              >
                Schedule Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Option 2: Email */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <p className="text-gray-600 mb-6">
                Have questions or prefer email? Send me a message and I'll get back to you within 24 hours.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                onClick={() => window.open('mailto:raja@RajaSinhaSEO.com', '_blank')}
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <p className="text-black mt-10 text-xl font-bold">
            Your success is my priority. Let's create an SEO strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
