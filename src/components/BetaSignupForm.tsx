import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useFormSubmission } from '../hooks/useFormSubmission';
import LoadingSpinner from './LoadingSpinner';

interface BetaFormData {
  fullName: string;
  email: string;
  fleetSize: string;
  currentPlatform: string;
  challenge: string;
}

export default function BetaSignupForm() {
  const { isSubmitting, isSubmitted, error, submitForm } = useFormSubmission();
  const [formData, setFormData] = useState<BetaFormData>({
    fullName: '',
    email: '',
    fleetSize: '',
    currentPlatform: '',
    challenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData, 'beta');
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center animate-slide-up">
        <div className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-success-600 rounded-full mx-auto mb-4">
          <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
        </div>
        <h3 className="font-space font-bold text-xl sm:text-2xl text-white mb-4">
          Welcome to the Beta!
        </h3>
        <p className="font-inter text-base sm:text-lg opacity-90 mb-6">
          Thanks {formData.fullName}! We've secured your spot and you'll receive an email with next steps within 24 hours.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="font-inter text-sm opacity-75">
            🎉 You're now #79 on our exclusive beta list
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <span className="font-inter text-red-400 text-sm">{error}</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="font-inter w-full px-4 py-3 sm:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 group-hover:shadow-md text-sm sm:text-base min-h-[48px]"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="font-inter w-full px-4 py-3 sm:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 group-hover:shadow-md text-sm sm:text-base min-h-[48px]"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="group">
          <select 
            name="fleetSize"
            value={formData.fleetSize}
            onChange={handleInputChange}
            className="font-inter w-full px-4 py-3 sm:py-4 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 group-hover:shadow-md text-sm sm:text-base min-h-[48px]"
            required
            disabled={isSubmitting}
          >
            <option value="">Fleet Size</option>
            <option value="1-5">1-5 vehicles</option>
            <option value="6-15">6-15 vehicles</option>
            <option value="16-50">16-50 vehicles</option>
            <option value="50+">50+ vehicles</option>
          </select>
        </div>
        <div className="group">
          <input
            type="text"
            name="currentPlatform"
            value={formData.currentPlatform}
            onChange={handleInputChange}
            placeholder="Current Platform (Optional)"
            className="font-inter w-full px-4 py-3 sm:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 group-hover:shadow-md text-sm sm:text-base min-h-[48px]"
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="mb-6 group">
        <textarea
          name="challenge"
          value={formData.challenge}
          onChange={handleInputChange}
          placeholder="Tell us about your biggest fleet management challenge..."
          rows={4}
          className="font-inter w-full px-4 py-3 sm:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 group-hover:shadow-md resize-none text-sm sm:text-base"
          disabled={isSubmitting}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="font-poppins font-bold text-xs sm:text-sm uppercase tracking-wide px-6 sm:px-8 py-4 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white rounded-lg transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto min-h-[48px] w-full sm:w-auto justify-center touch-manipulation"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" color="white" />
            <span>Securing Your Spot...</span>
          </>
        ) : (
          <>
            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Secure My Beta Spot</span>
          </>
        )}
      </button>
    </form>
  );
}