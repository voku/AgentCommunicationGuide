import { PromptExampleStack } from './PromptExampleLayouts';
import { CodeSnippet } from '../CodeSnippet';

export function Prompt13_MomentumMissingness() {
  return (
    <div id="prompt-13" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        13. Momentum, Continuation &amp; Missingness
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Three patterns that keep the agent moving instead of stopping after the first acceptable result — and one that
        finds gaps instead of bugs.
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
          title="Continuation beyond the first good result"
          intro="A weak prompt stops after one acceptable fix. A stronger prompt tells the agent to continue within the already validated boundary until the defined done condition is reached."
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Great. Now make it better.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Good starting point.\nContinue step by step from the current state and do not restart.\nAsk yourself for confirmation through validation and keep running in auto-agent mode\nuntil you reached [the point of done as defined in your custom instructions].',
            },
          ]}
          noteTitle="Why it works"
          note="Prevents premature stopping. Keeps the agent on the same validated track. Turns one fix into bounded follow-up work without unnecessary restarts."
        />

        {/* ── Minimal CI-loop Prompt ───────────────────────────── */}
        <PromptExampleStack
          title="Minimal CI-loop prompt — delegate done to custom instructions"
          intro="The most effective continuation prompts are often also the shortest. When the definition of done lives in your custom instructions or AGENTS.md, a single-line prompt is enough to keep the agent running without further input."
          entries={[
            {
              label: 'Verbose',
              tone: 'amber',
              content:
                'Please run the CI pipeline and if it fails, try to investigate what the issue is, then fix it and run it again, and keep doing that until everything passes.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Run the CI pipeline yourself and fix the issue until you reached the point of done as defined in your custom instructions.',
            },
          ]}
          noteTitle="Why it works"
          note="Three properties make this minimal prompt effective: 'yourself' is explicit — no waiting for permission; 'fix the issue' is directive, not interrogative; 'as defined in your custom instructions' delegates the done condition to the pre-loaded AGENTS.md or Skills file rather than restating it inline. The agent already knows what done looks like — it just needs to be told to run until it gets there."
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
          title="TODO sweep plus immediate low-hanging fruit"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Search for TODOs and maybe clean a few things up.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Analyze all `TODO@` comments in the codebase.\nGroup them by file and theme.\nFix any low-hanging fruit you can safely resolve directly.\nThen update TODO.md with:\n  • the remaining TODOs\n  • what you fixed immediately\n  • what still needs follow-up\nDo not invent tasks that are not grounded in the repository.',
            },
          ]}
          note="This combines missingness-finding with continuation. The agent audits what still exists, resolves the easy wins immediately, and leaves behind a durable TODO artifact for the remaining work."
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

    </div>
  );
}
