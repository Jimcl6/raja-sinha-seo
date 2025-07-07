
import React from 'react';
import { generateSitemap } from '@/utils/sitemap';

const Sitemap = () => {
  // Set the content type to XML when this component mounts
  React.useEffect(() => {
    // Set the content type header for XML
    document.contentType = 'application/xml';
    
    // Get the sitemap content and replace the page content
    const sitemapContent = generateSitemap();
    
    // Replace the entire document with XML content
    document.open();
    document.write(sitemapContent);
    document.close();
  }, []);

  // This won't be rendered as we replace the document content
  return null;
};

export default Sitemap;
