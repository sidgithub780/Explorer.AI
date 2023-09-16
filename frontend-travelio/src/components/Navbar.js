// Navbar.js
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import supabase from "../supabaseConfig";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const test = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setLoggedIn(true);
      }
    };

    test();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-300 text-black p-4 z-50">
      <ul className="flex justify-end space-x-4 pr-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!loggedIn ? (
          <li>
            <Link
              to="/login"
              className="bg-black rounded-md px-1 py-1 text-green-300 hover:scale-105 active:scale-95 font-bold"
            >
              Login
            </Link>
          </li>
        ) : (
          <button
            className="bg-black rounded-md px-1 py-1 text-green-300 hover:scale-105 active:scale-95 font-bold"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
            }}
          >
            Logout
          </button>
        )}
      </ul>

      <Outlet />
    </nav>
  );
};

export default Navbar;
