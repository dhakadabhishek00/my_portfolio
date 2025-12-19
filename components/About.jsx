import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-shrink- 0">
            <img
              src="/assets\mylogo.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-500"
            />
          </div>

          <div className="text-gray-700 md:w-3/4">
            <p className="text-lg leading-relaxed mb-4">
              Hi, I’m <span className="font-semibold">Abhishek Dhakad</span>, a
              passionate full-stack developer who loves building dynamic web
              applications with clean, scalable code. I enjoy solving complex
              problems, optimizing performance, and creating user-friendly
              designs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My expertise spans React, Tailwind CSS, JavaScript, Express.js,
              SQL, and C/C++. I thrive on debugging, modular design, and
              connecting theory with real-world applications.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I’m motivated by growth, collaboration, and
              building impactful projects that feel professional and polished.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
