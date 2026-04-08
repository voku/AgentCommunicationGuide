import { CheckCircle, XCircle } from 'lucide-react';

export function BestPracticesSection() {
  return (
    <section id="best-practices" className="mb-12 sm:mb-16 scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Best Practices Summary</h2>
      <p className="mb-6">
        A quick reference guide for interacting with coding agents effectively, condensing the key actionable advice into a scannable list of do's and don'ts.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Do's */}
        <div className="bg-green-50/50 border border-green-100 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Do
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">•</span>
              <span><strong>Use examples</strong> instead of long, abstract instructions. Show, don't just tell.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">•</span>
              <span><strong>Define outcomes</strong> and let the agent figure out the steps to achieve them.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">•</span>
              <span><strong>Provide context anchors</strong> (like `SKILL.md` or `ARCHITECTURE.md`) to ground the agent.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">•</span>
              <span><strong>Give roadmaps</strong> for complex features so the agent knows the big picture.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">•</span>
              <span><strong>Match the model to the task</strong> (e.g., Gemini for large context, Claude for review).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">•</span>
              <span><strong>Delete obsolete code</strong> manually when necessary, as agents prefer adding.</span>
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Don't
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-0.5">•</span>
              <span><strong>Micromanage</strong> the agent with step-by-step pseudo-code.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-0.5">•</span>
              <span><strong>Overload AGENTS.md</strong> with every possible rule; keep it focused.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-0.5">•</span>
              <span><strong>Rely solely on prompt engineering</strong> for complex, multi-step workflows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-0.5">•</span>
              <span><strong>Assume the agent knows your architecture</strong> without explicit anchors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-0.5">•</span>
              <span><strong>Use one model for everything</strong>; leverage their specific strengths.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-0.5">•</span>
              <span><strong>Expect the agent to delete code</strong> proactively; they tend to add complexity.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
