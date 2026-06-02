import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://vgyslbcclavibzjngpfv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZneXNsYmNjbGF2aWJ6am5ncGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNzAzOTQsImV4cCI6MjA5NDk0NjM5NH0.W-fvSNIuxZ7u6wrFMksUZm9HeiyQPa05PYufBHto9zo"
);

export { supabase as s };
