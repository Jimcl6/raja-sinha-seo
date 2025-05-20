
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
  { src: "/lovable-uploads/01ac6572-e5af-41d9-8f12-cf175b932d61.png", alt: "Client 1" },
  { src: "/lovable-uploads/01f2c3c0-50d7-402a-a117-fdfa3ca7750e.png", alt: "Client 2" },
  { src: "/lovable-uploads/1518e885-7368-46eb-b2a1-632023b3df5e.png", alt: "Client 3" },
  { src: "/lovable-uploads/2ac2aba0-ccfd-430d-8df3-9e0675a9a7a0.png", alt: "Client 4" },
  { src: "/lovable-uploads/2ae0e69e-ecbe-4f74-aedd-6a44808a3664.png", alt: "Client 5" },
  { src: "/lovable-uploads/42e582af-f809-4f7f-86a7-6bceebf8a973.png", alt: "Client 6" },
  { src: "/lovable-uploads/4c333c1e-99b1-4d6b-96fd-3cb5ef5d5f83.png", alt: "Client 7" },
  { src: "/lovable-uploads/4c537e3a-df75-43f1-99f4-644737922e70.png", alt: "Client 8" },
  { src: "/lovable-uploads/76e19e5c-ae3d-4ec6-81a9-2d40deb1c69a.png", alt: "Client 9" },
  { src: "/lovable-uploads/7806e948-dad2-4255-b973-64a352c4a0df.png", alt: "Client 10" }
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
                <div className="h-24 md:h-32 flex items-center justify-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-full max-w-full object-contain" 
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
