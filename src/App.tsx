import { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';

import { Chapter1_PromptEngineeringOver } from './components/sections/Chapter1_PromptEngineeringOver';
import { Chapter2_SpeakInConstraints } from './components/sections/Chapter2_SpeakInConstraints';
import { Chapter3_CompressIntent } from './components/sections/Chapter3_CompressIntent';
import { Chapter4_DesignEnvironment } from './components/sections/Chapter4_DesignEnvironment';
import { Chapter5_SpecializeWork } from './components/sections/Chapter5_SpecializeWork';
import { Chapter6_ReduceFriction } from './components/sections/Chapter6_ReduceFriction';

const NAV_ITEMS = [
  { id: 'chapter-1', label: '1. The Shift' },
  { id: 'chapter-2', label: '2. Constraints' },
  { id: 'chapter-3', label: '3. Compress Intent' },
  { id: 'chapter-4', label: '4. Environment' },
  { id: 'chapter-5', label: '5. Specialization' },
  { id: 'chapter-6', label: '6. Friction' }
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('chapter-1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll) * 100);
    }

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section tracking
    const sections = NAV_ITEMS.map(item => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Optimistically set active section on click
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-blue-200">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2 text-blue-600 font-semibold tracking-tight">
              <img src="/logo.jpg" alt="Agent Communication Guide Logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-md object-cover" />
              <span className="text-sm sm:text-base">Agentic Patterns</span>
            </div>
            
            <div className="flex items-center gap-3 md:hidden">
              <div className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-widest">
                2026 Edition
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav aria-label="Table of contents" className="hidden md:flex items-center justify-end gap-1 lg:gap-2 text-xs lg:text-sm font-medium text-gray-600">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-controls={id}
                aria-current={activeSection === id ? 'true' : undefined}
                className={`relative px-2 lg:px-3 py-1.5 whitespace-nowrap transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                  activeSection === id ? 'text-blue-700 font-bold' : 'hover:text-gray-900'
                }`}
              >
                {activeSection === id && (
                  <m.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-2 shadow-lg absolute w-full">
            <ul className="flex flex-col space-y-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    aria-controls={id}
                    aria-current={activeSection === id ? 'true' : undefined}
                    className={`w-full text-left px-4 py-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all ${
                      activeSection === id ? 'bg-blue-50/50 text-blue-700 font-bold border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
        
        {/* Read Indicator Line */}
        <div className="h-1 bg-gray-100 w-full absolute bottom-0 left-0">
          <div 
            className="h-full bg-blue-600 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        {/* Article Header */}
        <article className="prose prose-base sm:prose-lg prose-blue max-w-none">
          <div className="relative mb-12 sm:mb-16 rounded-3xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center min-h-[350px] sm:min-h-[450px]">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
              style={{ backgroundImage: "url('/hero-image.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            
            <div className="relative z-10 px-6 py-12 sm:py-20 text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                How to Talk to Your Coding Agent
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto drop-shadow">
                Why prompt engineering is dying and execution design is replacing it.
              </p>
            </div>
          </div>

          <Chapter1_PromptEngineeringOver />
          <Chapter2_SpeakInConstraints />
          <Chapter3_CompressIntent />
          <Chapter4_DesignEnvironment />
          <Chapter5_SpecializeWork />
          <Chapter6_ReduceFriction />
          
        </article>
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <p>Agentic Patterns © 2026</p>
        <p className="mt-2 text-gray-500">The future of AI-assisted development is not better prompt poetry. It's better engineering systems.</p>
      </footer>
    </div>
    </LazyMotion>
  );
}
