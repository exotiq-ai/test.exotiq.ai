import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Linkedin, Building, Award, Users } from 'lucide-react';

export default function Footer() {
  const scrollToBeta = () => {
    // Navigate to homepage and scroll to beta section
    window.location.href = '/#beta';
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/Exotiq%20Lockup.png" 
                alt="ExotIQ.ai" 
                className="h-12 w-auto filter brightness-0 invert transition-opacity hover:opacity-80 object-contain"
              />
            </div>
            <p className="font-inter text-gray-300 max-w-md mb-6">
              The AI-powered command center for vehicle rental operations. 
              Built by hosts, for hosts. Scale your business with confidence.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:hello@exotiq.ai"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-inter">hello@exotiq.ai</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-dark-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-400">Backed by industry experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-400">20+ beta customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-400">Serving operators in 15+ cities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-space font-semibold text-lg mb-4">Platform</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-primary-400 transition-colors font-inter">
                Home
              </Link>
              <Link to="/features" className="block text-gray-300 hover:text-primary-400 transition-colors font-inter">
                Features
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-primary-400 transition-colors font-inter">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary-400 transition-colors font-inter">
                Contact
              </Link>
              <Link to="/survey" className="block text-gray-300 hover:text-primary-400 transition-colors font-inter">
                Survey
              </Link>
            </div>
          </div>

          {/* Company & Investors */}
          <div>
            <h3 className="font-space font-semibold text-lg mb-4">Company</h3>
            <div className="space-y-3">
              <button
                onClick={scrollToBeta}
                className="block font-poppins font-bold text-sm uppercase tracking-wide px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center w-full min-h-[44px] flex items-center justify-center"
              >
                Join Beta
              </button>
              <Link
                to="/investors"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Building className="w-4 h-4" />
                <span className="font-inter text-sm">Investors</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="font-inter text-gray-400 text-sm">
                © 2025 ExotIQ Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm mt-2 md:mt-0">
                <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors font-inter">
                  Terms & Conditions
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors font-inter">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors font-inter">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <p className="font-inter text-gray-400 text-sm mt-2 md:mt-0">
              Built by automotive enthusiasts, for automotive enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}