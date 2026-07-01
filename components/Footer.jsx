import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 text-slate-300">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-black text-white">Abhishek Dhakad</h3>
            <p className="mt-2 max-w-md text-sm leading-6">
              Building clean, scalable, and impactful web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/dhakadabhishek00"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-slate-950"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhishek-dhakad-015063322"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-slate-950"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="/assets/Abhishek_Dhakad_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-slate-950"
            >
              <FiDownload aria-hidden="true" /> Resume
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm">
          Copyright {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
