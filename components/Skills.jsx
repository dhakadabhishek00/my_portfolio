import React from "react";

const skills = [
  "Html",
  "CSS",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Express.js",
  "SQL",
  "C/C++",
  "Debugging",
  "Data Structures",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 rounded-lg shadow-md bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
