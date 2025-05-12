
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="font-montserrat font-bold text-xl md:text-2xl text-yellow-500">
              Raja Sinha
            </Link>
            <span className="ml-2 text-gray-500 hidden md:inline-block">SEO Consultancy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-gray-600 hover:text-yellow-500 transition-colors">Services</Link>
            <Link to="/#about" className="text-gray-600 hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/#approach" className="text-gray-600 hover:text-yellow-500 transition-colors">Approach</Link>
            <Link to="/diagnosis-room" className="text-gray-600 hover:text-yellow-500 transition-colors">The Diagnosis Room</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">Contact</Link>
          </nav>
          
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
