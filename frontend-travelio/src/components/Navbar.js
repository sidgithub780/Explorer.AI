// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-300 text-black p-4 z-50">
      <ul className="flex justify-end space-x-4 pr-5">
        <li>
          <a href="/" className="text-black text-lg">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-black text-lg">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-black text-lg">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
