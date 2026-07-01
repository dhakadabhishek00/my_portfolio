import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import { FiActivity, FiGitBranch } from "react-icons/fi";

const skills = [
  ["HTML", <SiHtml5 aria-hidden="true" />],
  ["CSS", <SiCss3 aria-hidden="true" />],
  ["React", <SiReact aria-hidden="true" />],
  ["Tailwind CSS", <SiTailwindcss aria-hidden="true" />],
  ["JavaScript", <SiJavascript aria-hidden="true" />],
  ["Express.js", <SiExpress aria-hidden="true" />],
  ["SQL", <SiSqlite aria-hidden="true" />],
  ["C/C++", <SiCplusplus aria-hidden="true" />],
  ["Debugging", <FiActivity aria-hidden="true" />],
  ["Data Structures", <FiGitBranch aria-hidden="true" />],
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              Toolkit
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Skills that ship ideas.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            A focused stack for backend services, machine learning workflows, and reliable implementation.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map(([skill, icon]) => (
            <div
              key={skill}
              className="lift-card rounded-2xl border border-white/10 bg-white/7 p-5 text-center"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-teal-300 text-2xl text-slate-950">
                {icon}
              </div>
              <div className="mt-4 text-sm font-black sm:text-base">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
