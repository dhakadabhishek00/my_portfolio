import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight, FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import myPic from "../public/assets/logo.png";

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/skills" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/82 text-white shadow-2xl backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
            <img
              src={myPic}
              alt="Abhishek Dhakad"
              className="h-11 w-11 rounded-full border-2 border-teal-300 object-cover shadow-lg shadow-teal-500/20"
            />
            <span className="min-w-0">
              <span className="block truncate text-base font-black tracking-wide sm:text-lg">
                Abhishek Dhakad
              </span>
              <span className="hidden text-xs font-medium text-teal-200 sm:block">
                Backend developer & ML
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white text-slate-950"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/dhakadabhishek00"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-2 text-sm font-black text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300"
            >
              GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="/assets/Abhishek_Dhakad_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10"
            >
              Resume <FiDownload aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:bg-white/20"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/20"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/20"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/96 px-4 pb-5 pt-3 md:hidden">
          <div className="section-shell grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive ? "bg-white text-slate-950" : "bg-white/5 text-slate-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/assets/Abhishek_Dhakad_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-teal-400 px-4 py-3 text-sm font-black text-slate-950"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
