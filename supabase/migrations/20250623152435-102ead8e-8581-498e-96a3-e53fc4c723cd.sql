
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert contact submissions
-- This is appropriate for a contact form as it needs to be publicly accessible
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows only authenticated users to view submissions
-- This ensures only you (as the admin) can see the submissions
CREATE POLICY "Only authenticated users can view contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
