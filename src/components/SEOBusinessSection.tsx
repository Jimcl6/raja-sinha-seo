
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SEO Consultant Philippines
          </h1>
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

        {/* What I Actually Do - with background image */}
        <div 
          className="mb-16 relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80')`
          }}
        >
          <div className="p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-4">
              What I Actually Do for Your Business
            </h3>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-200">
              Most people think SEO is just ranking on Google. That's a small part of it. What I do is give your business a clear presence in front of people who are ready to act.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                        <feature.icon className="h-6 w-6 text-yellow-300" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Combined SEO and CRO Section with Bigger Picture - with background image */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4076&q=80')`
          }}
        >
          <div className="p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
              SEO and CRO Are Not Separate Things
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <p className="text-lg mb-4 text-gray-200">
                  SEO brings people to your site. But if your site doesn't convince them to act, it's wasted effort.
                </p>
                <p className="text-lg text-gray-200 mb-4">
                  That's why I also look at:
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Why visitors don't contact you</li>
                  <li>• What elements confuse or distract them</li>
                  <li>• How we can simplify and increase conversions</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <p className="text-2xl font-bold text-white">
                    It's not about chasing rankings.
                  </p>
                  <p className="text-xl text-yellow-300 mt-2">
                    It's about getting people to take action once they find you.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
                Why You Need Help Seeing the Bigger Picture
              </h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                SEO is no longer about gaming the algorithm. It's a combination of:
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <ul className="text-lg text-gray-200 space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    Technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    Strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    Customer behavior
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    Content
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    User experience
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                And it's constantly evolving. If you're trying to do it all yourself—or relying on cookie-cutter marketing—you're missing the larger picture.
              </p>
              <div className="bg-yellow-400/10 p-8 rounded-lg border border-yellow-400/30 text-center">
                <p className="text-xl font-semibold text-yellow-400">
                  I work as your strategic partner, helping you use SEO the right way—not just for clicks, but for real business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOBusinessSection;
