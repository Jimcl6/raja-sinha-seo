
import React from 'react';
import { Instagram, Facebook, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/988f1414-1cc8-4691-b338-b848ba3f4161.png" 
                alt="Raja Sinha SEO Consultancy" 
                className="h-10 w-auto"
              />
            </Link>
            <div className="text-gray-400 mb-4">
              <p className="mb-2">2nd Floor, Dela Costa St, Block 1 Lot 1, Phase 5, corner Madrid St, Bacoor, 4102 Cavite</p>
              <p>+63 961 752 1638</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/rajasinhaseo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/Raja-Sinha-SEO-Consultancy/61576320595828/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>See My Work</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Book a Call</span>
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
            <a href="mailto:raja@rajasinhaSEO.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              raja@rajasinhaSEO.com
            </a>
            <p className="text-gray-400 mt-4">
              Response time: Fast
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
