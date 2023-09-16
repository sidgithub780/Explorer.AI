import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

const supabase = createClient(
  "https://rhaggswdriuihhlsoqrr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYWdnc3dkcml1aWhobHNvcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NzYzNjUsImV4cCI6MjAxMDQ1MjM2NX0.0eScEjA_vxTTF1gAKFaIV5eyV5JlfHppnGiig5QNDtg"
);

export default supabase;
