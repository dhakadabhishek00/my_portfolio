import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4  bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">MyPortfolio</h3>
            <p className="mt-2 text-sm">
              Building clean, scalable, and impactful web applications.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-white">
              <i className="fas fa-envelope text-2xl"></i>
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
