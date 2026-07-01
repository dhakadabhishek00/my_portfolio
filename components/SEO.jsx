import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Abhishek Dhakad Portfolio";

const pages = {
  "/": {
    title: "Abhishek Dhakad | Backend Developer & ML Portfolio",
    description:
      "Backend developer and machine learning portfolio featuring Express, SQL, AI, data science, DSA, and web projects by Abhishek Dhakad.",
  },
  "/about": {
    title: "About Abhishek Dhakad | Backend Developer & ML Enthusiast",
    description:
      "Learn about Abhishek Dhakad, a backend developer and ML enthusiast focused on APIs, SQL, scalable logic, data-driven systems, and clean implementation.",
  },
  "/projects": {
    title: "Projects | Abhishek Dhakad",
    description:
      "Explore Abhishek Dhakad's portfolio projects, including AI assistants, machine learning models, data analysis, DSA practice, and web apps.",
  },
  "/skills": {
    title: "Skills | Abhishek Dhakad",
    description:
      "Technical skills used by Abhishek Dhakad, including backend development, Express.js, SQL, JavaScript, machine learning, data science, C/C++, debugging, and DSA.",
  },
  "/contact": {
    title: "Contact Abhishek Dhakad | Backend Developer & ML Enthusiast",
    description:
      "Contact Abhishek Dhakad for internships, collaborations, backend development, machine learning projects, AI projects, and portfolio work.",
  },
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);

    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname === "/Skills" ? "/skills" : pathname;
    const page = pages[normalizedPath] || pages["/"];
    const canonicalUrl = `${window.location.origin}${normalizedPath}`;
    const imageUrl = `${window.location.origin}/assets/logo.png`;

    document.title = page.title;
    setCanonical(canonicalUrl);

    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:site_name"]', "content", siteName);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
  }, [pathname]);

  return null;
}
