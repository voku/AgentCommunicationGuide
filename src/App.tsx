import { useEffect, useRef, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';

import { ViewContext } from './contexts/ViewContext';

import { Chapter1_PromptEngineeringOver } from './components/sections/Chapter1_PromptEngineeringOver';
import { Chapter2_SpeakInConstraints } from './components/sections/Chapter2_SpeakInConstraints';
import { Chapter3_CompressIntent } from './components/sections/Chapter3_CompressIntent';
import { Chapter4_DesignEnvironment } from './components/sections/Chapter4_DesignEnvironment';
import { Chapter5_SpecializeWork } from './components/sections/Chapter5_SpecializeWork';
import { Chapter6_ReduceFriction } from './components/sections/Chapter6_ReduceFriction';

import { Prompt1_NoLongerTheStar } from './components/prompts/Prompt1_NoLongerTheStar';
import { Prompt2_ThreeTypesOfPrompts } from './components/prompts/Prompt2_ThreeTypesOfPrompts';
import { Prompt3_AntiAnchoringTrick } from './components/prompts/Prompt3_AntiAnchoringTrick';
import { Prompt4_AskForProof } from './components/prompts/Prompt4_AskForProof';
import { Prompt5_PreventHallucination } from './components/prompts/Prompt5_PreventHallucination';
import { Prompt6_ContextAnchors } from './components/prompts/Prompt6_ContextAnchors';
import { Prompt7_AttentionSteering } from './components/prompts/Prompt7_AttentionSteering';
import { Prompt8_PlanningPrompts } from './components/prompts/Prompt8_PlanningPrompts';
import { Prompt9_NativeLanguage } from './components/prompts/Prompt9_NativeLanguage';
import { Prompt10_VaguePhrases } from './components/prompts/Prompt10_VaguePhrases';
import { Prompt11_DoubleCheckMultiPass } from './components/prompts/Prompt11_DoubleCheckMultiPass';
import { Prompt12_DeletionContainment } from './components/prompts/Prompt12_DeletionContainment';
import { Prompt13_MomentumMissingness } from './components/prompts/Prompt13_MomentumMissingness';
import { Prompt14_VerifyWithTests } from './components/prompts/Prompt14_VerifyWithTests';

type View = 'systems' | 'prompts';

const SYSTEMS_NAV_ITEMS = [
  { id: 'chapter-1', label: '1. The real problem' },
  { id: 'chapter-2', label: '2. Why constraints win' },
  { id: 'chapter-3', label: '3. Put rules in files' },
  { id: 'chapter-4', label: '4. Same task, better system' },
  { id: 'chapter-5', label: '5. What fails in practice' },
  { id: 'chapter-6', label: '6. Practical rules' },
];

const PROMPTS_NAV_ITEMS = [
  { id: 'prompt-1', label: '1. Core mistake' },
  { id: 'prompt-2', label: '2. Prompt shape' },
  { id: 'prompt-3', label: '3. Prompt classes' },
  { id: 'prompt-4', label: '4. Reusable examples' },
  { id: 'prompt-5', label: '5. Critical review' },
  { id: 'prompt-6', label: '6. Context anchors' },
  { id: 'prompt-7', label: '7. Steer attention' },
  { id: 'prompt-8', label: '8. Planning prompts' },
  { id: 'prompt-9', label: '9. Native language' },
  { id: 'prompt-10', label: '10. Vague words' },
  { id: 'prompt-11', label: '11. Double-check' },
  { id: 'prompt-12', label: '12. Deletion & scope' },
  { id: 'prompt-13', label: '13. Momentum & gaps' },
  { id: 'prompt-14', label: '14. Verify with tests' },
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('chapter-1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [view, setView] = useState<View>('systems');
  const pendingScrollRef = useRef<string | null>(null);
  const assetBase = import.meta.env.BASE_URL;

  const NAV_ITEMS = view === 'systems' ? SYSTEMS_NAV_ITEMS : PROMPTS_NAV_ITEMS;

  const switchView = (targetView: View, sectionId?: string) => {
    pendingScrollRef.current = sectionId ?? null;
    setView(targetView);
  };

  useEffect(() => {
    const pendingId = pendingScrollRef.current;
    pendingScrollRef.current = null;

    if (pendingId) {
      setActiveSection(pendingId);
      const raf = requestAnimationFrame(() => {
        const element = document.getElementById(pendingId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
      return () => cancelAnimationFrame(raf);
    } else {
      const defaultSection = view === 'systems' ? 'chapter-1' : 'prompt-1';
      setActiveSection(defaultSection);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);

    const sections = NAV_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -40% 0px' },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [NAV_ITEMS]);

  const navScrollRef = useRef<HTMLDivElement>(null);
  const [navFade, setNavFade] = useState({ left: false, right: true });

  const updateNavFade = useCallback(() => {
    const el = navScrollRef.current;
    if (!el) return;
    setNavFade({
      left: el.scrollLeft > 4,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = navScrollRef.current;
    if (!el) return;
    updateNavFade();
    el.addEventListener('scroll', updateNavFade, { passive: true });
    return () => el.removeEventListener('scroll', updateNavFade);
  }, [updateNavFade, view]);

  useEffect(() => {
    const el = navScrollRef.current;
    if (!el) return;
    const activeBtn = el.querySelector<HTMLElement>('[aria-current="true"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    updateNavFade();
  }, [activeSection, updateNavFade]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <ViewContext.Provider value={{ switchView }}>
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-blue-200">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6">
            <div className="flex w-full items-center justify-between md:w-auto">
              <div className="flex items-center gap-2 font-semibold tracking-tight text-blue-600">
                <img
                  src={`${assetBase}favicon.svg`}
                  alt="suckup.de article icon"
                  className="h-6 w-6 rounded-md sm:h-8 sm:w-8"
                />
                <span className="text-sm sm:text-base">suckup.de</span>
              </div>

              <div className="flex items-center gap-3 md:hidden">
                <div className="text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-xs">
                  2026 Edition
                </div>
                <ViewToggle view={view} onToggle={setView} />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <nav
              aria-label="Table of contents"
              className="hidden min-w-0 flex-1 items-center justify-end gap-2 text-xs font-medium text-gray-600 md:flex"
            >
              <div className="shrink-0">
                <ViewToggle view={view} onToggle={setView} />
              </div>
              <div className="mx-1 h-4 w-px shrink-0 bg-gray-200" />
              <div className="relative min-w-0 flex-1">
                {navFade.left && (
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white/95 to-transparent" />
                )}
                {navFade.right && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white/95 to-transparent" />
                )}
                <div
                  ref={navScrollRef}
                  className="flex items-center gap-1 overflow-x-auto lg:gap-2 lg:text-sm"
                  style={{ scrollbarWidth: 'none' }}
                >
                  {NAV_ITEMS.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      aria-controls={id}
                      aria-current={activeSection === id ? 'true' : undefined}
                      className={`relative shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 lg:px-3 ${
                        activeSection === id ? 'font-bold text-blue-700' : 'hover:text-gray-900'
                      }`}
                    >
                      {activeSection === id && (
                        <m.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-blue-600"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {isMobileMenuOpen && (
            <nav className="absolute w-full border-t border-gray-100 bg-white px-4 py-2 shadow-lg md:hidden">
              <ul className="flex flex-col space-y-1">
                {NAV_ITEMS.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      aria-controls={id}
                      aria-current={activeSection === id ? 'true' : undefined}
                      className={`w-full rounded-md border-l-4 px-4 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                        activeSection === id
                          ? 'border-blue-600 bg-blue-50/50 font-bold text-blue-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-100">
            <div
              className="h-full bg-blue-600 transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 md:py-20">
          <article className="prose prose-base prose-blue max-w-none sm:prose-lg">
            {view === 'systems' ? (
              <>
                <div className="relative mb-12 overflow-hidden rounded-3xl bg-gray-950 shadow-2xl sm:mb-16">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.25),_transparent_30%)]" />
                  <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

                  <div className="relative z-10 px-6 py-12 text-center sm:py-20">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                      battle-tested engineering advice
                    </p>
                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
                      Stop Writing Better Prompts.
                      <br />
                      Build Better Systems.
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-blue-100 drop-shadow sm:text-2xl">
                      Reliable agent output comes from tests, static analysis, CI, repository structure, and specs — not
                      from prompt poetry.
                    </p>
                  </div>
                </div>

                <Chapter1_PromptEngineeringOver />
                <Chapter2_SpeakInConstraints />
                <Chapter3_CompressIntent />
                <Chapter4_DesignEnvironment />
                <Chapter5_SpecializeWork />
                <Chapter6_ReduceFriction />
              </>
            ) : (
              <>
                <div className="relative mb-12 overflow-hidden rounded-3xl bg-gray-950 shadow-2xl sm:mb-16">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),_transparent_30%)]" />
                  <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
                  <div className="absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />

                  <div className="relative z-10 px-6 py-12 text-center sm:py-20">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
                      battle-tested engineering advice
                    </p>
                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
                      Stop Writing Clever Prompts.
                      <br />
                      Start Writing Operational Prompts.
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-violet-100 drop-shadow sm:text-2xl">
                      Reliable coding agents do not need inspiring paragraphs. They need instructions that survive
                      execution.
                    </p>
                  </div>
                </div>

                <Prompt1_NoLongerTheStar />
                <Prompt2_ThreeTypesOfPrompts />
                <Prompt3_AntiAnchoringTrick />
                <Prompt4_AskForProof />
                <Prompt5_PreventHallucination />
                <Prompt6_ContextAnchors />
                <Prompt7_AttentionSteering />
                <Prompt8_PlanningPrompts />
                <Prompt9_NativeLanguage />
                <Prompt10_VaguePhrases />
                <Prompt11_DoubleCheckMultiPass />
                <Prompt12_DeletionContainment />
                <Prompt13_MomentumMissingness />
                <Prompt14_VerifyWithTests />
              </>
            )}
          </article>
        </main>

        <footer className="bg-gray-900 py-12 text-center text-sm text-gray-400">
          <p>suckup.de © 2026</p>
          <p className="mt-2 text-gray-500">
            {view === 'systems'
              ? 'The prompt should be small. The system is doing the real work.'
              : 'Prompts still matter — but only when they encode constraints, not personality.'}
          </p>
          <p className="mt-4">
            <a
              href="https://github.com/voku/AgentCommunicationGuide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-400 underline underline-offset-4 transition-colors hover:text-white"
            >
              Contribute on GitHub
            </a>
          </p>
        </footer>
      </div>
    </LazyMotion>
    </ViewContext.Provider>
  );
}

function ViewToggle({ view, onToggle }: { view: View; onToggle: (v: View) => void }) {
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-gray-200 bg-gray-100 p-0.5 text-xs font-medium">
      <button
        onClick={() => onToggle('systems')}
        aria-pressed={view === 'systems'}
        className={`rounded-full px-2.5 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
          view === 'systems' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Systems
      </button>
      <button
        onClick={() => onToggle('prompts')}
        aria-pressed={view === 'prompts'}
        className={`rounded-full px-2.5 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
          view === 'prompts' ? 'bg-white text-violet-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Prompts
      </button>
    </div>
  );
}
