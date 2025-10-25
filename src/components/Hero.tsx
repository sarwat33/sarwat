import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const lines = [
    'EEE Student @ CUET',
    'Tech Enthusiast',
    'Problem Solver',
    'Future Engineer',
  ];

  useEffect(() => {
    const currentLine = lines[currentLineIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentLine.length) {
            setDisplayedText(currentLine.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentLineIndex((currentLineIndex + 1) % lines.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, currentLineIndex, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-900 border border-green-900/30 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-green-900/30">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-2 text-green-600 text-sm ml-4">
              <Terminal size={16} />
              <span>terminal</span>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <p className="text-green-600">$ whoami</p>
              <h1 className="text-4xl md:text-5xl font-bold text-green-400 ml-4">
                Your Name
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-green-600">$ cat role.txt</p>
              <div className="ml-4 h-8 flex items-center">
                <span className="text-xl md:text-2xl text-green-500">
                  {displayedText}
                  <span className="animate-pulse">_</span>
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-green-600">$ cat bio.txt</p>
              <p className="text-green-500/80 ml-4 leading-relaxed">
                Sophomore at Chittagong University of Engineering & Technology (CUET),
                studying Electrical & Electronic Engineering. Passionate about technology,
                innovation, and building solutions that make a difference.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-green-600">$ ls social_links/</p>
              <div className="ml-4 flex flex-wrap gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-500 hover:text-green-300 transition-colors group"
                >
                  <Github size={20} />
                  <span className="group-hover:underline">github</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-500 hover:text-green-300 transition-colors group"
                >
                  <Linkedin size={20} />
                  <span className="group-hover:underline">linkedin</span>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-2 text-green-500 hover:text-green-300 transition-colors group"
                >
                  <Mail size={20} />
                  <span className="group-hover:underline">email</span>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-green-900/30 hover:bg-green-800/40 text-green-400 px-6 py-3 rounded border border-green-700/50 transition-all duration-300 hover:border-green-500"
              >
                <span className="text-green-600">&gt;</span> View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
