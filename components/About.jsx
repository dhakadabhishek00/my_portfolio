const About = () => {
  return (
    <section id="about" className="soft-grid bg-[#f7f4ee] py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-teal-400/20 blur-2xl" />
            <img
              src="/assets/mylogo.png"
              alt="Abhishek Dhakad"
              className="relative aspect-square w-full rounded-[2rem] border border-slate-900/10 object-cover shadow-2xl"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
              About me
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              I build practical web products with clean UI and solid engineering.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Hi, I am <span className="font-black text-slate-950">Abhishek Dhakad</span>, a backend developer and machine learning enthusiast focused on building reliable systems with clean, scalable code.
              </p>
              <p>
                My toolkit includes JavaScript, Express.js, SQL, machine learning, data analysis, C/C++, React, and Tailwind CSS. I enjoy debugging, modular design, and turning technical ideas into practical applications.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["10+", "Core skills"],
                ["2", "Featured projects"],
                ["100%", "Responsive focus"],
              ].map(([value, label]) => (
                <div key={label} className="glass-panel rounded-2xl p-5">
                  <div className="text-3xl font-black text-slate-950">{value}</div>
                  <div className="mt-1 text-sm font-bold text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
