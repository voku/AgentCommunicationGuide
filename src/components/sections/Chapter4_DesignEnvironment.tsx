import { FlaskConical, XCircle, AlertTriangle, CheckCircle } from 'lucide-react';

export function Chapter4_DesignEnvironment() {
  return (
    <div id="chapter-4" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <FlaskConical className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        4. One Task, Three Instructions
      </h2>

      <p className="mb-4 text-xl font-medium text-gray-800 leading-relaxed">
        The same task. Three different instruction styles. Measurably different outcomes.
      </p>
      <p className="mb-10 text-gray-600 leading-relaxed">
        The article has made claims. Here is the evidence. We use one grounded example — fix a bug in a PHP service without changing its public API — and run it through three instruction approaches.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 mb-10">
        <h3 className="font-bold text-gray-900 mb-2">The task</h3>
        <p className="text-gray-700 font-mono text-sm bg-white border border-gray-200 rounded-lg p-4">
          There is a bug in the UserAccountService that causes incorrect balance calculations when multiple concurrent updates are processed. Fix it without breaking the public API.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <VersionBlock
          version="A"
          label="Roleplay prompt"
          color="red"
          icon={<XCircle className="w-5 h-5" />}
          prompt={`You are a senior PHP developer with 15 years of experience. Write a robust, maintainable, and production-ready fix for this concurrency issue. Make sure the solution is elegant and follows best practices.`}
          note="Persona framing feels authoritative but gives the model zero measurable constraints. 'Robust,' 'elegant,' and 'best practices' are unmeasurable. The model optimizes for looking senior, not for being correct."
        />

        <VersionBlock
          version="B"
          label="Basic execution prompt"
          color="amber"
          icon={<AlertTriangle className="w-5 h-5" />}
          prompt={`Fix the concurrency bug in UserAccountService. Run the tests.`}
          note="Better — it includes a verification step. But it doesn't constrain the scope, define what must not change, or specify what 'done' looks like."
        />

        <VersionBlock
          version="C"
          label="Constraint-driven prompt"
          color="blue"
          icon={<CheckCircle className="w-5 h-5" />}
          prompt={`1. Identify the root cause of the concurrency issue. Do not start writing code yet.
2. Keep the public API of UserAccountService unchanged. No new parameters, no changed signatures.
3. Add at least one PHPUnit test that fails before your fix and passes after, covering the exact race condition.
4. Run PHPStan max. Do not add new ignores or weaken existing annotations.
5. Paste the raw test output. Do not summarize — show the actual output.`}
          note="Five lines. Each line is a machine-checkable constraint. The model cannot fake its way through this."
        />
      </div>

      <h3 className="text-xl font-bold mb-6 text-gray-900">The delta</h3>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-5 font-semibold text-gray-700">Metric</th>
              <th className="py-3 px-5 font-semibold text-red-600">A — Roleplay</th>
              <th className="py-3 px-5 font-semibold text-amber-600">B — Basic</th>
              <th className="py-3 px-5 font-semibold text-blue-600">C — Constraints</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-5 font-medium">Unrelated files touched</td>
              <td className="py-3 px-5 text-red-600">Often several</td>
              <td className="py-3 px-5 text-amber-600">Sometimes</td>
              <td className="py-3 px-5 text-blue-600">Rarely</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-5 font-medium">Tests added or weakened</td>
              <td className="py-3 px-5 text-red-600">Inconsistent</td>
              <td className="py-3 px-5 text-amber-600">Maybe one</td>
              <td className="py-3 px-5 text-blue-600">Required by constraint</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-5 font-medium">API stability</td>
              <td className="py-3 px-5 text-red-600">Not guaranteed</td>
              <td className="py-3 px-5 text-amber-600">Not guaranteed</td>
              <td className="py-3 px-5 text-blue-600">Enforced explicitly</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-5 font-medium">PHPStan outcome</td>
              <td className="py-3 px-5 text-red-600">Not checked</td>
              <td className="py-3 px-5 text-amber-600">Not specified</td>
              <td className="py-3 px-5 text-blue-600">Required, no new ignores</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-5 font-medium">Review effort</td>
              <td className="py-3 px-5 text-red-600">High — scope creep</td>
              <td className="py-3 px-5 text-amber-600">Medium</td>
              <td className="py-3 px-5 text-blue-600">Low — bounded by design</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-5 font-medium">Verification possible?</td>
              <td className="py-3 px-5 text-red-600">Subjective only</td>
              <td className="py-3 px-5 text-amber-600">Partial</td>
              <td className="py-3 px-5 text-blue-600">Machine-checkable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-gray-900 text-white p-6 rounded-2xl">
        <p className="text-gray-300">
          Version A sounds most confident. Version C produces the most reviewable output. The difference is not model quality — it is instruction design.
        </p>
      </div>
    </div>
  );
}

function VersionBlock({
  version,
  label,
  color,
  icon,
  prompt,
  note,
}: {
  version: string;
  label: string;
  color: 'red' | 'amber' | 'blue';
  icon: React.ReactNode;
  prompt: string;
  note: string;
}) {
  const colorMap = {
    red: {
      header: 'bg-red-50 border-red-200 text-red-800',
      badge: 'bg-red-100 text-red-700',
      border: 'border-red-200',
      note: 'bg-red-50 border-red-100 text-red-700',
    },
    amber: {
      header: 'bg-amber-50 border-amber-200 text-amber-800',
      badge: 'bg-amber-100 text-amber-700',
      border: 'border-amber-200',
      note: 'bg-amber-50 border-amber-100 text-amber-700',
    },
    blue: {
      header: 'bg-blue-50 border-blue-200 text-blue-800',
      badge: 'bg-blue-100 text-blue-700',
      border: 'border-blue-200',
      note: 'bg-blue-50 border-blue-100 text-blue-700',
    },
  };
  const c = colorMap[color];

  return (
    <div className={`bg-white border rounded-2xl overflow-hidden shadow-sm ${c.border}`}>
      <div className={`px-5 py-4 border-b flex items-center gap-3 ${c.header} ${c.border}`}>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${c.badge}`}>
          {version}
        </span>
        <div className="flex items-center gap-2 font-bold">
          {icon}
          <span>{label}</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap leading-relaxed mb-4 overflow-x-auto">
          {prompt}
        </pre>
        <p className={`text-sm rounded-lg p-3 border leading-relaxed ${c.note}`}>{note}</p>
      </div>
    </div>
  );
}
