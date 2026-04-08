import { CheckCircle, Layers, Search, Database } from 'lucide-react';

export function Chapter2_SpeakInConstraints() {
  return (
    <div id="chapter-2" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <Layers className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        2. Why This Works
      </h2>

      <p className="mb-8 text-xl font-medium text-gray-800 leading-relaxed">
        Constraints beat prose because they do three things prompts do badly.
      </p>

      <div className="space-y-6 mb-12">
        <MechanismCard
          number={1}
          icon={<CheckCircle className="w-6 h-6 text-blue-600" />}
          title="They persist"
          description="Tests, schemas, CI checks, static analysis, contracts. A passing build stays green whether the model remembers writing it or not. The constraint outlives the conversation."
          examples={["PHPUnit test that must pass", "PHPStan max with no new ignores", "CI gate that blocks the merge"]}
        />
        <MechanismCard
          number={2}
          icon={<Search className="w-6 h-6 text-blue-600" />}
          title="They reduce ambiguity"
          description="Existing repository patterns narrow the search space before the agent generates a single line. Pointing to real code is more precise than any description of real code."
          examples={["Match AbstractValueObject exactly", "Follow the existing migration pattern", "Use the same test structure as UserServiceTest"]}
        />
        <MechanismCard
          number={3}
          icon={<Database className="w-6 h-6 text-blue-600" />}
          title="They externalize memory"
          description="Validators and artifacts remember what the model does not. The schema knows the column types. The test suite knows the expected behavior. The contract knows what version is compatible."
          examples={["Schema as ground truth for SQL fixes", "Feature contract version for compatibility", "CI output as objective definition of done"]}
        />
      </div>

      <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          LLMs do not reliably preserve long instructions across multi-step work. But they optimize surprisingly well against hard boundaries that remain visible throughout execution.
        </p>
        <p className="mt-4 text-blue-300 font-semibold text-lg">
          The model drifts. The constraint doesn't.
        </p>
      </div>
    </div>
  );
}

function MechanismCard({
  number,
  icon,
  title,
  description,
  examples,
}: {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gray-50 px-5 py-4 border-b border-gray-200 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
          {number}
        </div>
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="font-bold text-lg text-gray-900">{title}</h4>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex) => (
            <span key={ex} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-mono border border-blue-100">
              {ex}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
