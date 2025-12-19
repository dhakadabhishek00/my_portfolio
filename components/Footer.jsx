import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4  bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Abhishek Dhakad</h3>
            <p className="mt-2 text-sm">
              Building clean, scalable, and impactful web applications.
            </p>
          </div>

          <div className="flex gap-20">
  <a
    href="https://github.com/dhakadabhishek00"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white flex items-center gap-2 transition duration-300 ease-in-out"
  >
    <FaGithub /> GitHub
  </a>
  <a
    href="https://linkedin.com/in/abhishek-dhakad-015063322"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white flex items-center gap-2 transition duration-300 ease-in-out"
  >
    <FaLinkedin /> LinkedIn
  </a>
</div>

        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
