import React, { useEffect } from 'react';
import { Calendar, Users, Trophy, Target, ArrowRight, Building, Award, TrendingUp, DollarSign, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema } from '../data/structuredData';

export default function AboutPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="About Exotiq.ai - Built by Fleet Operators, for Fleet Operators"
        description="Learn about Exotiq.ai's founding story, team, and mission to transform fleet management. Built by former Turo hosts who understand the challenges of scaling vehicle rental operations."
        keywords="Exotiq.ai team, fleet management company, Turo host founders, automotive SaaS startup, vehicle rental industry, fleet operations experts"
        url="https://exotiq.ai/about"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://exotiq.ai" },
            { name: "About", url: "https://exotiq.ai/about" }
          ])
        ]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-space font-bold text-5xl md:text-6xl text-gray-900 dark:text-white mb-6">
                We've Been in Your 
                <span className="block text-primary-600">Driver's Seat</span>
              </h1>
              <p className="font-inter text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Exotiq is built by former Turo hosts and auto tech entrepreneurs. We've lived the chaos 
                of managing growing fleets, and we're building the tools we always wished we had.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-space font-bold text-primary-600 mb-2">200+</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Rentals Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-space font-bold text-primary-600 mb-2">3</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Products Launched</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <picture>
                {/* Mobile WebP */}
                <source 
                  media="(max-width: 640px)" 
                  srcSet="/images/hero/audi-r8-desert-mobile.webp"
                  type="image/webp"
                />
                {/* Mobile JPG Fallback */}
                <source 
                  media="(max-width: 640px)" 
                  srcSet="/images/hero/audi-r8-desert-mobile.jpg"
                  type="image/jpeg"
                />
                
                {/* Tablet WebP */}
                <source 
                  media="(max-width: 1024px)" 
                  srcSet="/images/hero/audi-r8-desert-tablet.webp"
                  type="image/webp"
                />
                {/* Tablet JPG Fallback */}
                <source 
                  media="(max-width: 1024px)" 
                  srcSet="/images/hero/audi-r8-desert-tablet.jpg"
                  type="image/jpeg"
                />
                
                {/* Desktop WebP */}
                <source 
                  media="(min-width: 1025px)" 
                  srcSet="/images/hero/audi-r8-desert-desktop.webp"
                  type="image/webp"
                />
                
                {/* Desktop JPG Fallback */}
                <img
                  src="/images/hero/audi-r8-desert-desktop.jpg"
                  alt="Exotiq.ai - Built by fleet operators managing exotic vehicles like this Audi R8"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-transparent rounded-2xl flex items-end p-6">
                <div className="text-white">
                  <p className="font-inter text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg inline-block">
                    Managing real fleets, building real solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-12 text-center">
            Our Story
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                The Problem We Lived
              </h3>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Starting as Turo hosts in 2019, we scaled from 2 cars to 15 within 18 months. What should have been success 
                felt like drowning in spreadsheets, Slack messages, and missed opportunities. Spreadsheets, multiple apps, 
                manual pricing adjustments, and constant firefighting became our daily reality. We were spending more time 
                managing the business than growing it.
              </p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                The Breakthrough Moment
              </h3>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                The breaking point: A $500 luxury rental slipped through because of a calendar sync error. That same weekend, 
                we spent 14 hours manually repricing our entire 30-vehicle fleet after a competitor dropped rates. We lost both 
                the booking AND an entire weekend. That's when we realized the car-sharing industry needed purpose-built software. 
                Not another generic rental platform, but intelligent tools designed specifically for the modern host economy.
              </p>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                Building the Solution
              </h3>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                With our combined experience in SaaS development and hands-on fleet management, we started 
                building Exotiq in 2024. Every feature is battle-tested by real hosts dealing with real problems.
              </p>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We're not just building software. We're creating the operating system for the future of 
                car sharing.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                Why We Can Execute
              </h3>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Our founding team brings 15+ combined years building SaaS platforms that scale. We've launched products 
                used by thousands of businesses and know what it takes to go from MVP to market leader.
              </p>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                More importantly, we're still active hosts. Every feature we build is tested on our own fleets before 
                it reaches yours. If it doesn't work for us, it doesn't ship to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-12 text-center">
            Built by Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">Fleet Veterans</h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Managed 15-30 vehicle fleets on Turo, achieving 95%+ utilization and 4.95+ star ratings.
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">SaaS Builders</h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Decade+ experience building scalable software for growing businesses.
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">Auto Enthusiasts</h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Passionate about cars and the future of transportation.
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">Early Partners</h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                20+ beta operators across 6 states testing features with real bookings and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section - Dual Purpose */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              The $11B Vehicle Rental Market is Going Independent
            </h2>
            <p className="font-inter text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're at the forefront of a massive shift from traditional rental to peer-to-peer vehicle sharing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-space font-bold text-primary-600 mb-2">40%</div>
              <div className="font-inter text-gray-600 dark:text-gray-400 mb-2">Annual Growth Rate</div>
              <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                P2P car sharing is the fastest growing segment in mobility
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-xl mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-3xl font-space font-bold text-accent-600 mb-2">$2.8B</div>
              <div className="font-inter text-gray-600 dark:text-gray-400 mb-2">Market by 2027</div>
              <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                Projected P2P car sharing market size
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-xl mx-auto mb-4">
                <MapPin className="w-8 h-8 text-success-600" />
              </div>
              <div className="text-3xl font-space font-bold text-success-600 mb-2">100K+</div>
              <div className="font-inter text-gray-600 dark:text-gray-400 mb-2">Target Hosts</div>
              <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                Active hosts across major platforms
              </p>
            </div>
          </div>

          {/* Industry Insights */}
          <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
            <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-6 text-center">
              Why Now?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Market Drivers
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">Rising vehicle costs driving sharing economy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">Urban mobility preferences shifting to access over ownership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">Technology enabling seamless peer-to-peer transactions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Our Advantage
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">First-mover in car-sharing specific fleet management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">Built by operators who understand the pain points</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">AI-powered automation creates immediate ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-primary-600 dark:text-primary-400 mb-4">
                Mission
              </h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Transform fleet management from 60-hour weeks and constant firefighting into a scalable, 
                profitable business you actually enjoy running.
              </p>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-accent-600 dark:text-accent-400 mb-4">
                Vision
              </h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                A world where independent fleet operators outcompete traditional rental companies on both 
                customer experience and profitability—because they have better tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Results & Social Proof */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-success-100 dark:bg-success-900/30 rounded-full text-success-700 dark:text-success-300 font-semibold text-sm mb-6">
              <Award className="w-4 h-4 mr-2" />
              Early Results
            </div>
            <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              What Early Operators Are Saying
            </h2>
            <p className="font-inter text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real fleet operators are experiencing with Exotiq.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border-l-4 border-primary-600 shadow-lg">
              <p className="font-inter text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "Finally, someone who gets it. I saved 8 hours in my first week just on pricing automation alone. 
                This is the tool I've been waiting for."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="font-space font-bold text-primary-600">MR</span>
                </div>
                <div>
                  <div className="font-space font-semibold text-gray-900 dark:text-white">Mike R.</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">28-vehicle fleet, Denver</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border-l-4 border-accent-600 shadow-lg">
              <p className="font-inter text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "The automated messaging alone has been a game-changer. I'm responding to guests 10x faster 
                without lifting a finger."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span className="font-space font-bold text-accent-600">SC</span>
                </div>
                <div>
                  <div className="font-space font-semibold text-gray-900 dark:text-white">Sarah C.</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">12-vehicle fleet, Miami</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border-l-4 border-success-600 shadow-lg">
              <p className="font-inter text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "We went from spreadsheet chaos to having complete visibility in under a week. My team actually 
                enjoys using the platform."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center">
                  <span className="font-space font-bold text-success-600">JL</span>
                </div>
                <div>
                  <div className="font-space font-semibold text-gray-900 dark:text-white">James L.</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">45-vehicle fleet, Scottsdale</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border-l-4 border-warning-600 shadow-lg">
              <p className="font-inter text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "Exotiq paid for itself in the first month. The dynamic pricing increased my revenue by 15% 
                without any extra effort."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-full flex items-center justify-center">
                  <span className="font-space font-bold text-warning-600">AP</span>
                </div>
                <div>
                  <div className="font-space font-semibold text-gray-900 dark:text-white">Alex P.</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">18-vehicle fleet, Austin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            We're building this with you, not for you. Let's shape the future of fleet management together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/survey"
              className="group relative font-inter font-semibold text-base px-10 py-5 bg-white text-primary-600 hover:bg-gray-50 rounded-xl transition-all duration-250 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2.5 min-h-[52px] touch-manipulation shadow-xl hover:shadow-2xl"
            >
              <span>Join the Beta</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-250" />
            </Link>
            <Link
              to="/investors"
              className="group relative font-inter font-semibold text-base px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white rounded-xl transition-all duration-250 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center min-h-[52px] touch-manipulation shadow-lg hover:shadow-xl"
            >
              <span>For Investors & Partners</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}