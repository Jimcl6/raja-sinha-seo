
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const clientLogos = [
  { src: "/lovable-uploads/e5740d79-672f-4cfb-9366-b006b90c6f0a.png", alt: "Shapiro & Sher Group" },
  { src: "/lovable-uploads/fc6dad23-c749-4dfc-bf78-22b32c68704c.png", alt: "Goodman Law Group" },
  { src: "/lovable-uploads/a0cc15c1-866e-48b0-9b7c-08d29c751470.png", alt: "Carney" },
  { src: "/lovable-uploads/8cab9c68-16f3-4d1d-943e-eec98ac9507e.png", alt: "Mile High Home Pro" },
  { src: "/lovable-uploads/3bac511d-43f2-40ab-abc2-f90d6bf2e436.png", alt: "Bannister Transport" },
  { src: "/lovable-uploads/aa4ad88f-197d-4086-9d37-b8fd86851927.png", alt: "Honda Power Products" },
  { src: "/lovable-uploads/ee12c5c1-d1b9-40a0-a965-ccd696d3815c.png", alt: "The Brooks Team" },
  { src: "/lovable-uploads/1b5f7b1b-ec2a-4600-9cbb-766d8fe384e4.png", alt: "CAD" },
  { src: "/lovable-uploads/c5c0e4c3-7a5a-4a62-93d7-70276685d910.png", alt: "IMI" }
];

const ClientLogos = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<any>(null);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Start slow autoplay animation
  useEffect(() => {
    if (!api) return;
    
    // Clear any existing interval
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
    
    // Set new interval for slow autoplay (every 3 seconds)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    setAutoplayInterval(interval);
    
    // Clean up on unmount
    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Who I have Worked With
        </h3>
        
        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className={cn(
                "pl-2 md:pl-4",
                // Show 2 logos on mobile, 4 on desktop
                isMobile ? "basis-1/2" : "basis-1/4"
              )}>
                <div className="h-[134px] flex items-center justify-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="w-[200px] h-[134px] object-contain" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12 bg-white border border-gray-200" />
          <CarouselNext className="right-0 md:-right-12 bg-white border border-gray-200" />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientLogos;
