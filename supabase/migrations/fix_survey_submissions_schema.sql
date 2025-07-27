-- Fix survey_submissions table schema
-- Drop the existing table and recreate with proper types

DROP TABLE IF EXISTS public.survey_submissions;

CREATE TABLE public.survey_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  survey_type text NOT NULL,
  responses jsonb NULL,
  submitted_at timestamp with time zone NOT NULL DEFAULT now(),
  user_agent text NULL,
  session_id text NULL,
  ip_address text NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT survey_submissions_pkey PRIMARY KEY (id)
);

-- Add indexes for better performance
CREATE INDEX idx_survey_submissions_survey_type ON public.survey_submissions(survey_type);
CREATE INDEX idx_survey_submissions_submitted_at ON public.survey_submissions(submitted_at);
CREATE INDEX idx_survey_submissions_session_id ON public.survey_submissions(session_id);

-- Grant permissions
GRANT ALL ON public.survey_submissions TO authenticated;
GRANT ALL ON public.survey_submissions TO anon;
GRANT ALL ON public.survey_submissions TO service_role;

-- Enable Row Level Security
ALTER TABLE public.survey_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for anonymous users to insert survey submissions
CREATE POLICY "Allow anonymous survey submissions" 
ON public.survey_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Policy for authenticated users to insert survey submissions
CREATE POLICY "Allow authenticated survey submissions" 
ON public.survey_submissions 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Policy for service role to read all submissions (for admin access)
CREATE POLICY "Service role can read all submissions" 
ON public.survey_submissions 
FOR SELECT 
TO service_role
USING (true);

-- Policy for service role to manage all submissions
CREATE POLICY "Service role can manage all submissions" 
ON public.survey_submissions 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true); 