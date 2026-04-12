import { CrossViewLink } from '../CrossViewLink';
import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt6_ContextAnchors() {
  return (
    <div id="prompt-6" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        6. Context and Attention Steering
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Both halves of this section target the same problem: the model is looking at the wrong things. Context anchors
        compress what the model needs to load. Attention steering limits where it is allowed to look.
      </p>

      {/* ── Context Anchors ──────────────────────────────────── */}
      <h3 className="mb-4 text-lg font-bold text-gray-900">Context anchors — compress intent with a single phrase</h3>

      <p className="mb-6 leading-relaxed text-gray-700">
        A short phrase can compress a surprising amount of execution detail when it points at a known methodology or a
        trusted repository pattern.
      </p>

      <div className="mb-8 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
        <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
          <h4 className="font-bold text-blue-800">Example anchor</h4>
        </div>
        <div className="p-5">
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed text-gray-100">
            Implement this using TDD Detroit School.
          </pre>
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          'tests first',
          'classicist testing',
          'state-based assertions',
          'inside-out development',
          'black-box testing',
          'minimal mocking',
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg text-blue-700">
          This is not more context. It is compressed context that the model can actually reload.
        </p>
      </div>

      {/* ── Attention Steering ───────────────────────────────── */}
      <h3 className="mb-4 text-lg font-bold text-gray-900">Attention steering — tell the model where to look</h3>

      <p className="mb-6 leading-relaxed text-gray-700">
        Good prompting is often less about adding context and more about steering attention toward the few signals that
        matter — and explicitly excluding everything else.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Limit the search space"
          entries={[
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Focus only on src/UserAccountService.php and tests/Unit/UserAccountServiceTest.php.\nIgnore unrelated modules unless you find direct evidence they are involved.',
            },
          ]}
          note="This stops the agent from burning time in unrelated files just because they are available."
        />

        <PromptExampleStack
          title="Point to the pattern source"
          entries={[
            {
              label: 'Best',
              tone: 'blue',
              content: 'Use AbstractValueObject and the existing immutable classes as the pattern source.',
            },
          ]}
          note="A pattern source tells the model exactly which examples deserve its attention. It is not more context — it is better-targeted attention."
        />
      </div>

      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 shadow-sm sm:p-5">
        <strong className="text-blue-950">→ See also:</strong>{' '}
        <CrossViewLink targetView="systems" sectionId="chapter-3">
          Chapter 3 (Put the rules in the repository) in the Systems view
        </CrossViewLink>{' '}
        explains where these anchors live — AGENTS.md, Skills files, and reusable workflow docs. Anchors in prompts are
        the runtime half; files are the persistence half.
      </div>
    </div>
  );
}
