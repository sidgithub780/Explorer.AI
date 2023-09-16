// Navbar.js
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-300 text-black p-4 z-50">
      <ul className="flex justify-end space-x-4 pr-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Outlet />
    </nav>
  );
};

export default Navbar;
