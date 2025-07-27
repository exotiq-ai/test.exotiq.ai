-- Fix RLS policies for survey submissions
-- Drop existing policies first
DROP POLICY IF EXISTS "Allow anonymous survey submissions" ON public.survey_submissions;
DROP POLICY IF EXISTS "Allow authenticated survey submissions" ON public.survey_submissions;
DROP POLICY IF EXISTS "Service role can read all submissions" ON public.survey_submissions;
DROP POLICY IF EXISTS "Service role can manage all submissions" ON public.survey_submissions;

-- Disable RLS temporarily to test
ALTER TABLE public.survey_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS with more permissive policies
ALTER TABLE public.survey_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for anonymous surveys)
CREATE POLICY "Allow all inserts" 
ON public.survey_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow service role to read all
CREATE POLICY "Service role can read all" 
ON public.survey_submissions 
FOR SELECT 
TO service_role
USING (true);

-- Allow service role to manage all
CREATE POLICY "Service role can manage all" 
ON public.survey_submissions 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true); 