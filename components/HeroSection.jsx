import { useEffect, useState } from "react";
import { FiArrowRight, FiCode, FiCpu, FiLayers } from "react-icons/fi";

const slides = [
  {
    id: 1,
    title: "Backend developer building reliable systems and ML projects.",
    subtitle: "Express, SQL, machine learning, data workflows, and clean API design.",
    image: "/assets/slide1.jpg",
  },
  {
    id: 2,
    title: "Clean code meets sharp product thinking.",
    subtitle: "Reusable components, responsive layouts, and scalable architecture.",
    image: "/assets/slide2.jpg",
  },
  {
    id: 3,
    title: "Ready to build something that feels excellent.",
    subtitle: "Open for internships, collaborations, and ambitious web projects.",
    image: "/assets/slide3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 pt-18 text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover opacity-42"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.28),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(244,63,94,0.22),transparent_26%),linear-gradient(135deg,rgba(2,6,23,0.82),rgba(15,23,42,0.68))]" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            Available for new opportunities
          </div>
          <h1 className="text-balance text-4xl font-black leading-[1.03] tracking-normal sm:text-5xl lg:text-7xl">
            {slides[current].title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {slides[current].subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 font-black text-slate-950 shadow-xl shadow-teal-500/20 transition hover:bg-teal-300"
            >
              Start a Project <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-black text-white backdrop-blur-md transition hover:bg-white/16"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="dark-glass rounded-3xl p-5 sm:p-6">
          <div className="grid gap-4">
            {[
              {
                title: "Backend APIs",
                copy: "Express and SQL foundations for practical, maintainable services.",
                icon: <FiLayers size={22} aria-hidden="true" />,
              },
              {
                title: "Machine Learning",
                copy: "Data-driven projects for prediction, classification, and analysis.",
                icon: <FiCpu size={22} aria-hidden="true" />,
              },
              {
                title: "Code Quality",
                copy: "Debugging, data structures, and maintainable implementation.",
                icon: <FiCode size={22} aria-hidden="true" />,
              },
            ].map(({ title, copy, icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/8 p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-teal-300 text-slate-950">
                  {icon}
                </div>
                <h2 className="text-xl font-black">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "w-9 bg-teal-300" : "w-2.5 bg-white/45 hover:bg-white"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
