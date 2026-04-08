import { Settings, CheckCircle, XCircle } from 'lucide-react';

export function Chapter6_ReduceFriction() {
  return (
    <div id="chapter-6" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <Settings className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        6. Advanced Patterns and Operational Notes
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        The core patterns apply everywhere. These are the operational details that make them work in practice.
      </p>

      <div className="space-y-10 mb-16">

        <AdvancedSection title="Deterministic mode vs exploration mode">
          <p className="text-gray-700 leading-relaxed mb-4">
            Not all tasks benefit from tight constraints. When the architecture is unknown — greenfield work, spike solutions, initial scaffolding — give the model room. Use constraints when the territory is defined; use open prompts when you are still discovering the territory.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
              <div className="font-bold text-purple-800 text-sm mb-2 uppercase tracking-wider">Exploration</div>
              <p className="text-sm text-purple-700">Architecture unknown. Open-ended. Use a strong reasoning model. Expect multiple proposals and discard most of them.</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
              <div className="font-bold text-emerald-800 text-sm mb-2 uppercase tracking-wider">Deterministic</div>
              <p className="text-sm text-emerald-700">Architecture set. Constraints defined. Use a model that follows rules without being creative. Expect one correct output.</p>
            </div>
          </div>
        </AdvancedSection>

        <AdvancedSection title="Keep AGENTS.md small, push detail into skills">
          <p className="text-gray-700 leading-relaxed mb-4">
            AGENTS.md is included in every request. Overloading it means every token is spent on rules that are irrelevant to the current task. Keep it to three or four universal repository rules.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="font-bold text-gray-700 text-sm mb-2">Good AGENTS.md contents</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prefer existing project patterns</li>
                <li>• Verify changes with tests</li>
                <li>• Keep changes small</li>
                <li>• Treat specs and tests as source of truth</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="font-bold text-blue-800 text-sm mb-2">Belongs in a skill file</div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• How to write a PHPUnit test here</li>
                <li>• Migration naming conventions</li>
                <li>• UI component structure rules</li>
                <li>• Mocking patterns for this codebase</li>
              </ul>
            </div>
          </div>
        </AdvancedSection>

        <AdvancedSection title="Context rots — restart earlier than you think">
          <p className="text-gray-700 leading-relaxed mb-4">
            As a session grows, the agent's attention diffuses. Earlier constraints get forgotten, connections get invented, errors start looping. The 50% rule: around the midpoint of the effective context window, restarting becomes cheaper than correcting.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
            <p className="text-amber-900 font-medium">When the agent starts repeating mistakes or contradicting earlier decisions: do not argue. Summarize the current state. Open a new session. Hand off the summary.</p>
          </div>
        </AdvancedSection>

        <AdvancedSection title="Different models behave like different coworkers">
          <p className="text-gray-700 leading-relaxed mb-4">
            In practice, different model families tend to be stronger at different tasks. Treat this as an operational heuristic, not a law — model capabilities shift with every release.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">Task type</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Observed tendency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr><td className="py-2.5 px-4 font-medium">Architecture & reasoning</td><td className="py-2.5 px-4">Models with strong chain-of-thought (o-series, Claude)</td></tr>
                <tr><td className="py-2.5 px-4 font-medium">Large codebase refactoring</td><td className="py-2.5 px-4">Models with large context windows (Gemini 2.5 Pro)</td></tr>
                <tr><td className="py-2.5 px-4 font-medium">Strict rule-following</td><td className="py-2.5 px-4">Smaller, faster, instruction-tuned models</td></tr>
                <tr><td className="py-2.5 px-4 font-medium">Code review & nuance</td><td className="py-2.5 px-4">Models trained for alignment and critique (Claude)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 italic">Use a reasoning model to write the specification and tests; hand that to a faster model to write the implementation.</p>
        </AdvancedSection>

        <AdvancedSection title="Prefer local system calls when possible">
          <p className="text-gray-700 leading-relaxed">
            Native tools — grep, ripgrep, direct file reads, local test runners — are faster, more reliable, and less prone to protocol overhead than MCP server integrations. Reserve MCP for capabilities that genuinely live there: browser automation, DOM inspection, external API calls.
          </p>
        </AdvancedSection>

        <AdvancedSection title="Voice input reduces ideation friction">
          <p className="text-gray-700 leading-relaxed mb-4">
            Speaking is faster than typing when the goal is thinking out loud. Speech-to-text tools (Wispr Flow and similar) let you dump raw intent. The agent then turns that transcript into structured tasks. Native language for ideation, English for repository artifacts.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-sm text-gray-700">
            Brainstorm in your native language → agent structures → commit in English
          </div>
        </AdvancedSection>

        <AdvancedSection title="Agents add more easily than they delete">
          <p className="text-gray-700 leading-relaxed mb-4">
            LLMs are generative by nature. They will abstract, wrap, and extend before they remove. If you are not actively deleting code the agent wrote, your codebase is accumulating generative bloat.
          </p>
          <p className="text-gray-700 font-medium">
            Sometimes the best instruction is just "delete it." That decision usually requires a human.
          </p>
        </AdvancedSection>

        <AdvancedSection title="UI agents need explicit style guides">
          <p className="text-gray-700 leading-relaxed mb-4">
            Without a UI style guide, agents mix patterns from whatever UI libraries dominated their training data. Two pages generated by the same agent in the same session can look like they came from different projects.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Provide a short style guide in a skill file: layout structure, component usage rules, spacing scale, button hierarchy, form patterns. The agent implements the system. It does not design it.
          </p>
        </AdvancedSection>

      </div>

      {/* Best Practices Summary */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Best practices summary</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 border border-green-100 rounded-2xl p-5 sm:p-6">
            <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Do
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span><strong>Point to examples</strong> in the repository instead of describing rules.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span><strong>Use validators as judges</strong> — PHPStan, tests, CI. Not your opinion.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span><strong>State invariants explicitly</strong> — what must not change is as important as what must.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span><strong>Demand raw output</strong> — never accept summaries of test results.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span><strong>Restart sessions early</strong> when drift appears.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span><strong>Delete code manually</strong> when the agent won't.</span></li>
            </ul>
          </div>
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-5 sm:p-6">
            <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Don't
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold mt-0.5">•</span><span><strong>Use persona prompts</strong> as a substitute for constraints.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold mt-0.5">•</span><span><strong>Overload AGENTS.md</strong> — keep it to universal rules only.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold mt-0.5">•</span><span><strong>Accept test summaries</strong> without seeing the actual output.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold mt-0.5">•</span><span><strong>Let agents modify tests</strong> to make them pass.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold mt-0.5">•</span><span><strong>Show existing code as ground truth</strong> — frame it as a first draft.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold mt-0.5">•</span><span><strong>Use one model for everything</strong> — route to the right tool.</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Conclusion</h3>
        <p className="text-gray-700 leading-relaxed mb-5">
          Prompt engineering mattered for a while. It got us through the first wave. But the real leverage now is not better prompt poetry.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          It is repository structure, examples, validators, contracts, and workflows that make the wrong move hard. Once those exist, the prompt becomes small.
        </p>
        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl text-center">
          <p className="text-gray-300 text-lg mb-4">The prompt is no longer the program.</p>
          <p className="text-blue-300 font-semibold text-2xl mb-2">It is the trigger.</p>
          <p className="text-gray-400">The system does the rest.</p>
        </div>
      </div>
    </div>
  );
}

function AdvancedSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h3>
      {children}
    </section>
  );
}
