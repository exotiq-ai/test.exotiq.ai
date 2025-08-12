import React from 'react';
import { MobileSection, MobileContainer } from './MobileOptimizations';
import { TrendingDown, AlertTriangle, Zap, CheckCircle } from 'lucide-react';

const OldVsExotiqSection: React.FC = () => (
  <MobileSection className="bg-gray-50 dark:bg-dark-800">
    <MobileContainer>
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-accent-600/20 rounded-full text-accent-700 dark:text-accent-300 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 animate-slide-up">
          <Zap className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
          The Transformation
        </div>
        <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 animate-slide-up px-2" style={{ animationDelay: '100ms' }}>
          Old Way vs. Exotiq Way
        </h2>
        <p className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 animate-slide-up px-2" style={{ animationDelay: '200ms' }}>
          Every day you manage manually is money left on the table. See how Exotiq transforms chaos into profit.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        {/* Problems */}
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="bg-red-50 dark:bg-red-900/20 p-6 sm:p-8 rounded-2xl border border-red-200 dark:border-red-800">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-bold text-2xl text-gray-900 dark:text-white">The Old Way</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-inter text-gray-700 dark:text-gray-300">Pricing guesswork costs you 20 to 30% revenue</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-inter text-gray-700 dark:text-gray-300">Missed maintenance equals $2,000+ emergency repairs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-inter text-gray-700 dark:text-gray-300">Platform fees eat 25 to 35% of every booking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-inter text-gray-700 dark:text-gray-300">Financial reconciliation takes hours weekly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-inter text-gray-700 dark:text-gray-300">Guest communication delays hurt reviews</p>
              </div>
            </div>
          </div>
        </div>
        {/* Solutions */}
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="bg-success-50 dark:bg-success-900/20 p-6 sm:p-8 rounded-2xl border border-success-200 dark:border-success-800">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-success-600 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-bold text-2xl text-gray-900 dark:text-white">The Exotiq Way</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <p className="font-inter text-gray-700 dark:text-gray-300">AI pricing maximizes revenue automatically</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <p className="font-inter text-gray-700 dark:text-gray-300">Predictive maintenance prevents breakdowns</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <p className="font-inter text-gray-700 dark:text-gray-300">Direct bookings equal 100% revenue retention</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <p className="font-inter text-gray-700 dark:text-gray-300">Automated financial tracking and reporting</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <p className="font-inter text-gray-700 dark:text-gray-300">24/7 AI assistant handles guest inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  </MobileSection>
);

export default OldVsExotiqSection; 