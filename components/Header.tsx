
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2 group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#66FF66] fill-current group-hover:scale-110 transition-transform duration-300">
        <path d="M20 10 L80 10 L80 40 L40 40 L40 90 L20 90 Z" />
        <path d="M50 50 L90 50 L90 90 L70 90 L70 70 L50 70 Z" className="opacity-70" />
      </svg>
    </div>
    <span className="text-xl font-extrabold tracking-tighter text-white uppercase italic">
      PERSONAL <span className="text-[#66FF66]">PAIVA</span>
    </span>
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Planos', href: '#planos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#121212]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-[#66FF66] transition-colors font-semibold text-xs tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1B5E20] border border-[#66FF66] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#66FF66] hover:text-[#121212] transition-all flex items-center space-x-2 font-bold text-sm group"
          >
            <MessageCircle size={16} fill="currentColor" className="text-[#66FF66] group-hover:text-[#121212]" />
            <span>Agendar Avaliação</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#121212] border-t border-white/10 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-bold tracking-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5500000000000" 
            className="bg-[#66FF66] text-[#121212] px-6 py-3 rounded font-extrabold text-center flex items-center justify-center space-x-2"
          >
            <MessageCircle size={18} />
            <span>Avaliação Grátis</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
