import React from 'react';
import { MobileSection, MobileContainer } from './MobileOptimizations';
import { Brain } from 'lucide-react';

interface PlatformModulesSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PlatformModulesSection: React.FC<PlatformModulesSectionProps> = ({ activeTab, setActiveTab }) => (
  <MobileSection className="bg-white dark:bg-dark-900">
    <div id="platform-features">
    <MobileContainer>
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 animate-slide-up">
          <Brain className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
          The ExotIQ Platform
        </div>
        <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 animate-slide-up px-2" style={{ animationDelay: '100ms' }}>
          Intelligent Modules. Seamless Integration.
        </h2>
        <p className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 animate-slide-up px-2" style={{ animationDelay: '200ms' }}>
          Each module solves a specific operational challenge. Together, they transform your business.
        </p>
      </div>
      {/* Tabbed Interface */}
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-gray-100 dark:bg-dark-800 p-2 rounded-2xl">
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-6 py-3 rounded-xl font-inter font-semibold transition-all duration-300 ${
              activeTab === 'pricing'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
            }`}
          >
            Pricing Automation
          </button>
          <button
            onClick={() => setActiveTab('availability')}
            className={`px-6 py-3 rounded-xl font-inter font-semibold transition-all duration-300 ${
              activeTab === 'availability'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
            }`}
          >
            Availability Management
          </button>
          <button
            onClick={() => setActiveTab('messaging')}
            className={`px-6 py-3 rounded-xl font-inter font-semibold transition-all duration-300 ${
              activeTab === 'messaging'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
            }`}
          >
            Messaging Automation
          </button>
          {/* Add more tabs as needed */}
        </div>
        {/* Tab Content (placeholder) */}
        <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-md">
          {/* Render content based on activeTab here */}
          <p className="text-center text-gray-700 dark:text-gray-300">[Module content for {activeTab}]</p>
        </div>
      </div>
    </MobileContainer>
    </div>
  </MobileSection>
);

export default PlatformModulesSection; 