import { PromptExampleStack } from './PromptExampleLayouts';
import { CodeSnippet } from '../CodeSnippet';

export function Prompt13_MomentumMissingness() {
  return (
    <div id="prompt-13" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        13. Momentum, Expansion &amp; Missingness
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Four patterns that keep the agent moving instead of stopping after the first acceptable result.
      </p>

      <div className="space-y-6">
        {/* ── Momentum Prompt ─────────────────────────────────── */}
        <PromptExampleStack
          title="Momentum Prompt — keep going until the boundary is reached"
          intro="Momentum prompts keep the agent moving after one successful step. Instead of stopping after the first fix, the agent extends the same validated approach through the next logical scope, step by step, using passing checks as internal confirmation."
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content: 'Good. Now do the next one the same way.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Use the momentum from the work you just completed and continue into the next logical scope.\n\nDo not restart from scratch. Reuse the files, patterns, tests, and constraints already discovered.\n\nWork step by step. After each step:\n  • validate the result\n  • treat passing validation as internal confirmation\n  • continue automatically without waiting for user input\n\nDo not stop after the first adjacent fix. Keep going until the defined boundary is reached.\n\nReport:\n  • what you extended\n  • what you validated\n  • what is still missing',
            },
          ]}
          noteTitle="Why it works"
          note="Keeps active repo context alive. Prevents the agent from stopping too early. Turns one fix into bounded follow-up work. Replaces chat pauses with validation gates."
        />

        {/* ── Momentum Example ────────────────────────────────── */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <h3 className="text-lg font-bold text-gray-900">Momentum Prompt — applied example</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Here is the same template applied to a concrete task: back-filling PHP feature coverage version by version.
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <CodeSnippet
              code={`Use the momentum from the current feature-coverage work to validate the same for older PHP versions too.\n\nDo not restart discovery. Reuse the parser entry points, test structure, and documentation style already established.\n\nGo version by version. After each version:\n  • add or extend the smallest useful regression coverage\n  • run the existing validation\n  • treat passing results as internal confirmation\n  • continue automatically to the next version\n\nDo not wait for my confirmation. Ask yourself for confirmation through validation and keep going until PHP 8.5 is reached, starting with PHP 5.3.\n\nKeep runtime support and analyzable source coverage clearly separated in tests and docs.`}
              language="prompt"
            />
          </div>
          <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-500">What makes this concrete</span>
            <p className="text-sm leading-relaxed text-gray-700">
              The boundary is explicit (PHP 5.3 → PHP 8.5). The reuse contract is explicit (same parser entry points,
              test structure, documentation style). Validation replaces the confirmation dialog. The agent self-advances
              without pausing between versions.
            </p>
          </div>
        </div>

        {/* ── Expansion Prompt ─────────────────────────────────── */}
        <PromptExampleStack
          title="Expansion Prompt — push one level further without rewriting"
          intro="Expansion prompts prevent premature stopping. The agent takes what already exists and extends it one level further — more complete, more general, or more thorough — without changing direction or rewriting from scratch."
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content: 'Great. Now make it better.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do it step by step and ask for confirmation after each [placeholder],\nbut ask yourself for confirmation and run in auto agent mode\nuntil you reached [the point of done as defined in your custom instructions].',
            },
          ]}
          noteTitle="Why it works"
          note="Prevents premature stopping. Keeps the agent on the same track. Turns a rough draft into a fuller version. Avoids unnecessary rewrites."
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

      <div className="mt-8 rounded-r-2xl border-l-4 border-violet-500 bg-violet-50 p-5 text-sm text-violet-900 shadow-sm sm:p-6">
        <strong className="text-violet-950">→ See also:</strong> Anti-rubber-stamp, anti-anchoring, and self-correction
        are covered in depth in{' '}
        <strong>section 5 (Critical Review: Anti-Anchoring and Self-Correction)</strong> above.
      </div>

      <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <div className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-300">Final thesis</div>
        <p className="text-xl font-medium leading-tight text-white sm:text-2xl">
          Good prompts do not simulate expertise. They allocate attention, constrain behavior, demand proof, control
          stopping conditions — and capture what works so the next session can start where this one finished.
        </p>
      </div>
    </div>
  );
}
