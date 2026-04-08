import { ShieldAlert, XCircle, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

export function Chapter3_CompressIntent() {
  return (
    <div id="chapter-3" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <ShieldAlert className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        3. How to Speak to a Coding Agent
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        Do not speak in wishes. Speak in constraints that survive contact with execution.
      </p>

      <div className="space-y-10">
        <ConstraintRule
          number={1}
          title="Specify minimum guarantees"
          bad="add a unit test"
          better="add at least one unit test"
          betterStill="add at least one PHPUnit test that fails before the change and passes after"
          best="add at least one PHPUnit test for the edge case that triggered this bug; write the test before the fix"
          failure="The agent adds one decorative assertion that passes without actually covering the bug."
          why="'At least one' raises the floor. 'Fails before and passes after' forces causal verification. Anchoring it to the triggering edge case makes the agent understand the bug instead of just rearranging furniture."
        />

        <ConstraintRule
          number={2}
          title="Anchor to repository patterns"
          bad="refactor this code"
          better="refactor this code to follow the existing repository patterns"
          betterStill="refactor using the same patterns as AbstractValueObject and the existing immutable classes"
          best="refactor to match the existing value-object architecture exactly: final class, readonly properties, strict typing, no setters, PHPStan-clean"
          failure="The agent invents a new architecture that looks plausible but doesn't match anything else in the codebase."
          why="Agents are pattern matchers. The repository is the highest-fidelity specification you have. The closer the instruction points to real code, the less room the model has to invent its own."
        />

        <ConstraintRule
          number={3}
          title="Use tooling as the judge"
          bad="improve the code"
          better="make the code pass PHPStan max"
          betterStill="make the code pass PHPStan max without new ignores"
          best="make the change pass PHPStan max, keep strict types, and do not add baseline entries or weaken existing annotations"
          failure="The agent declares the code 'clean and maintainable' while PHPStan max still reports 12 errors."
          why="'Clean' and 'maintainable' are aesthetic claims. PHPStan max is a measurable condition. Agents optimize against validators far better than against praise words."
        />

        <ConstraintRule
          number={4}
          title="State what must not change"
          bad="fix this bug"
          better="identify the root cause and produce a minimal patch"
          betterStill="identify the root cause and produce a minimal patch without changing the public API"
          best="identify the root cause, produce the smallest stable patch, keep the public API unchanged, preserve existing contracts, and do not weaken tests"
          failure="The agent rewrites half the service while 'fixing' a two-line bug."
          why="Agents love broad rewrites because broad rewrites create many paths to something plausible. Explicit invariants narrow the search space and limit blast radius."
        />

        <ConstraintRule
          number={5}
          title="Force schema-first debugging"
          bad="fix the SQL bug"
          better="inspect the query first"
          betterStill="review the schema and compare the working and failing query paths before proposing a fix"
          best="inspect the schema first, compare the working and failing joins, identify the root cause, then produce the minimal fix"
          failure="The agent patches SQL without reading the schema and introduces a subtler bug in a different join."
          why="Without schema awareness, the agent is arranging SQL-shaped confetti. Structure before patching. Otherwise you get elegant nonsense."
        />

        <ConstraintRule
          number={6}
          title="Force verification loops"
          bad="implement the feature"
          better="implement the feature and run the tests"
          betterStill="implement the feature, run the relevant tests, and explain any failure before changing tests"
          best="implement the feature, run the relevant test suite, paste the raw output, and do not modify assertions unless you can justify the behavior change explicitly"
          failure="The agent reports 'all tests passing' with a fabricated summary instead of actual output."
          why="Agents stop early and lie by summary — not maliciously, just statistically. Asking for raw output reduces fake closure and makes verification observable."
        />

        <ConstraintRule
          number={7}
          title="Block hallucinations explicitly"
          bad="document this code"
          better="generate documentation from the code"
          betterStill="derive documentation from code structure and tests"
          best="derive documentation strictly from code, tests, and observable behavior; for anything not derivable, ask questions instead of guessing"
          failure="The agent writes plausible-sounding documentation that contradicts the actual implementation."
          why="'Ask instead of guess' is one of the highest-leverage phrases in this article. It turns hallucination into gap detection."
        />

        <ConstraintRule
          number={8}
          title="Prevent anchoring bias"
          bad="here is the current implementation, improve it"
          better="here is the current implementation; identify problems first before proposing changes"
          betterStill="treat the current implementation as a first draft, not a reference; question its assumptions before building on it"
          best="treat all existing code shown as a first draft requiring review; do not optimize around its current structure if a better approach exists; state any assumptions you are questioning"
          failure="The agent inherits flawed design decisions from the existing code because it treats whatever is shown first as ground truth."
          why="When you hand an agent production code as context, it anchors to that structure. Framing it explicitly as a 'first draft' signals that the agent should evaluate rather than extend. This is especially important when debugging or refactoring legacy systems where the current approach may be the root cause."
        />
      </div>
    </div>
  );
}

function ConstraintRule({
  number,
  title,
  bad,
  better,
  betterStill,
  best,
  failure,
  why,
}: {
  number: number;
  title: string;
  bad: string;
  better: string;
  betterStill: string;
  best: string;
  failure: string;
  why: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gray-50 px-5 py-4 border-b border-gray-200 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
          {number}
        </div>
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider mt-1.5 flex items-center gap-1">
            <XCircle size={14} /> Bad
          </span>
          <div className="bg-red-50 text-red-900 px-4 py-2.5 rounded-lg font-mono text-sm border border-red-100">{bad}</div>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mt-1.5 flex items-center gap-1">
            <AlertTriangle size={14} /> Better
          </span>
          <div className="bg-amber-50 text-amber-900 px-4 py-2.5 rounded-lg font-mono text-sm border border-amber-100">{better}</div>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mt-1.5 flex items-center gap-1">
            <CheckCircle size={14} /> Better still
          </span>
          <div className="bg-emerald-50 text-emerald-900 px-4 py-2.5 rounded-lg font-mono text-sm border border-emerald-100">{betterStill}</div>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1.5 flex items-center gap-1">
            <CheckCircle size={14} /> Best
          </span>
          <div className="bg-blue-50 text-blue-900 px-4 py-3 rounded-lg font-mono text-sm font-semibold border border-blue-200 shadow-sm">{best}</div>
        </div>
      </div>

      <div className="bg-red-50 px-5 py-4 border-t border-red-100">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
          <AlertCircle size={12} /> Typical failure without this
        </span>
        <p className="text-sm text-red-800 leading-relaxed italic">{failure}</p>
      </div>

      <div className="bg-gray-50 px-5 py-4 border-t border-gray-200">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Why this changes behavior</span>
        <p className="text-sm text-gray-700 leading-relaxed">{why}</p>
      </div>
    </div>
  );
}
