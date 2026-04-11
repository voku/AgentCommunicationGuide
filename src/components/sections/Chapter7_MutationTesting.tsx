import { Dna } from 'lucide-react';
import { CrossViewLink } from '../CrossViewLink';

const OUTCOMES = [
  {
    label: 'Passes on intended — fails on mutated',
    classification: 'Mutation-sensitive',
    meaning: 'The test is behaviorally validating something real. Trust it.',
    color: 'green',
  },
  {
    label: 'Passes on both (intended and mutated)',
    classification: 'Mutation-insensitive',
    meaning: 'The test is weak, incomplete, or non-detecting. It gives false confidence.',
    color: 'red',
  },
  {
    label: 'Fails on both (intended and mutated)',
    classification: 'Inconclusive',
    meaning: 'The implementation or test setup is unstable or incorrect. Fix the foundation first.',
    color: 'amber',
  },
] as const;

const COLOR_STYLES = {
  green: {
    badge: 'bg-green-100 text-green-800 border-green-200',
    row: 'bg-green-50/40',
    label: 'text-green-700',
    meaning: 'text-green-900',
    border: 'border-green-200',
  },
  red: {
    badge: 'bg-red-100 text-red-800 border-red-200',
    row: 'bg-red-50/40',
    label: 'text-red-700',
    meaning: 'text-red-900',
    border: 'border-red-200',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    row: 'bg-amber-50/40',
    label: 'text-amber-700',
    meaning: 'text-amber-900',
    border: 'border-amber-200',
  },
};

export function Chapter7_MutationTesting() {
  return (
    <div id="chapter-7" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <Dna className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        7. Mutation Testing Mandate
      </h2>

      <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm sm:p-5 sm:text-base">
        <strong className="text-amber-950">Core rule:</strong> do not assume a test is meaningful just because it passes.
        A passing test that cannot detect a broken implementation is noise dressed as signal.
      </div>

      <p className="mb-6 text-xl font-medium leading-relaxed text-gray-800">
        Every important unit test must prove it detects a real behavioral violation — not just that the code
        currently happens to produce an expected output.
      </p>
      <p className="mb-10 leading-relaxed text-gray-700">
        The way to prove that is to mutate the implementation in a minimal way that violates the intended behavior,
        then run the test against both the original and the mutated version. If the test does not fail on the mutation,
        the test is not protecting you.
      </p>

      <section className="mb-10">
        <h3 className="mb-4 border-b border-gray-100 pb-2 text-xl font-bold text-gray-900">
          The three possible results
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-gray-200 bg-gray-50 px-5 py-4 font-semibold text-gray-700">Observation</th>
                <th className="border-b border-gray-200 bg-gray-50 px-5 py-4 font-semibold text-gray-700">Classification</th>
                <th className="border-b border-gray-200 bg-gray-50 px-5 py-4 font-semibold text-gray-700">What it means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {OUTCOMES.map(({ label, classification, meaning, color }) => {
                const styles = COLOR_STYLES[color];
                return (
                  <tr key={classification} className={`hover:brightness-[0.98] ${styles.row}`}>
                    <td className={`px-5 py-3 font-mono text-xs leading-relaxed ${styles.label}`}>{label}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold ${styles.badge}`}>
                        {classification}
                      </span>
                    </td>
                    <td className={`px-5 py-3 leading-relaxed ${styles.meaning}`}>{meaning}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 border-b border-gray-100 pb-2 text-xl font-bold text-gray-900">
          How to instruct an agent to apply this
        </h3>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="border-b border-red-200 bg-red-50 px-5 py-4 text-sm font-bold text-red-700">
              Without mutation verification
            </div>
            <div className="p-5 sm:p-6">
              <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
                Add tests for the payment validation logic and make sure they pass.
              </pre>
              <p className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm leading-relaxed text-red-700">
                The agent can write tests that pass regardless of whether the logic is correct. A test that asserts
                the wrong thing, skips an edge case, or is coupled only to the happy path will still be green.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
            <div className="border-b border-blue-200 bg-blue-50 px-5 py-4 text-sm font-bold text-blue-700">
              With mutation verification
            </div>
            <div className="p-5 sm:p-6">
              <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
                {`Add tests for the payment validation logic.

For each important test you write:
1. Run the test against the real implementation. It must pass.
2. Introduce a minimal mutation in the implementation that violates the intended behavior
   (flip a comparison, remove a guard, invert a condition, change a threshold).
3. Run the test again against the mutated implementation.

Classify each test as:
- Mutation-sensitive: passes on real, fails on mutated. Keep it.
- Mutation-insensitive: passes on both. Strengthen the assertion or discard the test.
- Inconclusive: fails on both. Fix the test setup before continuing.

Do not report a test as complete until it is classified as mutation-sensitive.`}
              </pre>
              <p className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm leading-relaxed text-blue-900">
                This forces the agent to treat each test as a hypothesis, not a checkbox. The mutation step is the
                experiment that validates the hypothesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 border-b border-gray-100 pb-2 text-xl font-bold text-gray-900">
          What counts as a useful mutation
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Logic and branching', example: 'Flip && to || in a compound condition' },
            { label: 'Comparison operators', example: 'Change > to >= or == to !=' },
            { label: 'Validation guards', example: 'Remove a null check or an early return' },
            { label: 'State transitions', example: 'Skip a status update in a finite state machine' },
            { label: 'Error handling', example: 'Suppress a thrown exception or remove the catch' },
            { label: 'Threshold values', example: 'Change a boundary constant from 100 to 101' },
          ].map(({ label, example }) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-blue-600">{label}</span>
              <p className="font-mono text-sm text-gray-700">{example}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 sm:p-5">
          <strong className="text-gray-900">Do not use:</strong> trivial syntax breaks (remove a semicolon, rename a
          variable) as proof of test quality. Those mutations test the parser, not the logic.
        </div>
      </section>

      <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <p className="mb-3 text-lg font-semibold text-blue-200">
          A passing test is a candidate. A mutation-sensitive test is evidence.
        </p>
        <p className="leading-relaxed text-gray-300">
          Build the habit of treating test quality as a first-class system property, not a box to tick. A suite full
          of mutation-insensitive tests is a liability: it adds review friction, slows refactoring, and reports
          green while real regressions go undetected.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm text-violet-900 shadow-sm sm:p-5">
        <strong className="text-violet-950">→ See also:</strong> regression-seeking test prompts that push the agent
        past happy-path coverage are covered in{' '}
        <CrossViewLink targetView="prompts" sectionId="prompt-14">section 14 (Verify with Tests)</CrossViewLink> of the
        Prompts view.
      </div>
    </div>
  );
}
