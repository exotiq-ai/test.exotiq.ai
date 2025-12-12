import { useState } from 'react';
import { trackBetaSignup, trackContactForm } from '../components/Analytics';

interface FormSubmissionState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

interface FormData {
  [key: string]: any;
}

export function useFormSubmission() {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const submitForm = async (formData: FormData, formType: 'beta' | 'contact') => {
    setState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      
      if (!supabaseUrl) {
        throw new Error('Supabase configuration missing');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/handle-form-submission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          type: formType,
          formData: formData
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      logger.info('Form submitted successfully', { formType, result });
      
      // Track analytics events
      if (formType === 'beta') {
        trackBetaSignup(formData.email || '');
      } else if (formType === 'contact') {
        trackContactForm(formData.subject || 'general');
      }
      
      setState({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
      
    } catch (error) {
      logger.error('Form submission error', { error, formType });
      setState({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error instanceof Error ? error.message : 'An error occurred while submitting the form' 
      });
    }
  };

  const resetForm = () => {
    setState({ isSubmitting: false, isSubmitted: false, error: null });
  };

  return {
    ...state,
    submitForm,
    resetForm
  };
}