import { useState, useEffect } from "react";
const slides = [
  {
    id: 1,
    title: "Welcome to My Portfolio",
    subtitle: "Full-Stack Developer | UI/UX Enthusiast",
    image: "/assets/slide1.jpg",
  },
  {
    id: 2,
    title: "Clean Code, Scalable Design",
    subtitle: "Building modular, reusable components",
    image: "/assets/slide2.jpg",
  },
  {
    id: 3,
    title: "Let's Work Together",
    subtitle: "Contact me for collaborations",
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
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0  transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 typing">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl typing">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full  ${
              index === current ? "bg-white" : "bg-gray-400 "
            }`}
          />
        ))}
      </div>
    </section>
  );
}
