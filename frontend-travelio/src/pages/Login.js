import React from "react";
import supabase from "../supabaseConfig";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Home from "./Home";

const checkThreshold = (timeStampStr) => {
  const timestamp = new Date(timeStampStr);

  const currentTime = new Date();

  const timeDifferenceMs = currentTime - timestamp;

  const thresholdMs = 15 * 1000;

  if (Math.abs(timeDifferenceMs) <= thresholdMs) {
    return true;
  } else {
    return false;
  }
};

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
  } else if (checkThreshold(session.user.createdAt)) {
    return <div>new account asl</div>;
  } else {
    return <Home />;
  }
};

export default Login;
