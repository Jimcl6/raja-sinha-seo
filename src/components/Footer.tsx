
import React from 'react';
import { Linkedin, Twitter, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Raja Sinha SEO Consultancy</h3>
            <p className="text-gray-400 mb-4">
              Providing strategic SEO services with a business-owner mindset for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a href="#approach" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>My Approach</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Have questions or want to discuss your SEO needs? Reach out directly:
            </p>
            <a href="mailto:raja@example.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              raja@example.com
            </a>
            <p className="text-gray-400 mt-4">
              Response time: Within 24 hours
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Raja Sinha SEO Consultancy. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-yellow-500">SEO That Thinks Ahead</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
