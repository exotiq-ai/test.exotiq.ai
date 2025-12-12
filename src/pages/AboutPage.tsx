import React, { useEffect } from 'react';
import { Users, Trophy, Target, ArrowRight, Award } from 'lucide-react';
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-space font-bold text-5xl md:text-6xl text-gray-900 dark:text-white mb-6">
                We've Been in Your 
                <span className="block text-primary-600">Driver's Seat</span>
              </h1>
              <p className="font-inter text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                Exotiq is built by former Turo hosts and auto tech entrepreneurs. We've lived the chaos 
                of managing growing fleets, and we're building the tools we always wished we had.
              </p>
            </div>
            <div className="relative">
              <picture>
                {/* Mobile WebP with 1x and 2x for retina */}
                <source 
                  media="(max-width: 640px)" 
                  srcSet="/images/about/gregory-s8-mobile.webp 1x, /images/about/gregory-s8-mobile-2x.webp 2x"
                  type="image/webp"
                />
                {/* Mobile JPG Fallback with 1x and 2x */}
                <source 
                  media="(max-width: 640px)" 
                  srcSet="/images/about/gregory-s8-mobile.jpg 1x, /images/about/gregory-s8-mobile-2x.jpg 2x"
                  type="image/jpeg"
                />
                
                {/* Tablet WebP with 1x and 2x for retina */}
                <source 
                  media="(max-width: 1024px)" 
                  srcSet="/images/about/gregory-s8-tablet.webp 1x, /images/about/gregory-s8-tablet-2x.webp 2x"
                  type="image/webp"
                />
                {/* Tablet JPG Fallback with 1x and 2x */}
                <source 
                  media="(max-width: 1024px)" 
                  srcSet="/images/about/gregory-s8-tablet.jpg 1x, /images/about/gregory-s8-tablet-2x.jpg 2x"
                  type="image/jpeg"
                />
                
                {/* Desktop WebP with 1x and 2x for retina */}
                <source 
                  media="(min-width: 1025px)" 
                  srcSet="/images/about/gregory-s8-desktop.webp 1x, /images/about/gregory-s8-desktop-2x.webp 2x"
                  type="image/webp"
                />
                {/* Desktop JPG Fallback with 1x and 2x */}
                <source 
                  media="(min-width: 1025px)" 
                  srcSet="/images/about/gregory-s8-desktop.jpg 1x, /images/about/gregory-s8-desktop-2x.jpg 2x"
                  type="image/jpeg"
                />
                
                {/* Fallback image - use 2x for sharpness */}
                <img
                  src="/images/about/gregory-s8-desktop-2x.jpg"
                  srcSet="/images/about/gregory-s8-desktop.jpg 1x, /images/about/gregory-s8-desktop-2x.jpg 2x"
                  alt="Gregory Ringler, Founder of Exotiq.ai, with his Audi S8 - Built by fleet operators, for fleet operators"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl flex items-end p-6">
                <div className="text-white">
                  <p className="font-inter text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                    Managing real fleets, building real solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Condensed to 2 cards */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-12 text-center">
            Our Story
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                The Problem That Became Our Mission
              </h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                Starting as Turo hosts in 2019, we scaled from 2 cars to 15 within 18 months. What should have been success 
                felt like drowning in spreadsheets, Slack messages, and missed opportunities. We were spending more time 
                managing the business than growing it.
              </p>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                The breaking point: A $500 luxury rental slipped through because of a calendar sync error. That same weekend, 
                we spent 14 hours manually repricing our entire fleet after a competitor dropped rates. We lost both 
                the booking AND an entire weekend. That's when we realized the car-sharing industry needed purpose-built software—not 
                another generic rental platform, but intelligent tools designed specifically for fleet operators.
              </p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                Building the Solution
              </h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                With our combined experience in SaaS development and hands-on fleet management, we started 
                building Exotiq in 2024. Every feature is battle-tested by real hosts dealing with real problems.
              </p>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                We're still active hosts. Every feature we build is tested on our own fleets before 
                it reaches yours. If it doesn't work for us, it doesn't ship to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Replaces Market Opportunity */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-12 text-center">
            What Makes Us Different
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl border-l-4 border-primary-600">
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-3">
                Built by Operators, for Operators
              </h3>
              <p className="font-inter text-gray-700 dark:text-gray-200">
                We've managed 15-30 vehicle fleets ourselves. We know the pain points because we've lived them. 
                This isn't software built in a vacuum—it's built from real experience.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl border-l-4 border-accent-600">
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-3">
                Battle-Tested Before It Ships
              </h3>
              <p className="font-inter text-gray-700 dark:text-gray-200">
                Every feature is tested on our own fleets first. If it doesn't work for us, it doesn't ship to you. 
                We're not guessing what you need—we're building what we need.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl border-l-4 border-success-600">
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-3">
                Proven SaaS Experience
              </h3>
              <p className="font-inter text-gray-700 dark:text-gray-200">
                Our team brings 15+ combined years building scalable software used by thousands of businesses. 
                We know how to go from MVP to market leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights - Condensed to 3 cards */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-12 text-center">
            Built by Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">Early Partners</h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                20+ beta operators across 6 states testing features with real bookings and revenue.
              </p>
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
              <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Transform fleet management from 60-hour weeks and constant firefighting into a scalable, 
                profitable business you actually enjoy running.
              </p>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/20 p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl text-accent-600 dark:text-accent-400 mb-4">
                Vision
              </h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                A world where independent fleet operators outcompete traditional rental companies on both 
                customer experience and profitability—because they have better tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Reduced to 2 testimonials */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="font-inter text-lg italic text-gray-700 dark:text-gray-200 mb-4">
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
              <p className="font-inter text-lg italic text-gray-700 dark:text-gray-200 mb-4">
                "Exotiq paid for itself in the first month. The dynamic pricing increased my revenue by 15% 
                without any extra effort."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span className="font-space font-bold text-accent-600">AP</span>
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

      {/* CTA Section - Improved copy */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your Fleet Operations?
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            Join operators who are already saving hours and increasing revenue with Exotiq.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/survey"
              className="group relative font-inter font-semibold text-base px-10 py-5 bg-white text-primary-600 hover:bg-gray-50 rounded-xl transition-all duration-250 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2.5 min-h-[52px] touch-manipulation shadow-xl hover:shadow-2xl"
            >
              <span>Start Your Free Trial</span>
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
