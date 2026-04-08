import { Wrench } from 'lucide-react';

export function Chapter5_SpecializeWork() {
  return (
    <div id="chapter-5" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <Wrench className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        5. Real Examples From Our Own Work
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        Here is what the patterns look like in production. Each example shows the instruction that did not work, the one that did, and what actually changed.
      </p>

      <div className="space-y-8">
        <ExampleCard
          title="AmysEcho — Contract Enforcement"
          context="AmysEcho is a modular audio processing application where plugins declare feature contracts. Early on, compatibility checks relied entirely on the model 'remembering' which contract versions were compatible."
          not="When adding a new plugin, remind the model about compatibility requirements and ask it to check version constraints."
          but="Reject any plugin bundle that declares a featureContract.version that does not match the expected version range in the registry. No exceptions, no warnings."
          changed="The model no longer had to 'remember compatibility.' The system enforced it. Compatibility errors dropped from a frequent source of review feedback to a build failure that never reached review."
          type="contract"
        />

        <ExampleCard
          title="SQL / Legacy PHP Debugging"
          context="A legacy PHP service had intermittent JOIN failures that only appeared under specific filter combinations. Initial attempts to fix it by describing the symptoms produced plausible but wrong patches."
          not="Fix the broken query that returns incorrect results when filtering by date range and status."
          but="Inspect the schema first. Compare the working and failing join paths. Identify the root cause. Then produce the minimal patch — do not change anything not directly implicated."
          changed="It prevented code-first guessing. The root cause turned out to be a missing index assumption that three previous 'fixes' had worked around rather than resolved. Schema-first found it in one pass."
          type="debugging"
        />

        <ExampleCard
          title="Documentation Synthesis"
          context="Documentation was being written from memory and intent, which diverged from the actual implementation over time. Code changed; docs did not. Reviews kept catching stale documentation."
          not="Write documentation for the PaymentProcessor service."
          but="Derive documentation strictly from the implementation, its tests, and observable behavior. For anything that cannot be derived — missing intent, business rationale, edge case decisions — ask me instead of guessing."
          changed="Documentation became synthesis rather than fiction. The questions the agent asked revealed undocumented decisions that had been invisible. Those gaps were more valuable than the documentation itself."
          type="docs"
        />

        <ExampleCard
          title="PHPStan-Driven Code Quality"
          context="Code quality feedback in review was subjective and inconsistent. Different reviewers had different standards. Refactoring suggestions varied by who reviewed."
          not="Clean this up and make it more maintainable."
          but="Refactor to pass PHPStan max. No new ignores, no weakened annotations, strict types throughout, final classes where no extension is intended."
          changed="Quality became machine-checkable rather than aesthetic. The reviewer's job shifted from 'is this clean?' to 'does PHPStan max pass?' That question has a binary answer. Review cycles shortened."
          type="quality"
        />
      </div>
    </div>
  );
}

function ExampleCard({
  title,
  context,
  not,
  but,
  changed,
  type,
}: {
  title: string;
  context: string;
  not: string;
  but: string;
  changed: string;
  type: string;
}) {
  const typeColors: Record<string, string> = {
    contract: 'bg-purple-100 text-purple-700',
    debugging: 'bg-amber-100 text-amber-700',
    docs: 'bg-green-100 text-green-700',
    quality: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gray-50 px-5 py-4 border-b border-gray-200 flex items-center gap-3">
        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${typeColors[type] ?? 'bg-gray-100 text-gray-600'}`}>
          {type}
        </span>
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        <p className="text-sm text-gray-500 italic leading-relaxed border-l-2 border-gray-200 pl-3">{context}</p>

        <div>
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-2">Not</span>
          <div className="text-gray-600 font-mono text-sm line-through opacity-60 bg-red-50 px-4 py-2.5 rounded-lg border border-red-100">
            {not}
          </div>
        </div>

        <div>
          <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-2">But</span>
          <div className="text-gray-900 font-mono text-sm font-medium bg-green-50 px-4 py-3 rounded-lg border border-green-100">
            {but}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1.5">What this changed</span>
          <p className="text-sm text-blue-900 leading-relaxed">{changed}</p>
        </div>
      </div>
    </div>
  );
}
