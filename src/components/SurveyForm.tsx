import React from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, BarChart3 } from 'lucide-react';
import { SurveyData, SurveyQuestion } from '../data/surveyData';

interface SurveyFormProps {
  survey: SurveyData;
  responses: Record<string, any>;
  currentStep: number;
  onInputChange: (questionId: string, value: any) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

const SurveyForm: React.FC<SurveyFormProps> = ({
  survey,
  responses,
  currentStep,
  onInputChange,
  onNext,
  onPrevious,
  onSubmit
}) => {
  const currentQuestion = survey.questions[currentStep];
  const progress = ((currentStep + 1) / survey.questions.length) * 100;

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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(question.id, e.target.value)}
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
                      onInputChange(question.id, [...newValue, option]);
                    } else {
                      onInputChange(question.id, newValue.filter((v: string) => v !== option));
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
                onClick={() => onInputChange(question.id, option)}
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(question.id, e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(question.id, e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      {/* Survey Header with Progress Bar */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded" />
              </div>
              <div>
                <h1 className="font-space font-bold text-xl sm:text-2xl text-gray-900 dark:text-white">
                  {survey.title}
                </h1>
                <p className="font-inter text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Question {currentStep + 1} of {survey.questions.length}
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
              className="bg-primary-600 h-3 sm:h-2 rounded-full transition-all duration-500 ease-out"
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
              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">{survey.estimatedTime}</p>
            </div>
            <div className="bg-white/50 dark:bg-dark-700/50 p-3 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <BarChart3 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-inter font-semibold text-sm text-gray-900 dark:text-white">Questions</span>
              </div>
              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">{survey.questions.length} total</p>
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
                onClick={onPrevious}
                disabled={currentStep === 0}
                className="w-full sm:w-auto font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-400 min-h-[48px]"
              >
                Previous
              </button>
               
              {currentStep === survey.questions.length - 1 ? (
                <button
                  onClick={onSubmit}
                  className="w-full sm:w-auto font-poppins font-bold text-sm uppercase tracking-wide px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 min-h-[48px]"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Submit Survey</span>
                </button>
              ) : (
                <button
                  onClick={onNext}
                  className="w-full sm:w-auto font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurveyForm;
