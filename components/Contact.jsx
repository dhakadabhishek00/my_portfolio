import { useState } from "react";
import emailjs from "emailjs-com";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

    if (!regex.test(formData.email)) {
      alert("Enter a valid email");
      return;
    }

    emailjs
      .sendForm(
        "service_wii8pgi",
        "template_cghf6rj",
        e.target,
        "l6kK0EGLAcR8QTCCJ"
      )
      .then(() => alert("Email sent"))
      .catch((err) => console.log(err));

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="soft-grid bg-[#f7f4ee] py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-2xl sm:p-9">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            Let us build something crisp.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Have a project, internship opportunity, or collaboration idea? Send a message and I will get back to you.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href="mailto:dhakadabhishek00@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4 text-sm font-bold text-slate-100 transition hover:bg-white/12"
            >
              <FiMail className="text-teal-300" aria-hidden="true" />dhakadabhishek00@gmail.com
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4 text-sm font-bold text-slate-100">
              <FiMapPin className="text-teal-300" aria-hidden="true" /> India
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/dhakadabhishek00"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-teal-200"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhishek-dhakad-015063322"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-slate-700">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-slate-900/10 bg-white px-4 text-base font-medium outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-black text-slate-700">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-slate-900/10 bg-white px-4 text-base font-medium outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-black text-slate-700">
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="min-h-12 rounded-2xl border border-slate-900/10 bg-white px-4 text-base font-medium outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
              placeholder="What should we build?"
            />
          </label>

          <label className="mt-5 grid gap-2 text-sm font-black text-slate-700">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="resize-none rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-base font-medium outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
              placeholder="Tell me a little about your idea..."
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white shadow-xl shadow-slate-900/18 transition hover:bg-teal-700 sm:w-auto"
          >
            Send Message <FiSend aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
