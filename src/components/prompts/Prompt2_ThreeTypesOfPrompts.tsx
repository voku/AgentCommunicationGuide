import { Flag, FileSearch, ShieldCheck, SquareCheckBig } from 'lucide-react';
import { CodeSnippet } from '../CodeSnippet';

const PARTS = [
  {
    icon: Flag,
    title: 'Goal',
    summary: 'What should change?',
  },
  {
    icon: FileSearch,
    title: 'Context',
    summary: 'Which files, examples, specs, or errors matter?',
  },
  {
    icon: ShieldCheck,
    title: 'Constraints',
    summary: 'What must not change?',
  },
  {
    icon: SquareCheckBig,
    title: 'Done when',
    summary: 'What must be true before the agent stops?',
  },
] as const;

export function Prompt2_ThreeTypesOfPrompts() {
  return (
    <div id="prompt-2" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        2. The Reusable Shape of a Good Prompt
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        A strong coding-agent prompt usually has four parts, and each part should survive handoff, retries, and tool
        execution.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        {PARTS.map(({ icon: Icon, title, summary }) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2">
                <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <p className="leading-relaxed text-gray-700">{summary}</p>
          </div>
        ))}
      </div>

      <CodeSnippet
        language="prompt"
        code={`Goal: Fix the concurrency bug in UserAccountService.
Context: Compare the failing path with tests in tests/Unit/UserAccountServiceTest.php and follow the immutable value-object pattern already used in src/Domain.
Constraints: Keep the public API unchanged. Do not add PHPStan ignores. Do not modify unrelated files.
Done when: Add one regression test that fails before the fix and passes after, PHPStan max passes, and paste the raw output.`}
      />

      <div className="rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg font-semibold text-blue-800">
          This is the reusable pattern the article should teach directly: goal, context, constraints, and done when.
        </p>
      </div>
    </div>
  );
}
