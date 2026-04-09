import type { ReactNode } from 'react';
import { CheckCircle, Search, ShieldCheck } from 'lucide-react';

export function Chapter2_SpeakInConstraints() {
  return (
    <div id="chapter-2" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <ShieldCheck className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        2. Why constraints win
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Long prompts are fragile. Constraints are not.
      </p>

      <div className="space-y-6 mb-12">
        <MechanismCard
          icon={<CheckCircle className="h-6 w-6 text-blue-600" />}
          title="They survive the session"
          description="A good prompt is gone as soon as the conversation ends. A failing PHPUnit test, a PHPStan rule, or a blocked CI pipeline is still there tomorrow. That is the difference between advice and engineering."
          examples={['PHPUnit regression test', 'PHPStan on max level', 'CI gate that blocks the merge']}
        />
        <MechanismCard
          icon={<Search className="h-6 w-6 text-blue-600" />}
          title="They shrink the search space"
          description="Repository examples beat prose because they are precise. If the codebase already has the right migration pattern, DTO shape, or test structure, point to it. Do not re-explain what the repository already knows."
          examples={['Match the existing value object', 'Use the established test layout', 'Follow the current migration pattern']}
        />
        <MechanismCard
          icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
          title="They make verification boring"
          description="That is a compliment. The best outcome is not a dramatic review discussion. The best outcome is a boring green build, static analysis with no new ignores, and a patch that stayed inside scope."
          examples={['No new baseline ignores', 'Exact checks listed in the spec', 'Raw validator output attached']}
        />
      </div>

      <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
          Models drift. Repositories with tests, static analysis, and CI do not. If you want reliable output, stop
          asking the model to remember everything and start building a system that remembers for it.
        </p>
      </div>
    </div>
  );
}

function MechanismCard({
  icon,
  title,
  description,
  examples,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4">
        {icon}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-5 sm:p-6">
        <p className="mb-4 leading-relaxed text-gray-700">{description}</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((example) => (
            <span key={example} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-800">
              {example}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
