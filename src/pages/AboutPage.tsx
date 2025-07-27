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

  const scrollToBeta = () => {
    // Navigate to homepage and scroll to beta section
    window.location.href = '/#beta';
  };

  return (
    <div className="pt-16">
      <SEOHead
        title="About ExotIQ.ai - Built by Fleet Operators, for Fleet Operators"
        description="Learn about ExotIQ.ai's founding story, team, and mission to transform fleet management. Built by former Turo hosts who understand the challenges of scaling vehicle rental operations."
        keywords="ExotIQ.ai team, fleet management company, Turo host founders, automotive SaaS startup, vehicle rental industry, fleet operations experts"
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
                ExotIQ is built by former Turo hosts and auto tech entrepreneurs. We've lived the chaos 
                of managing growing fleets, and we're building the tools we always wished we had.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-space font-bold text-primary-600 mb-2">50+</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Rentals Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-space font-bold text-primary-600 mb-2">10+</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Years in SaaS</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Successful automotive entrepreneurs celebrating growth"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
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
                Starting as Turo hosts with just a few cars, we quickly learned that scaling beyond 5 to 10 vehicles 
                becomes a logistical nightmare. Spreadsheets, multiple apps, manual pricing adjustments, and 
                constant firefighting became our daily reality. We were spending more time managing the business 
                than growing it.
              </p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                The Breakthrough Moment
              </h3>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                After missing a $500 booking because of a scheduling error and spending a weekend manually 
                repricing 30 vehicles, we realized the car-sharing industry needed purpose-built software. 
                Not another generic rental platform, but intelligent tools designed specifically for the modern 
                host economy.
              </p>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                Building the Solution
              </h3>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                With our combined experience in SaaS development and hands-on fleet management, we started 
                building ExotIQ in 2024. Every feature is battle-tested by real hosts dealing with real problems.
              </p>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We're not just building software. We're creating the operating system for the future of 
                car sharing.
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
                Former power hosts with real-world experience managing diverse fleets.
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
                Already working with real-world fleets to validate our approach.
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
                Empower every car-sharing host with intelligent tools that transform fleet management 
                from chaos to competitive advantage.
              </p>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-accent-600 dark:text-accent-400 mb-4">
                Vision
              </h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                A future where any entrepreneur can build and scale a successful fleet business 
                with the same sophistication as industry giants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backed by Industry Experts */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 dark:bg-success-900/30 rounded-full text-success-700 dark:text-success-300 font-semibold text-sm mb-6">
            <Building className="w-4 h-4 mr-2" />
            Backed by Industry Experts
          </div>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
            Trusted by the Best
          </h2>
          <p className="font-inter text-xl text-gray-600 dark:text-gray-300 mb-12">
            Our advisors and early supporters include successful fleet operators, automotive industry veterans, 
            and SaaS executives who understand both the market opportunity and execution challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Industry Veterans
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Advisors from major automotive and mobility companies
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-600 rounded-lg mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Successful Operators
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Power hosts managing 50+ vehicle fleets
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-success-600 rounded-lg mx-auto mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">
                SaaS Executives
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Leaders from successful B2B software companies
              </p>
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
            <button
              onClick={() => window.location.href = '/survey'}
              className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 justify-center min-h-[44px] touch-manipulation"
            >
              <span>Choose your fleet type to access the correct beta survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg transition-all duration-200 hover:scale-105 min-h-[44px] flex items-center justify-center touch-manipulation"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}