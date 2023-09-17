import React from "react";
import supabase from "../supabaseConfig";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Home from "./Home";
import BackgroundGreenery from "../components/BackgroundGreenery";

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
      <>
        <div className="absolute inset-0 z-[-1]">
          <BackgroundGreenery />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="w-2/5 overflow-y-hidden bg-black bg-opacity-50 p-5 rounded-xl relative">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={[]}
          >
            {/* Add Tailwind CSS classes to customize the text color */}
            <input
              className="text-black-500 border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Username"
            />
            <input
              className="text-red-500 border border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Password"
            />
          </Auth>
          </div>
        </div>
      </>
    );
  } else if (checkThreshold(session.user.createdAt)) {
    return <div>new account asl</div>;
  } else {
    return <Home />;
  }
};

export default Login;
