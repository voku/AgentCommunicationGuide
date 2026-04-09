import { Bug, FileWarning, Wrench } from 'lucide-react';

const FAILURES = [
  {
    title: 'The impressive patch that ignores project rules',
    icon: Bug,
    story: 'A developer writes a long prompt. The model replies with a confident refactor. The code compiles, but it invents a new pattern, misses one edge case, and forgets the regression test. Review catches it a day later.',
    fix: 'Store the constraints in the repository: point to the existing pattern, require the failing test first, and make CI prove the patch stayed inside the guardrails.',
  },
  {
    title: 'Documentation that drifts the moment code changes',
    icon: FileWarning,
    story: 'The model writes beautiful documentation from intent instead of implementation. Two weeks later the code changed, the docs did not, and now the polished explanation is the least trustworthy artifact in the repo.',
    fix: 'Derive docs from code, tests, and observable behavior. If the reason behind a decision is missing, force a question instead of allowing a guess.',
  },
  {
    title: '“Clean this up” review culture',
    icon: Wrench,
    story: 'Everybody agrees the code should be cleaner, but nobody means exactly the same thing. One reviewer asks for smaller methods, another wants stricter types, a third wants fewer abstractions. The agent learns nothing stable from that.',
    fix: 'Replace taste with tooling. Run PHPStan at max level, require reproducible tests, and make CI fail on the exact issues you care about.',
  },
] as const;

export function Chapter5_SpecializeWork() {
  return (
    <div id="chapter-5" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <Bug className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        5. What fails in real codebases
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        This is where the whitepaper tone breaks down. Real repositories fail in boring, repetitive ways.
      </p>

      <div className="space-y-8">
        {FAILURES.map(({ title, icon: Icon, story, fix }) => (
          <div key={title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4">
              <Icon className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-red-500">Failure mode</span>
                <p className="leading-relaxed text-gray-700">{story}</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-blue-700">What fixes it</span>
                <p className="leading-relaxed text-blue-950">{fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
