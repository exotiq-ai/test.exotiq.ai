import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Building, Award, Users, Shield, MapPin, TrendingUp, Sparkles } from 'lucide-react';
import ThemeAwareLogo from './ThemeAwareLogo';

export default function Footer() {
  const scrollToBeta = () => {
    // Navigate to homepage and scroll to beta section
    window.location.href = '/#beta';
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Link to="/" className="inline-block group">
                <ThemeAwareLogo size="footer" />
              </Link>
            </div>
            <p className="font-inter text-gray-300 text-base leading-relaxed max-w-md mb-8">
              The AI-powered operating system for modern fleet operators. Built by former Turo hosts who understand your challenges firsthand.
            </p>
            
            {/* Social & Contact */}
            <div className="space-y-2 mb-8">
              <a
                href="mailto:hello@exotiq.ai"
                className="group flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-all duration-250 py-2 min-h-[56px] touch-manipulation"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-inter font-medium">hello@exotiq.ai</span>
              </a>
              <a
                href="#"
                className="group flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-all duration-250 py-2 min-h-[56px] touch-manipulation"
                aria-label="LinkedIn"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-inter font-medium">Follow on LinkedIn</span>
              </a>
            </div>
            
            {/* Trust Indicators - Premium Style */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-sm text-white">20+ Beta Operators</div>
                  <div className="font-inter text-xs text-gray-400">300+ vehicles managed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent-400" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-sm text-white">Launching Soon</div>
                  <div className="font-inter text-xs text-gray-400">Denver · Scottsdale · Miami</div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-2">
            <h3 className="font-space font-bold text-base mb-6 text-white">Platform</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                Home
              </Link>
              <Link to="/features" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                Features
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                Contact
              </Link>
              <Link to="/survey" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                Beta Survey
              </Link>
            </nav>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h3 className="font-space font-bold text-base mb-6 text-white">Resources</h3>
            <nav className="space-y-3">
              <Link to="/investors" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-inter text-sm group">
                <Building className="w-4 h-4 group-hover:text-primary-400 transition-colors" />
                <span className="group-hover:translate-x-1 transition-transform duration-250">Investors</span>
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-inter text-sm hover:translate-x-1 transition-transform duration-250">
                API Docs
              </a>
            </nav>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-3">
            <h3 className="font-space font-bold text-base mb-6 text-white">Get Started</h3>
            <button
              onClick={scrollToBeta}
              className="group relative w-full font-inter font-semibold text-sm px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all duration-250 hover:scale-[1.02] active:scale-[0.98] mb-6 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-500 rounded-xl"></span>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Join Beta Program</span>
              </span>
            </button>
            
            {/* Security Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-success-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-inter font-semibold text-sm text-white mb-1">Enterprise Security</div>
                  <div className="font-inter text-xs text-gray-400 leading-relaxed">SOC 2 compliant · GDPR ready · 256-bit encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Premium Treatment */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="font-inter text-sm text-gray-400">
                © {currentYear} Exotiq Inc. All rights reserved.
              </p>
              <nav className="flex items-center space-x-6 text-sm">
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors font-inter">
                  Terms
                </Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors font-inter">
                  Privacy
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors font-inter">
                  Cookies
                </Link>
              </nav>
            </div>
            <p className="font-inter text-sm text-gray-400 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-primary-400" />
              <span>Built for Operators, by Operators</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}