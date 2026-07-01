import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ title, description, tech = [], image, github }) => {
  return (
    <article className="portfolio-card lift-card overflow-hidden rounded-3xl border border-slate-900/10 bg-white shadow-xl shadow-slate-900/8">
      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.24),transparent_32%),linear-gradient(135deg,#0f172a,#1e293b_55%,#0f766e)] p-6 text-white">
            <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
              GitHub
            </div>
            <div>
              <div className="text-4xl font-black leading-none">{title.slice(0, 2).toUpperCase()}</div>
              <div className="mt-3 h-1 w-16 rounded-full bg-teal-300" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black text-slate-950">{title}</h3>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-900/10 bg-slate-100 px-3 py-1 text-xs font-black text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-teal-300"
          >
            <FaGithub aria-hidden="true" /> View Code
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
