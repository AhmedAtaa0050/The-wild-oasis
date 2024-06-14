import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tcablfjwhlyvqsgblghh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYWJsZmp3aGx5dnFzZ2JsZ2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMTEyNjIsImV4cCI6MjAzMzY4NzI2Mn0.ovpa9ef98oW7N_ZUEGRH-FhVMq2bAdVlC4kixlQJCZo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
