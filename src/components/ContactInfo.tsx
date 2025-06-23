
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 gradient-text">Get In Touch</h3>
      
      <div className="flex items-start space-x-4">
        <div className="bg-yellow-100 p-2 rounded-full">
          <Mail className="h-5 w-5 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-medium">Email</p>
          <a href="mailto:raja@rajasinhaseo.com" className="text-gray-900 hover:text-yellow-600 transition-colors">
            raja@rajasinhaseo.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-yellow-100 p-2 rounded-full">
          <Phone className="h-5 w-5 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-medium">Phone</p>
          <a href="tel:+639617521638" className="text-gray-900 hover:text-yellow-600 transition-colors">
            +63 961 752 1638
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-gray-600">
          Or book a free strategy call directly via my calendar
        </p>
        <Button 
          className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black"
          onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
        >
          Schedule a Call
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
