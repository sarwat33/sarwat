import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-950 text-green-400 font-mono transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-green-900/30 py-6 text-center text-green-600">
        <p>&gt; Built with React + TypeScript + Tailwind CSS</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
