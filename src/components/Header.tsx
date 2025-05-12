
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
                src="/lovable-uploads/4c537e3a-df75-43f1-99f4-644737922e70.png" 
                alt="Raja Sinha SEO Consultancy" 
                className="h-10 md:h-12 lg:h-14" 
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
