import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Email Spam Detector",
    description: "Machine learning notebook for classifying emails as spam or safe messages.",
    tech: ["Jupyter Notebook", "Machine Learning", "Classification"],
    github: "https://github.com/dhakadabhishek00/email-spam-detector",
  },
  {
    title: "Car Price Prediction",
    description: "A predictive modeling project for estimating car prices from structured data.",
    tech: ["Jupyter Notebook", "Regression", "Data Science"],
    github: "https://github.com/dhakadabhishek00/car_price_prediction",
  },
  {
    title: "Sales Prediction",
    description: "Data analysis and prediction workflow for forecasting sales performance.",
    tech: ["Jupyter Notebook", "Forecasting", "Data Analysis"],
    github: "https://github.com/dhakadabhishek00/sales-prediction",
  },
  {
    title: "Leetcode Progress",
    description: "A C++ practice repository tracking data structures, algorithms, and problem-solving progress.",
    tech: ["C++", "DSA", "LeetCode"],
    github: "https://github.com/dhakadabhishek00/Leetcode-progress",
  },
  {
    title: "AI PDF Assistant",
    description: "A web-based assistant concept for working with PDF content and AI-style interactions.",
    tech: ["HTML", "AI", "PDF"],
    github: "https://github.com/dhakadabhishek00/AI-PDF-Assistant",
  },
  {
    title: "AI Assistant",
    description: "JavaScript-based assistant project for experimenting with interactive AI workflows.",
    tech: ["JavaScript", "AI Assistant", "Frontend"],
    github: "https://github.com/dhakadabhishek00/AI-Assistant-",
  },
  
  {
    title: "Chat App",
    description: "A JavaScript chat application project focused on messaging UI and app structure.",
    tech: ["JavaScript", "Chat", "Web App"],
    github: "https://github.com/dhakadabhishek00/chat-app",
  },
  
  {
    title: "Modern Portfolio",
    description: "A modern, responsive personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Portfolio"],
    github: "https://github.com/dhakadabhishek00/my-portfolio",
    
  },
  {
    title: "TodoList",
    description: "A clean task manager with CRUD operations, local persistence, and a focused interface.",
    tech: ["JavaScript", "Todo App", "CRUD"],
    github: "https://github.com/dhakadabhishek00/TodoList",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#f7f4ee] py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-rose-600">
              GitHub projects
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
              Projects from my repository.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-700">
            A curated collection of web, AI, machine learning, and DSA projects from my public GitHub profile.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.github} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
