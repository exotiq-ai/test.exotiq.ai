import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown,
  Calendar,
  Sparkles,
  Award,
  DollarSign,
  Zap
} from 'lucide-react';
import BetaSignupForm from '../components/BetaSignupForm';
import SkeletonLoader from '../components/SkeletonLoader';
import { MobileContainer, MobileGrid, MobileCard, MobileSection } from '../components/MobileOptimizations';
import SEOHead from '../components/SEOHead';
import { organizationSchema, softwareApplicationSchema, faqSchema } from '../data/structuredData';

// Import the new section components
import HomeHeroSection from '../components/HomeHeroSection';
import FleetCopilotSection from '../components/FleetCopilotSection';
import OldVsExotiqSection from '../components/OldVsExotiqSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PlatformModulesSection from '../components/PlatformModulesSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pricing');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="pt-16">
        {/* Hero Skeleton */}
        <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark-800">
          <MobileContainer>
            <div className="text-center">
              <SkeletonLoader className="h-6 sm:h-8 w-48 sm:w-64 mx-auto mb-4 sm:mb-6" />
              <SkeletonLoader className="h-12 sm:h-16 w-full max-w-2xl sm:max-w-4xl mx-auto mb-3 sm:mb-4" />
              <SkeletonLoader className="h-12 sm:h-16 w-full max-w-2xl sm:max-w-4xl mx-auto mb-6 sm:mb-8" />
              <SkeletonLoader className="h-4 sm:h-6 w-64 sm:w-96 mx-auto mb-6 sm:mb-8" />
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <SkeletonLoader className="h-12 w-full sm:w-32" />
              </div>
            </div>
          </MobileContainer>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <SEOHead
        title="ExotIQ.ai - AI-Powered Fleet Management for Vehicle Rental Operations"
        description="Transform your Turo hosting and vehicle rental business with ExotIQ.ai's AI-powered platform. Automate pricing, maintenance, and operations to scale profitably. Join 20+ operators building the future."
        keywords="fleet management software, Turo hosting tools, vehicle rental automation, AI pricing optimization, car sharing platform, fleet analytics, rental business software, automotive SaaS, peer-to-peer car sharing, fleet operations, ExotIQ, fleet management system"
        url="https://exotiq.ai"
        image="https://exotiq.ai/og-image.jpg"
        structuredData={[organizationSchema, softwareApplicationSchema, faqSchema]}
      />
      
      {/* Hero Section */}
      <HomeHeroSection isVisible={isVisible} scrollToSection={scrollToSection} />

      {/* FleetCopilot™ AI Assistant Section */}
      <FleetCopilotSection />

      {/* Old Way vs. ExotIQ Way Section */}
      <OldVsExotiqSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Platform Modules Section with Tabbed Interface */}
      <PlatformModulesSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Survey Incentive Section */}
      <MobileSection className="bg-gradient-to-br from-accent-50 to-warning-50 dark:from-accent-900/20 dark:to-warning-900/20">
        <MobileContainer>
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-accent-600/20 rounded-full text-accent-700 dark:text-accent-300 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 animate-pulse-subtle">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              🚀 Help Build ExotIQ — Get Rewarded
            </div>
            <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 animate-slide-up px-2">
              Help Shape ExotIQ — Get Rewarded
            </h2>
            <p className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up px-2" style={{ animationDelay: '100ms' }}>
              Take our quick 2-minute survey and receive:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-dark-700 p-4 sm:p-6 rounded-xl shadow-lg animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-success-600 rounded-lg mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">$25 Amazon Gift Card</h3>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300">(for qualified operators)</p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-4 sm:p-6 rounded-xl shadow-lg animate-slide-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">Early Beta Access</h3>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Be first to try ExotIQ</p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-4 sm:p-6 rounded-xl shadow-lg animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-accent-600 rounded-lg mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">Lifetime Discounted Pricing</h3>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Exclusive founder rates</p>
              </div>
            </div>
            <Link
              to="/survey"
              className="inline-flex items-center font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-all duration-200 hover:scale-105 space-x-2 animate-slide-up min-h-[48px]"
              style={{ animationDelay: '600ms' }}
            >
              <span>Take Survey & Get Rewarded</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MobileContainer>
      </MobileSection>

      {/* Contact Section */}
      <MobileSection className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <MobileContainer>
          <div className="text-center">
            <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
              Ready to Transform Your Fleet?
            </h2>
            <p className="font-inter text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the growing community of operators who are scaling smarter with ExotIQ. 
              Let's discuss how our platform can accelerate your growth.
            </p>
            <a
              href="https://calendly.com/hello-exotiq/15-minute-meeting?back=1&month=2025-07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 space-x-2 min-h-[48px] touch-manipulation"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Call</span>
            </a>
            <p className="font-inter text-sm opacity-75 mt-6">
              15-minute strategy session. No commitment required.
            </p>
          </div>
        </MobileContainer>
      </MobileSection>
    </div>
  );
}