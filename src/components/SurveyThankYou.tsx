import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, DollarSign } from 'lucide-react';

interface SurveyThankYouProps {
  surveyType: string | null;
}

const SurveyThankYou: React.FC<SurveyThankYouProps> = ({ surveyType }) => {
  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Animation */}
          <div className="flex items-center justify-center w-24 h-24 bg-success-600 rounded-full mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          {/* Main Thank You Message */}
          <h1 className="font-space font-bold text-5xl md:text-6xl text-gray-900 dark:text-white mb-6 animate-slide-up">
            Thank You! 🎉
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Your insights are invaluable in helping us build the perfect fleet management solution.
          </p>
          
          {/* What Happens Next Card */}
          <div className="bg-white dark:bg-dark-700 p-8 rounded-2xl max-w-3xl mx-auto shadow-2xl animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h3 className="font-space font-bold text-2xl text-gray-900 dark:text-white mb-6">
              What happens next?
            </h3>
            
            {/* Incentive Highlight */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-xl mb-6 border border-primary-200 dark:border-primary-800">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <DollarSign className="w-6 h-6 text-primary-600" />
                <span className="font-space font-bold text-lg text-primary-700 dark:text-primary-300">
                  First 50 respondents get priority beta access + $25 Amazon gift card
                </span>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-space font-semibold text-gray-900 dark:text-white">Analysis Phase</h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">We'll analyze your responses within 48 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent-600 rounded-full flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-space font-semibold text-gray-900 dark:text-white">Beta Access</h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">You'll receive priority beta access when we launch</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-success-600 rounded-full flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-space font-semibold text-gray-900 dark:text-white">Reward Delivery</h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">Your incentive will be sent to your email within 5 business days</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurveyThankYou;
