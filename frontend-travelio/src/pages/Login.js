import React from "react";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://rhaggswdriuihhlsoqrr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYWdnc3dkcml1aWhobHNvcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NzYzNjUsImV4cCI6MjAxMDQ1MjM2NX0.0eScEjA_vxTTF1gAKFaIV5eyV5JlfHppnGiig5QNDtg"
);

const Login = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/5 overflow-y-hidden bg-white p-5 rounded-xl">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
            providers={[]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Logged in!
        <button
          className="bg-black rounded-md px-9 py-3 text-green-300 text-xl hover:scale-105 active:scale-95 font-bold mt-4"
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
};

export default Login;
