// Survey service for handling survey submissions
import { submitSurveyToSupabase, SurveySubmission as SupabaseSubmission } from './supabaseClient';

export interface SurveySubmission {
  surveyType: string;
  responses: Record<string, any>;
  timestamp: string;
  userAgent: string;
  sessionId: string;
}

export class SurveyService {
  // Save survey to localStorage for debugging
  static saveToLocalStorage(data: SurveySubmission): void {
    try {
      const submissions = this.getLocalSubmissions();
      submissions.push(data);
      localStorage.setItem('survey_submissions', JSON.stringify(submissions));
      console.log('Survey saved to localStorage:', data);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  // Get all local survey submissions
  static getLocalSubmissions(): SurveySubmission[] {
    try {
      const stored = localStorage.getItem('survey_submissions');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  // Test backend connection
  static async testBackendConnection(): Promise<boolean> {
    try {
      const response = await fetch('/api/survey-submission', {
        method: 'OPTIONS',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Backend connection test response:', response.status);
      return response.status === 200 || response.status === 404; // 404 means endpoint exists but method not allowed
    } catch (error) {
      console.error('Backend connection test failed:', error);
      return false;
    }
  }

  // Submit to backend (when available)
  static async submitToBackend(data: SurveySubmission): Promise<boolean> {
    try {
      console.log('Attempting to submit to backend:', data);
      
      const response = await fetch('/api/survey-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log('Backend response status:', response.status);
      console.log('Backend response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const result = await response.json();
        console.log('Backend submission successful:', result);
        return true;
      } else {
        const errorText = await response.text();
        console.error('Backend submission failed:', response.status, response.statusText, errorText);
        return false;
      }
    } catch (error) {
      console.error('Backend submission error:', error);
      return false;
    }
  }

  // Submit survey (tries Supabase directly, falls back to localStorage)
  static async submitSurvey(data: SurveySubmission): Promise<boolean> {
    console.log('=== SURVEY SUBMISSION DEBUG ===');
    console.log('1. Starting survey submission...');
    
    // Always save to localStorage for debugging
    this.saveToLocalStorage(data);
    console.log('2. Survey saved to localStorage');

    try {
      console.log('3. Preparing Supabase data...');
      // Try to submit directly to Supabase
      const supabaseData: SupabaseSubmission = {
        survey_type: data.surveyType,
        responses: data.responses,
        submitted_at: data.timestamp,
        user_agent: data.userAgent,
        session_id: data.sessionId,
        ip_address: 'unknown' // We can't get IP from client-side
      };

      console.log('4. Supabase data prepared:', supabaseData);
      console.log('5. Attempting to submit to Supabase...');
      
      await submitSurveyToSupabase(supabaseData);
      console.log('6. ✅ Survey submitted to Supabase successfully');
      return true;
    } catch (error) {
      console.error('❌ Supabase submission failed:', error);
      console.log('7. Survey saved to localStorage only');
      return true; // Still return true since we saved locally
    }
  }

  // Get submission count
  static getSubmissionCount(): number {
    return this.getLocalSubmissions().length;
  }

  // Clear local submissions (for testing)
  static clearLocalSubmissions(): void {
    localStorage.removeItem('survey_submissions');
    console.log('Local survey submissions cleared');
  }
} 