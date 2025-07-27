import { createClient } from '@supabase/supabase-js';

// You'll need to replace these with your actual Supabase credentials
// Find these in your Supabase project settings > API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mlfzduuclgdscdlztzdi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZnpkdXVjbGdkc2NkbHp0emRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMTI3NzUsImV4cCI6MjA2Nzc4ODc3NX0.MYMwtO6wgDEqaECwFypS2OZtKY0mnUdh2wAPeiM6w5E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Interface for survey submission
export interface SurveySubmission {
  survey_type: string;
  responses: Record<string, any>;
  submitted_at: string;
  user_agent: string;
  session_id: string;
  ip_address?: string;
}

// Function to submit survey directly to Supabase
export async function submitSurveyToSupabase(data: SurveySubmission) {
  try {
    console.log('🔗 Supabase client - Starting submission...');
    console.log('🔗 Supabase URL:', supabaseUrl);
    console.log('🔗 Supabase data to insert:', data);
    
    const { data: result, error } = await supabase
      .from('survey_submissions')
      .insert([data])
      .select();

    if (error) {
      console.error('❌ Supabase error:', error);
      console.error('❌ Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw error;
    }

    console.log('✅ Survey submitted to Supabase successfully:', result);
    return result;
  } catch (error) {
    console.error('❌ Failed to submit to Supabase:', error);
    throw error;
  }
}

// Function to get all survey submissions
export async function getSurveySubmissions() {
  try {
    const { data, error } = await supabase
      .from('survey_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to get survey submissions:', error);
    throw error;
  }
} 