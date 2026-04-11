import type { ReactNode } from 'react';
import { CheckCircle, Settings, XCircle } from 'lucide-react';

export function Chapter6_ReduceFriction() {
  return (
    <div id="chapter-6" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <Settings className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        6. Practical rules that hold up
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        Prompt engineering was useful when models were toys. Real software systems run on reproducibility.
      </p>

      <AdvancedSection title="The diagram is simple because the system should be simple">
        <div className="rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start gap-1">
            {[
              { label: 'Prompt', sub: 'what you want' },
              { label: 'Spec / TODO', sub: 'written intent, open questions' },
              { label: 'Implementation', sub: 'code changes scoped to the spec' },
              { label: 'Validators', sub: 'tests · mutation checks · static analysis · build' },
              { label: 'CI', sub: 'merge gate — machine-checkable done' },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex flex-col items-start">
                <div className="flex items-center gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-blue-900">{step.label}</span>
                    <span className="ml-2 text-sm text-blue-700">{step.sub}</span>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="ml-3 flex h-7 w-1 items-center">
                    <div className="mx-auto h-full w-0.5 bg-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AdvancedSection>

      <AdvancedSection title="Practical checklist">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <ol className="space-y-3 leading-relaxed text-gray-700">
            <li>1. Put repository-wide rules in AGENTS.md.</li>
            <li>2. Put reusable workflows in skills or dedicated process docs.</li>
            <li>3. Put acceptance criteria and open questions in the spec.</li>
            <li>4. Require a regression test for every behavioral change.</li>
            <li>5. Verify important tests are mutation-sensitive before treating them as complete.</li>
            <li>6. Run static analysis at the strictest level your project can sustain.</li>
            <li>7. Fail CI if tests, static analysis, or build checks fail.</li>
            <li>8. Prefer raw validator output over friendly summaries.</li>
          </ol>
        </div>
      </AdvancedSection>

      <AdvancedSection title="A few operational notes">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-100 bg-green-50/60 p-5">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-green-800">
              <CheckCircle className="h-5 w-5" /> Do
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Point to concrete repository examples.</li>
              <li>Restart sessions before context rot turns into cleanup work.</li>
              <li>Use faster models for implementation after a stronger model shaped the spec.</li>
              <li>Delete agent-written code when it should not exist.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-100 bg-red-50/60 p-5">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-red-800">
              <XCircle className="h-5 w-5" /> Don't
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Do not use persona prompts as a replacement for constraints.</li>
              <li>Do not accept “all green” without the actual output.</li>
              <li>Do not let the model guess missing intent when the spec is silent.</li>
              <li>Do not treat generated code as correct just because it sounds confident.</li>
              <li>Do not treat a passing test as sufficient evidence until it has survived a mutation.</li>
            </ul>
          </div>
        </div>
      </AdvancedSection>

      <div className="border-t border-gray-200 pt-12">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Conclusion</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Prompt engineering still matters a little. But it is no longer where the leverage is.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Real software systems do not run on prompts. They run on tests, mutation checks, static analysis, CI pipelines, repository
          conventions, and reproducible workflows.
        </p>
        <div className="rounded-2xl bg-gray-900 p-8 text-center text-white shadow-xl">
          <p className="mb-4 text-lg text-gray-300">Once those exist, the prompt becomes small.</p>
          <p className="mb-2 text-2xl font-semibold text-blue-300">And that is exactly how it should be.</p>
          <p className="text-gray-400">The system is the prompt.</p>
        </div>
      </div>
    </div>
  );
}

function AdvancedSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h3 className="mb-4 border-b border-gray-100 pb-2 text-xl font-bold text-gray-900">{title}</h3>
      {children}
    </section>
  );
}
