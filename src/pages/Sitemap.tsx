
import React from 'react';
import { generateSitemap } from '@/utils/sitemap';

const Sitemap = () => {
  React.useEffect(() => {
    // Get the sitemap content
    const sitemapContent = generateSitemap();
    
    // Replace the entire document with XML content
    document.open('text/xml', 'replace');
    document.write(sitemapContent);
    document.close();
  }, []);

  // This won't be rendered as we replace the document content
  return null;
};

export default Sitemap;
