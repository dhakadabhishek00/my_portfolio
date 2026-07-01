import { useEffect, useState } from 'react';
import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ShowProject from '../components/ShowProject'
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const Home = () => (
  <>
    <HeroSection />
    <About />
    <ShowProject />
    <Skills />
    <Contact />
  </>
);

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', theme === 'dark' ? '#020617' : '#f7f4ee');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`theme-${theme} min-h-screen w-full flex flex-col bg-[#f7f4ee] text-slate-950 transition-colors duration-300`}>
      <SEO />
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<ShowProject />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
