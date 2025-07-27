-- Temporarily disable RLS to test survey submissions
-- This will allow anonymous inserts for testing

-- Disable RLS on the survey_submissions table
ALTER TABLE public.survey_submissions DISABLE ROW LEVEL SECURITY;

-- Verify RLS is disabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'survey_submissions'; 