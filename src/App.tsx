import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LazyMotion, domAnimation } from 'motion/react';

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
import { Prompt15_FinalThesis } from './components/prompts/Prompt15_FinalThesis';

type View = 'systems' | 'prompts';

const SCROLL_OFFSET = 72;
const OBSERVER_ROOT_MARGIN = '-80px 0px -45% 0px';
const MAX_WIDTH_CLASS = 'max-w-[1120px]';

const VIEW_META: Record<View, { title: string; description: string }> = {
  systems: {
    title: 'Stop Writing Better Prompts. Build Better Systems.',
    description:
      'Reliable coding-agent output comes from tests, static analysis, CI, repository structure, and specs — not from prompt poetry.',
  },
  prompts: {
    title: 'Stop Writing Clever Prompts. Start Writing Operational Prompts.',
    description:
      'Good prompts allocate attention, constrain behavior, demand proof, and control stopping conditions — not motivational speeches.',
  },
};

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
  { id: 'prompt-4', label: '4. Reusable patterns' },
  { id: 'prompt-5', label: '5. Critical review' },
  { id: 'prompt-6', label: '6. Context & attention' },
  { id: 'prompt-7', label: '7. Planning prompts' },
  { id: 'prompt-8', label: '8. Native language' },
  { id: 'prompt-9', label: '9. Vague words' },
  { id: 'prompt-10', label: '10. Directness' },
  { id: 'prompt-11', label: '11. Double-check' },
  { id: 'prompt-12', label: '12. Deletion & scope' },
  { id: 'prompt-13', label: '13. Momentum & gaps' },
  { id: 'prompt-14', label: '14. Verify with tests' },
  { id: 'prompt-15', label: '15. Final thesis' },
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('chapter-1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [view, setView] = useState<View>(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get('view');
    return v === 'systems' || v === 'prompts' ? v : 'systems';
  });
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
          const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
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
    const { title, description } = VIEW_META[view];
    const url = new URL(window.location.href);
    url.searchParams.set('view', view);
    window.history.replaceState({}, '', url.toString());

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url.toString());
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url.toString());
  }, [view]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: OBSERVER_ROOT_MARGIN },
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [NAV_ITEMS]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <ViewContext.Provider value={{ switchView }}>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-blue-200">

          {/* ── Header ──────────────────────────────────────────── */}
          <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className={`mx-auto flex ${MAX_WIDTH_CLASS} items-center justify-between px-4 py-3 sm:px-6`}>
              <div className="flex items-center gap-2 font-semibold tracking-tight text-blue-600">
                <img
                  src={`${assetBase}favicon.svg`}
                  alt="suckup.de article icon"
                  className="h-6 w-6 rounded-md sm:h-8 sm:w-8"
                />
                <span className="text-sm sm:text-base"></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-xs">
                  2026 Edition
                </div>
                <ViewToggle view={view} onToggle={setView} />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-100">
              <div
                className="h-full bg-blue-600 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </header>

          {/* ── Body: sidebar + content ──────────────────────────── */}
          <div className={`mx-auto flex ${MAX_WIDTH_CLASS}`}>

            {/* Desktop sidebar */}
            <aside className="hidden md:block w-52 shrink-0">
              <nav
                aria-label="Table of contents"
                className="scrollbar-none sticky top-14 h-[calc(100vh-56px)] overflow-y-auto py-10 pr-4 pl-2"
              >
                <ul className="space-y-0.5 text-sm">
                  {NAV_ITEMS.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        aria-controls={id}
                        aria-current={activeSection === id ? 'true' : undefined}
                        className={`w-full rounded-md px-3 py-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                          activeSection === id
                            ? 'bg-blue-50 font-semibold text-blue-700'
                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 sm:py-12 md:py-16 md:pl-8">
              <article className="prose prose-base prose-blue max-w-3xl sm:prose-lg">
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
                    <Prompt15_FinalThesis />
                  </>
                )}
              </article>
            </main>
          </div>

          {/* Mobile drawer */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />
              <nav
                aria-label="Table of contents"
                className="scrollbar-none absolute inset-y-0 left-0 w-72 overflow-y-auto bg-white px-4 py-6 shadow-2xl"
              >
                <ul className="space-y-1 text-sm">
                  {NAV_ITEMS.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        aria-controls={id}
                        aria-current={activeSection === id ? 'true' : undefined}
                        className={`w-full rounded-md border-l-4 px-4 py-2.5 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                          activeSection === id
                            ? 'border-blue-600 bg-blue-50 font-semibold text-blue-700'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

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
