import type { ReactNode } from 'react';
import { CheckCircle, FlaskConical, XCircle } from 'lucide-react';

export function Chapter4_DesignEnvironment() {
  return (
    <div id="chapter-4" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <FlaskConical className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        4. Same task, three very different outcomes
      </h2>

      <p className="mb-4 text-xl font-medium leading-relaxed text-gray-800">
        The difference is usually not the model. The difference is how much of the system you make explicit.
      </p>
      <p className="mb-10 leading-relaxed text-gray-700">
        Take a boring but realistic task: fix a concurrency bug in a PHP service without breaking the public API. Most
        teams do not fail here because the bug is impossible. They fail because the instructions are vague and the
        validation is weaker than the confidence of the generated patch.
      </p>

      <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
        <h3 className="mb-2 font-bold text-gray-900">The task</h3>
        <p className="rounded-lg border border-gray-200 bg-white p-4 font-mono text-sm text-gray-700">
          There is a bug in UserAccountService that causes incorrect balance calculations when multiple concurrent
          updates are processed. Fix it without breaking the public API.
        </p>
      </div>

      <div className="mb-12 space-y-8">
        <VersionBlock
          badge="A"
          label="Vague confidence"
          color="red"
          icon={<XCircle className="h-5 w-5" />}
          prompt="You are a senior PHP developer. Write a robust and elegant fix for this concurrency issue."
          note="This is mostly roleplay. It sounds serious and constrains almost nothing. The model can still change APIs, touch unrelated files, skip tests, and call it maintainable."
        />

        <VersionBlock
          badge="B"
          label="Slightly better, still weak"
          color="amber"
          icon={<XCircle className="h-5 w-5" />}
          prompt="Fix the concurrency bug in UserAccountService. Run the tests."
          note="At least there is a validation hint. But the scope is still fuzzy, no static analysis is required, and nothing says what must not change."
        />

        <VersionBlock
          badge="C"
          label="Constraint-driven"
          color="blue"
          icon={<CheckCircle className="h-5 w-5" />}
          prompt={`1. Identify the root cause before changing code.
2. Keep the public API of UserAccountService unchanged.
3. Add a PHPUnit test that fails before the fix and passes after.
4. Run PHPStan at max level. Do not add ignores.
5. Paste the raw test and static analysis output.`}
          note="Five lines. No marketing language. Just boundaries, tooling, and evidence. That is the version I trust in a real repository."
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-5 py-3 font-semibold text-gray-700">Metric</th>
              <th className="px-5 py-3 font-semibold text-red-600">Vague</th>
              <th className="px-5 py-3 font-semibold text-amber-600">Basic</th>
              <th className="px-5 py-3 font-semibold text-blue-600">Constraint-driven</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="px-5 py-3 font-medium">Scope creep</td>
              <td className="px-5 py-3 text-red-600">Common</td>
              <td className="px-5 py-3 text-amber-600">Possible</td>
              <td className="px-5 py-3 text-blue-600">Explicitly constrained</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-5 py-3 font-medium">Regression protection</td>
              <td className="px-5 py-3 text-red-600">Optional</td>
              <td className="px-5 py-3 text-amber-600">Maybe</td>
              <td className="px-5 py-3 text-blue-600">Required</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-5 py-3 font-medium">Static analysis</td>
              <td className="px-5 py-3 text-red-600">Ignored</td>
              <td className="px-5 py-3 text-amber-600">Easy to skip</td>
              <td className="px-5 py-3 text-blue-600">Part of done</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-5 py-3 font-medium">Evidence quality</td>
              <td className="px-5 py-3 text-red-600">Storytelling</td>
              <td className="px-5 py-3 text-amber-600">Partial</td>
              <td className="px-5 py-3 text-blue-600">Machine-checkable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white">
        <p className="text-gray-300">
          The version that sounds the least impressive usually produces the most reviewable patch. That is not a bug.
          That is the point.
        </p>
      </div>
    </div>
  );
}

function VersionBlock({
  badge,
  label,
  color,
  icon,
  prompt,
  note,
}: {
  badge: string;
  label: string;
  color: 'red' | 'amber' | 'blue';
  icon: ReactNode;
  prompt: string;
  note: string;
}) {
  const colorMap = {
    red: {
      header: 'border-red-200 bg-red-50 text-red-800',
      badge: 'bg-red-100 text-red-700',
      border: 'border-red-200',
      note: 'border-red-100 bg-red-50 text-red-700',
    },
    amber: {
      header: 'border-amber-200 bg-amber-50 text-amber-800',
      badge: 'bg-amber-100 text-amber-700',
      border: 'border-amber-200',
      note: 'border-amber-100 bg-amber-50 text-amber-700',
    },
    blue: {
      header: 'border-blue-200 bg-blue-50 text-blue-800',
      badge: 'bg-blue-100 text-blue-700',
      border: 'border-blue-200',
      note: 'border-blue-100 bg-blue-50 text-blue-700',
    },
  };
  const styles = colorMap[color];

  return (
    <div className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${styles.border}`}>
      <div className={`flex items-center gap-3 border-b px-5 py-4 font-bold ${styles.header} ${styles.border}`}>
        <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${styles.badge}`}>
          {badge}
        </span>
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
          {prompt}
        </pre>
        <p className={`rounded-lg border p-3 text-sm leading-relaxed ${styles.note}`}>{note}</p>
      </div>
    </div>
  );
}
