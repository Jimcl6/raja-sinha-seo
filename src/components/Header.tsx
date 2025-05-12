
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-montserrat font-bold text-xl md:text-2xl text-blue-700">
              Raja Sinha
            </span>
            <span className="ml-2 text-gray-500 hidden md:inline-block">SEO Consultancy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-700 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">About</a>
            <a href="#approach" className="text-gray-600 hover:text-blue-700 transition-colors">Approach</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">Contact</a>
          </nav>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
