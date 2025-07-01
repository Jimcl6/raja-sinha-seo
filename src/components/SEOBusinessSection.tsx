
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Search, Wrench, TrendingUp, MapPin, BarChart3 } from 'lucide-react';

const SEOBusinessSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Targeting Search Users Who Are Ready to Buy",
      description: "Search engine users already have intent. They're not random scrollers. They're actively typing in keywords like \"best accounting firm in Makati\" or \"affordable car repair in QC.\" That's why SEO is easier—and more direct—than chasing interests on social media."
    },
    {
      icon: Search,
      title: "Keyword Research with a Business Lens",
      description: "I find the exact phrases your potential customers are searching for. Not just what gets traffic—but what leads to sales, bookings, calls, and emails."
    },
    {
      icon: Wrench,
      title: "On-Site Fixes That Unlock Your Website's Potential",
      description: "I'll fix what's broken: Pages that don't show up on Google, slow-loading websites that lose visitors, confusing layouts that stop people from taking action."
    },
    {
      icon: TrendingUp,
      title: "Making Sure Google (and People) Trust You",
      description: "Backlinks, structured content, fast performance—all of it builds trust and authority. And trust leads to more visibility, which leads to more customers."
    },
    {
      icon: MapPin,
      title: "Local Visibility Where It Matters",
      description: "If you're targeting customers in a specific city or region, I help your business appear in local searches. Most people won't scroll past the first few results, especially for local services."
    },
    {
      icon: BarChart3,
      title: "Data That's Actually Useful",
      description: "No jargon. I show you what's working, what needs fixing, and where the real opportunities lie—so you can make decisions that grow your business."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">SEO That Works for Business Owners</span>
            <br />
            <span className="text-gray-700">— Not Just Search Engines</span>
          </h2>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-yellow-200">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you're a business owner, you've likely invested in marketing that doesn't always make sense. Maybe boosted a few Facebook posts. Maybe paid for some ads without clear results. But here's the truth:
              </p>
              <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Every single day, people are already searching for what you offer.
                </p>
                <p className="text-gray-700">
                  They're typing keywords into Google, looking for solutions, services, and products—right now. That's why SEO isn't just "nice to have"—it's a basic necessity for doing business today.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                As an SEO consultant, I don't focus on vanity metrics. I focus on helping you connect with real people who are already looking for what you do.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What I Actually Do */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            What I Actually Do for Your Business
          </h3>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Most people think SEO is just ranking on Google. That's a small part of it. What I do is give your business a clear presence in front of people who are ready to act.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <feature.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO and CRO Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 text-center">
                SEO and CRO Are Not Separate Things
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-4 text-yellow-50">
                    SEO brings people to your site. But if your site doesn't convince them to act, it's wasted effort.
                  </p>
                  <p className="text-lg text-yellow-50">
                    That's why I also look at:
                  </p>
                  <ul className="mt-4 space-y-2 text-yellow-50">
                    <li>• Why visitors don't contact you</li>
                    <li>• What elements confuse or distract them</li>
                    <li>• How we can simplify and increase conversions</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-2xl font-bold text-white">
                      It's not about chasing rankings.
                    </p>
                    <p className="text-xl text-yellow-100 mt-2">
                      It's about getting people to take action once they find you.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bigger Picture Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 text-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">
                Why You Need Help Seeing the Bigger Picture
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                SEO is no longer about gaming the algorithm. It's a combination of:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['Technology', 'Strategy', 'Customer behavior', 'Content', 'User experience'].map((item, index) => (
                  <div key={index} className="bg-yellow-500/20 p-3 rounded-lg text-center">
                    <span className="text-yellow-400 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                And it's constantly evolving. If you're trying to do it all yourself—or relying on cookie-cutter marketing—you're missing the larger picture.
              </p>
              <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                <p className="text-xl font-semibold text-yellow-400 text-center">
                  I work as your strategic partner, helping you use SEO the right way—not just for clicks, but for real business results.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SEOBusinessSection;
