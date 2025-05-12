
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/57b027fb-50e3-4ee9-a558-f9ee7d926667.png" 
                alt="Raja Sinha SEO Consultancy" 
                className="h-8 md:h-10 lg:h-12" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-600 hover:text-yellow-500 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-600 hover:text-yellow-500 transition-colors">About</Link>
              <Link to="/#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">Contact</Link>
            </nav>
            
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
