import { TerminalSquare } from 'lucide-react';

export function Chapter1_PromptEngineeringOver() {
  return (
    <div id="chapter-1" className="mb-16 scroll-mt-24 sm:mb-24">
      <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm sm:p-5 sm:text-base">
        <strong className="text-amber-950">Short version:</strong> if you are still trying to write the perfect prompt
        for a coding agent, you are fixing the wrong layer.
      </div>

      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <TerminalSquare className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        1. The real problem is not the prompt
      </h2>

      <p className="mb-6 text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
        In 2024 everybody talked about prompt engineering. The story was seductive: write a better paragraph and the
        model will write better code.
      </p>
      <p className="mb-6 leading-relaxed text-gray-700">
        In real repositories that idea falls apart quickly. The model produces something that looks plausible, the patch
        compiles, and then review catches the same old mess: wrong conventions, missing tests, skipped edge cases,
        static analysis violations, and files touched for no good reason.
      </p>
      <p className="mb-8 leading-relaxed text-gray-700">
        That is not a prompt problem. That is a missing-system problem. Software quality does not come from adjectives
        like <em>clean</em>, <em>robust</em>, or <em>senior-level</em>. It comes from a repository that makes the wrong move
        hard.
      </p>

      <div className="my-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-900">The actual rule</h3>
        <p className="mb-3 text-2xl font-semibold leading-tight text-blue-800 sm:text-3xl">The system is the prompt.</p>
        <p className="text-lg text-blue-700">The prompt disappears after the session. PHPUnit, PHPStan, and CI do not.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-3 font-bold text-gray-900">What I keep seeing</h3>
          <ol className="space-y-2 text-sm leading-relaxed text-gray-700 sm:text-base">
            <li>1. Someone writes a very detailed prompt.</li>
            <li>2. The model returns confident-looking code.</li>
            <li>3. The code passes a superficial glance but violates project rules.</li>
            <li>4. Review or CI catches the damage later.</li>
          </ol>
        </div>
        <div className="rounded-2xl bg-gray-900 p-5 text-white shadow-xl">
          <h3 className="mb-3 font-bold text-blue-200">What actually works</h3>
          <p className="leading-relaxed text-gray-300">
            Write the rules down once. Put them in the repository. Enforce them with tests, static analysis, CI, and
            concrete examples. Then the prompt can stay small and boring.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm text-violet-900 shadow-sm sm:p-5">
        <strong className="text-violet-950">→ See also (Prompts view):</strong> Once the system is in place, you still
        need prompts that constrain behavior and demand proof. Switch to the <strong>Prompts</strong> tab for practical
        patterns you can use tomorrow.
      </div>
    </div>
  );
}
