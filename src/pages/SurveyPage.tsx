import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Users, TrendingUp, Star, ArrowRight, ExternalLink, CheckCircle, Clock, DollarSign, AlertTriangle, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../data/structuredData';
import { surveys, SurveyData, SurveyQuestion } from '../data/surveyData';
import { SurveyService } from '../services/surveyService';
import SurveyDebug from '../components/SurveyDebug';

// Map icon strings to components when using surveys
const iconMap = { Users, TrendingUp, Star };

export default function SurveyPage() {
  const [searchParams] = useSearchParams();
  const surveyType = searchParams.get('type');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update useState hooks to have explicit types
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const currentSurvey = surveyType && surveys[surveyType as keyof typeof surveys];

  const handleInputChange = (questionId: string, value: any) => {
    setResponses((prev: Record<string, any>) => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSurvey && currentStep < currentSurvey.questions.length - 1) {
      setCurrentStep((prev: number) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev: number) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Scroll to top to show thank you message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Prepare survey data
      const surveyData = {
        surveyType: surveyType || 'general',
        responses,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        sessionId: sessionStorage.getItem('exotiq_session_id') || 'unknown'
      };

      console.log('Submitting survey data:', surveyData);

      // Use the survey service to handle submission
      const success = await SurveyService.submitSurvey(surveyData);
      
      if (success) {
        console.log('Survey submitted successfully');
        
        // Track analytics if available
        if (window.gtag) {
          window.gtag('event', 'survey_completed', {
            survey_type: surveyType,
            response_count: Object.keys(responses).length
          });
        }
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      // Still show success to user even if submission fails
    }
    
    setIsSubmitted(true);
  };

  const renderQuestion = (question: SurveyQuestion) => {
    const currentValue = responses[question.id];

    switch (question.type) {
      case 'radio':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={currentValue === option}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(question.id, e.target.value)}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                />
                <span className="font-inter text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  checked={currentValue?.includes(option) || false}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = currentValue || [];
                    if (e.target.checked) {
                      handleInputChange(question.id, [...newValue, option]);
                    } else {
                      handleInputChange(question.id, newValue.filter((v: string) => v !== option));
                    }
                  }}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                />
                <span className="font-inter text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'scale':
        return (
          <div className="flex space-x-2">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleInputChange(question.id, option)}
                className={`w-12 h-12 rounded-lg border-2 font-semibold transition-colors ${
                  currentValue === option
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            value={currentValue || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(question.id, e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        );

      case 'text':
        return (
          <input
            type="text"
            value={currentValue || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(question.id, e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
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
  }

  if (!currentSurvey) {
    return (
      <div className="pt-16">
        <SEOHead
          title="Fleet Management Survey - Help Shape Exotiq.ai"
          description="Share your fleet management experience and help shape Exotiq.ai's development. Choose from surveys for small fleets (1-5 vehicles), scaling operations (6-50 vehicles), or exotic/luxury fleets."
          keywords="fleet management survey, Turo host feedback, vehicle rental insights, fleet operations research, automotive industry survey"
          url="https://exotiq.ai/survey"
          structuredData={breadcrumbSchema([
            { name: "Home", url: "https://exotiq.ai" },
            { name: "Survey", url: "https://exotiq.ai/survey" }
          ])}
        />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-space font-bold text-5xl md:text-6xl text-gray-900 dark:text-white mb-6">
              Help Shape Exotiq
            </h1>
            <p className="font-inter text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your insights directly influence our product roadmap. Choose the survey that best 
              matches your fleet size and experience.
            </p>
          </div>
        </section>

        {/* Survey Selection */}
        <section className="py-20 bg-white dark:bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(surveys).map(([key, survey]) => {
                const Icon = iconMap[survey.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={key}
                    to={`/survey?type=${key}`}
                    className={`group bg-gradient-to-br from-${survey.color}-50 to-${survey.color}-100 dark:from-${survey.color}-900/20 dark:to-${survey.color}-800/20 p-8 rounded-2xl border border-${survey.color}-200 dark:border-${survey.color}-800 hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className={`flex items-center justify-center w-16 h-16 bg-${survey.color}-600 rounded-xl mx-auto mb-4 group-hover:bg-${survey.color}-700 transition-colors`}>
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-2 text-center">
                      {survey.title}
                    </h3>
                    <p className="font-inter text-gray-600 dark:text-gray-300 mb-4 text-center">
                      {survey.subtitle}
                    </p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="font-inter text-sm text-gray-500">{survey.estimatedTime}</span>
                    </div>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
                      {survey.description}
                    </p>
                    <div className={`bg-${survey.color}-100 dark:bg-${survey.color}-900/30 p-3 rounded-lg mb-6`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <DollarSign className={`w-4 h-4 text-${survey.color}-600`} />
                        <span className="font-inter font-semibold text-sm text-gray-900 dark:text-white">Incentive:</span>
                      </div>
                      <p className="font-inter text-xs text-gray-700 dark:text-gray-300">{survey.incentive}</p>
                    </div>
                    <div className={`font-poppins font-bold text-sm uppercase tracking-wide text-${survey.color}-600 dark:text-${survey.color}-400 text-center flex items-center justify-center space-x-2`}>
                      <span>Start Survey</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Your Input Matters */}
        <section className="py-20 bg-gray-50 dark:bg-dark-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-space font-bold text-4xl text-gray-900 dark:text-white mb-6">
              Why Your Input Matters
            </h2>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-12">
              Every feature we build is informed by real host experiences. Your survey responses 
              directly influence our development priorities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Data-Driven Development
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300">
                  We build features based on the most common pain points identified in surveys.
                </p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-accent-600 rounded-lg mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Community Input
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300">
                  Join a community of forward-thinking hosts shaping the industry's future.
                </p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-success-600 rounded-lg mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Priority Access
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300">
                  Survey participants get first access to beta features and exclusive updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Survey Form - Now shows progress bar immediately when survey type is selected
  const currentQuestion = currentSurvey.questions[currentStep];
  const progress = ((currentStep + 1) / currentSurvey.questions.length) * 100;

  const CurrentIcon = iconMap[currentSurvey.icon as keyof typeof iconMap];

  return (
    <div className="pt-16">
      {/* Survey Header with Progress Bar - Always visible when survey type is selected */}
      <section className={`py-8 sm:py-12 bg-gradient-to-br from-${currentSurvey.color}-50 to-${currentSurvey.color}-100 dark:from-${currentSurvey.color}-900/20 dark:to-${currentSurvey.color}-800/20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-12 h-12 bg-${currentSurvey.color}-600 rounded-lg flex-shrink-0`}>
                {CurrentIcon && <CurrentIcon className="w-6 h-6 text-white" />}
              </div>
              <div>
                <h1 className="font-space font-bold text-xl sm:text-2xl text-gray-900 dark:text-white">
                  {currentSurvey.title}
                </h1>
                <p className="font-inter text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Question {currentStep + 1} of {currentSurvey.questions.length}
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-inter text-sm text-gray-600 dark:text-gray-400 mb-1">Progress</div>
              <div className="font-space font-semibold text-lg text-gray-900 dark:text-white">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 sm:h-2">
            <div 
              className={`bg-${currentSurvey.color}-600 h-3 sm:h-2 rounded-full transition-all duration-500 ease-out`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Survey Info */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white/50 dark:bg-dark-700/50 p-3 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-inter font-semibold text-sm text-gray-900 dark:text-white">Time</span>
              </div>
              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">{currentSurvey.estimatedTime}</p>
            </div>
            <div className="bg-white/50 dark:bg-dark-700/50 p-3 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <BarChart3 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-inter font-semibold text-sm text-gray-900 dark:text-white">Questions</span>
              </div>
              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">{currentSurvey.questions.length} total</p>
            </div>
            <div className="bg-white/50 dark:bg-dark-700/50 p-3 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-inter font-semibold text-sm text-gray-900 dark:text-white">Reward</span>
              </div>
              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-8 sm:py-12 bg-white dark:bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-dark-800 p-6 sm:p-8 rounded-2xl">
            <h2 className="font-space font-semibold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
              {currentQuestion.question}
            </h2>
            
            {renderQuestion(currentQuestion)}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="w-full sm:w-auto font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-400 min-h-[48px]"
              >
                Previous
              </button>
              
              {currentStep === currentSurvey.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className={`w-full sm:w-auto font-poppins font-bold text-sm uppercase tracking-wide px-8 py-3 bg-${currentSurvey.color}-600 hover:bg-${currentSurvey.color}-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 min-h-[48px]`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Submit Survey</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`w-full sm:w-auto font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-${currentSurvey.color}-600 hover:bg-${currentSurvey.color}-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2 min-h-[48px]`}
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Debug component (only visible in development) */}
      <SurveyDebug />
    </div>
  );
}