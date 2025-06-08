
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => {
    if (path === '/#contact' && location.hash === '#contact') return true;
    return currentPath === path;
  };

  const navigationItems = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'See My Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white py-8 md:py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={isMobile ? "/lovable-uploads/002cffda-7fae-4952-a090-268444da62c4.png" : "/lovable-uploads/5ea56857-32d5-467c-b5d7-1ec7a2a4860c.png"}
                alt="Raja Sinha SEO Consultancy" 
                className={isMobile ? "h-14" : "h-12 md:h-12 lg:h-14"}
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={`transition-colors font-bold ${isActive(item.to) ? 'text-yellow-500 font-bold' : 'text-gray-600 hover:text-yellow-500'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Desktop Book a Call Button */}
            <Button 
              className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white"
              onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
            >
              Book a Call
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-8 w-8" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <div className="flex items-center justify-between">
                      <DrawerTitle>Menu</DrawerTitle>
                      <DrawerClose asChild>
                        <Button variant="ghost" size="sm" className="p-2">
                          <X className="h-5 w-5" />
                        </Button>
                      </DrawerClose>
                    </div>
                  </DrawerHeader>
                  <div className="px-4 pb-6 space-y-4">
                    {navigationItems.map((item) => (
                      <Link 
                        key={item.to}
                        to={item.to} 
                        className={`block py-3 px-2 text-lg transition-colors ${isActive(item.to) ? 'text-yellow-500 font-bold' : 'text-gray-600'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                        onClick={() => {
                          window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank');
                          setIsOpen(false);
                        }}
                      >
                        Book a Call
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
