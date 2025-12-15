import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/assets/mylogo.jpg",
    github: "https://github.com/dhakadabhishek00/my-portfolio",
  },
  {
    title: "Todo App",
    description:
      "A clean and efficient task manager with CRUD operations, category filtering, and a responsive UI.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    image: "public/assets/todo.png",
    github: "https://github.com/dhakadabhishek00/TodoList",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
