
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { downloadSitemap } from '@/utils/sitemap';

const SitemapGenerator = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Generate Sitemap</h3>
      <p className="text-gray-600 mb-4">
        Download your website's XML sitemap for search engines.
      </p>
      <Button onClick={downloadSitemap} className="flex items-center gap-2">
        <Download className="h-4 w-4" />
        Download Sitemap.xml
      </Button>
    </div>
  );
};

export default SitemapGenerator;
