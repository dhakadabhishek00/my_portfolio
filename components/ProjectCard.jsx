import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, tech = [], image, github }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-xl font-semibold text-black-200 mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-white/20 text-black rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-grey-200 hover:text-blue-300 transition"
          >
            <FaGithub /> Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
