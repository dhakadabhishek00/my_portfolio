import React, { useState } from "react";
import { Link } from "react-router-dom";
import myPic from "../public/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src={myPic}
              alt="My Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
            />
            <Link to="/" className="text-2xl font-bold tracking-wide">
              MyPortfolio
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-indigo-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-400 transition">
              About
            </Link>
            <Link to="/projects" className="hover:text-indigo-400 transition">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-indigo-400 transition">
              Skills
            </Link>
            <Link to="/contact" className="hover:text-indigo-400 transition">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-indigo-400">
            Home
          </Link>
          <Link to="/about" className="block hover:text-indigo-400">
            About
          </Link>
          <Link to="/projects" className="block hover:text-indigo-400">
            Projects
          </Link>
          <Link to="/skills" className="block hover:text-indigo-400">
            Skills
          </Link>
          <Link to="/contact" className="block hover:text-indigo-400">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
