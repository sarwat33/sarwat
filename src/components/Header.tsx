import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-sm border-b border-green-900/30 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-green-400">
            <span className="text-green-600">&gt;</span> Portfolio_
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-green-400 hover:text-green-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-green-500 hover:text-green-300 transition-colors relative group"
                >
                  <span className="text-green-600">&gt;</span> {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 pb-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block text-green-500 hover:text-green-300 transition-colors w-full text-left"
                >
                  <span className="text-green-600">&gt;</span> {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
