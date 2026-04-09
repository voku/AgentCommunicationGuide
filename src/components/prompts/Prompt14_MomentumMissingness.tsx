import { PromptExampleStack } from './PromptExampleLayouts';
import { CodeSnippet } from '../CodeSnippet';

export function Prompt14_MomentumMissingness() {
  return (
    <div id="prompt-14" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        14. Momentum Capture, Missingness, and Anti-Rubber-Stamp
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Three patterns that separate prompting that produces knowledge from prompting that just produces output.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title='"Use this momentum" — capture patterns before they disappear'
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Good. Now do the next one the same way.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Now that we established how unit tests should look in this project,\nuse this momentum and write the conventions down as a reusable skill.\nInclude: file location, naming pattern, assertion style, and what not to mock.',
            },
          ]}
          note="Good results left in a single session are wasted. Momentum-capture prompts convert a one-off win into a reusable pattern the next agent session can reload instantly."
        />

        <PromptExampleStack
          title='"What is missing?" vs "What is wrong?"'
          entries={[
            {
              label: 'Error-finding',
              tone: 'amber',
              content:
                'Find bugs in this implementation.',
            },
            {
              label: 'Missingness-finding',
              tone: 'blue',
              content:
                'List what is missing that should exist but does not yet.\nConsider: missing tests, missing validation, missing error handling, missing rollback strategy, missing documentation.',
            },
          ]}
          note="Error-finding and missingness-finding are different lenses. Bug-finding finds what is broken. Missingness-finding finds what was never built. Both are necessary. Neither replaces the other."
        />

        <PromptExampleStack
          title='Anti-rubber-stamp — challenge the polished draft'
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Here is the final implementation. Review it.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do not assume this solution is correct just because it looks polished.\nTreat it as a first draft.\nChallenge it: find the three most likely failure modes and the one design assumption that could be wrong.',
            },
          ]}
          note="Polished code anchors the next model into reviewer mode. Explicit anti-rubber-stamp prompts break that anchor and force adversarial thinking even on code that looks finished."
        />

        <PromptExampleStack
          title='Prove how it fails — not just that it might'
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content:
                'Check for errors.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Prove why this implementation will fail under load.\nDescribe the exact failure scenario: request volume, race condition, or resource exhaustion that triggers it.',
            },
          ]}
          note="'Prove why it fails' pushes the model toward adversarial and stress thinking instead of polite surface scanning. It produces specific failure scenarios, not reassuring summaries."
        />

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <h3 className="text-lg font-bold text-gray-900">Separation of ideation from implementation</h3>
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Step 1 — ideate</span>
              <CodeSnippet
                code={`Do not code yet.\nFirst clarify the options and tradeoffs for the three most realistic approaches.`}
                language="prompt"
              />
            </div>
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Step 2 — implement</span>
              <CodeSnippet
                code={`Now implement option 2 only.\nDo not revisit the other options.`}
                language="prompt"
              />
            </div>
          </div>
          <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-500">Why this works</span>
            <p className="text-sm leading-relaxed text-gray-700">
              A single "implement this" prompt collapses ideation and execution into one opaque step. Splitting them
              keeps the decision visible and the implementation reviewable.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <div className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-300">Revised final thesis</div>
        <p className="text-xl font-medium leading-tight text-white sm:text-2xl">
          Good prompts do not simulate expertise. They allocate attention, constrain behavior, demand proof, control
          stopping conditions — and capture what works so the next session can start where this one finished.
        </p>
      </div>
    </div>
  );
}
