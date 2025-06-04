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
  { src: "/lovable-uploads/47ae2f5c-472d-45f5-b134-8529c5fc6772.png", alt: "Honda" },
  { src: "/lovable-uploads/a5c2d0d3-01b5-4238-9d2e-99781995f5ba.png", alt: "IMI" },
  { src: "/lovable-uploads/368433e9-6e5e-4e2f-a272-b43aeb2feff6.png", alt: "ShaperStar" },
  { src: "/lovable-uploads/34483fd6-7f00-48d6-a910-432eaadc4e6f.png", alt: "The Rosedale Team" },
  { src: "/lovable-uploads/b825b2ce-543e-48a3-9502-51e9b50c8182.png", alt: "Mile High" },
  { src: "/lovable-uploads/a69baadf-1cb9-43f2-a4e2-0e6c99082e23.png", alt: "Mekenova" },
  { src: "/lovable-uploads/10539182-6677-4494-9a5c-b21eeb9eada9.png", alt: "JRC" },
  { src: "/lovable-uploads/28e6a8ba-fbac-4f01-8364-ed806714ab33.png", alt: "Client 8" },
  { src: "/lovable-uploads/1b942394-eaf9-496e-9ef4-0e2b97ec65ae.png", alt: "Client 9" }
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
          Trusted by Leading Brands
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
