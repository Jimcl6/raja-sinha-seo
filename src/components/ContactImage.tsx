
import React from 'react';

const ContactImage = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-yellow-100 w-full aspect-[4/5] mb-8">
      <img 
        src="/lovable-uploads/7532a2f8-b4e4-437a-80c4-28235766761e.png" 
        alt="Raja Sinha SEO Consultancy" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ContactImage;
