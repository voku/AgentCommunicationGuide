import { ArrowRight } from 'lucide-react';
import { CodeSnippet } from '../CodeSnippet';

export function ContextRotSection() {
  return (
    <section id="context" className="mb-12 sm:mb-16 scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Context is Everything (And It Rots)</h2>
      <p>
        Context is everything you need, but it's also your biggest liability. As a session drags on and the context window fills up, you will inevitably encounter <strong>Context Rot</strong>.
      </p>
      
      <div className="my-8 p-6 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Context Rot</h3>
        <svg viewBox="0 0 400 300" className="w-full max-w-md font-sans mx-auto" role="img" aria-label="Graph showing LLM performance degrading as context length increases">
          <defs>
            <linearGradient id="rotGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#65a30d" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
          <path d="M 50 50 L 50 250 L 370 250" fill="none" stroke="#6b7280" strokeWidth="1.5" />
          <path d="M 45 55 L 50 45 L 55 55" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 365 245 L 375 250 L 365 255" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 50 150 L 210 150 L 210 250" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5,5" />
          <path d="M 60 80 C 160 80, 160 220, 350 230" fill="none" stroke="url(#rotGradient)" strokeWidth="5" strokeLinecap="round" />
          <text x="-150" y="30" transform="rotate(-90)" textAnchor="middle" className="fill-gray-700 text-base font-medium tracking-wide">LLM Performance</text>
          <text x="210" y="290" textAnchor="middle" className="fill-gray-700 text-base font-medium tracking-wide">Context Length</text>
          <text x="60" y="270" textAnchor="middle" className="fill-gray-500 text-sm">0%</text>
          <text x="210" y="270" textAnchor="middle" className="fill-gray-500 text-sm">50%</text>
          <text x="350" y="270" textAnchor="middle" className="fill-gray-500 text-sm">100%</text>
          <text x="60" y="65" className="fill-[#65a30d] text-lg font-medium">stable</text>
          <text x="220" y="145" className="fill-gray-700 text-lg font-medium">50% Rule</text>
          <text x="350" y="210" textAnchor="end" className="fill-[#dc2626] text-lg font-medium">unreliable</text>
        </svg>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">The 50% Rule & Session Resets</h3>
      <p>
        Once you pass the 50% mark of your effective context window, the model's reliability plummets. <strong>If the LLM is driving you crazy</strong>—looping on the same errors, forgetting previous instructions, or hallucinating files—do not try to fix it. <strong>Start a new session.</strong>
      </p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Context Minimization</h3>
      <p>
        The best counter-strategy to context rot is <strong>context isolation</strong>. Instead of feeding the entire repository to the agent, feed only what is necessary: specific files, related tests, and the relevant spec.
      </p>
      <CodeSnippet code="Focus only on the files involved in this feature.&#10;Ignore unrelated modules." language="prompt" />
      <p>This dramatically improves agent performance and reduces hallucinations.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Split Big Files</h3>
      <p>
        Current coding agents often only look into the first ~200 lines of code on the first try, and often only read the file step by step if you ask them or they have a reason for it. So now the time of Clean-Code comes to pay. Keep your files small and focused.
      </p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Strict Definitions of Done</h3>
      <p>
        Never rely on the LLM to tell you when a task is complete. Use <strong>static analysis and tests</strong> to create an objective, machine-verifiable definition of done. If the CI is red, the agent is not done.
      </p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Preventing "Green Checkmark Cheating"</h3>
      <p>
        LLMs are inherently lazy. If a test is failing and the implementation is hard, the model will often try to cheat to get a passing build. You must explicitly instruct the LLM:
      </p>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-5 rounded-r-xl my-4">
        <ul className="space-y-2 text-sm sm:text-base text-red-900 font-medium">
          <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" /> Do not mock implementations (unless explicitly required).</li>
          <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" /> Do not skip, comment out, or remove existing checks and tests.</li>
        </ul>
      </div>
    </section>
  );
}
