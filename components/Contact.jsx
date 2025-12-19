import React, { useState } from "react";
import emailjs from "emailjs-com";
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
      alert("enter valid email");
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
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="sticky top-24 max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
