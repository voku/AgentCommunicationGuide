import { ShieldAlert, XCircle, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';

export function Chapter2_SpeakInConstraints() {
  return (
    <div id="chapter-2" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <ShieldAlert className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" /> 
        2. Speak in Constraints, Not Wishes
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        Do not speak in wishes. Speak in constraints that survive contact with execution.
      </p>

      <div className="space-y-10 mb-16">
        <ConstraintRule 
          number={1}
          title="Specify minimum guarantees"
          bad="add a unit test"
          better="add at least one unit test"
          betterStill="add at least one PHPUnit test that fails before the change and passes after"
          best="add at least one PHPUnit test for the edge case that triggered this bug, and write the test before the fix"
          why="Agents satisfy the minimum requirement. If you ask for 'a unit test,' you often get one decorative assertion written purely to appease the ritual gods of CI. 'At least one' raises the floor. 'Fails before and passes after' forces causal verification. Anchoring it to the triggering edge case makes the agent understand the bug instead of just rearranging furniture."
        />

        <ConstraintRule 
          number={2}
          title="Anchor to repository patterns"
          bad="refactor this code"
          better="refactor this code to follow the existing repository patterns"
          betterStill="refactor using the same patterns as AbstractValueObject and the existing immutable classes"
          best="refactor to match the existing value-object architecture exactly: final class, readonly properties, strict typing, no setters, PHPStan-clean"
          why="Agents are pattern matchers. The repository is usually the highest-fidelity specification you have. The closer the instruction points to real code, the less room the model has to invent its own architecture."
        />

        <ConstraintRule 
          number={3}
          title="Use tooling as the judge"
          bad="improve the code"
          better="make the code pass PHPStan max"
          betterStill="make the code pass PHPStan max without new ignores"
          best="make the change pass PHPStan max, keep strict types, and do not add baseline entries or weaken existing annotations"
          why="'Clean' and 'maintainable' are aesthetic claims. PHPStan max is a measurable condition. Agents optimize much better against a validator than against praise words humans use to feel wise in code reviews."
        />

        <ConstraintRule 
          number={4}
          title="State what must not change"
          bad="fix this bug"
          better="identify the root cause and produce a minimal patch"
          betterStill="identify the root cause and produce a minimal patch without changing the public API"
          best="identify the root cause, produce the smallest stable patch, keep the public API unchanged, preserve existing contracts, and do not weaken tests"
          why="Agents love broad rewrites because broad rewrites create many paths to something that looks plausible. Explicit invariants narrow the search space and reduce blast radius."
        />

        <ConstraintRule 
          number={5}
          title="Force schema-first debugging"
          bad="fix the SQL bug"
          better="inspect the query first"
          betterStill="review the schema and compare the working and failing query paths before proposing a fix"
          best="inspect the schema first, compare the working and failing joins, identify the root cause, then produce the minimal fix"
          why="Without schema awareness, the agent is just arranging SQL-shaped confetti. In database-heavy systems, structure comes before patching. Otherwise you get elegant nonsense."
        />

        <ConstraintRule 
          number={6}
          title="Force verification loops"
          bad="implement the feature"
          better="implement the feature and run the tests"
          betterStill="implement the feature, run the relevant tests, and explain any failure before changing tests"
          best="implement the feature, run the relevant test suite, paste the raw output, and do not modify assertions unless you can justify the behavior change explicitly"
          why="Agents stop early. They also lie by summary. Not maliciously, just statistically. Asking for raw output reduces fake closure and makes verification observable."
        />

        <ConstraintRule 
          number={7}
          title="Block hallucinations explicitly"
          bad="document this code"
          better="generate documentation from the code"
          betterStill="derive documentation from code structure and tests"
          best="derive documentation strictly from code, tests, and observable behavior; for anything not derivable, ask questions instead of guessing"
          why="This is one of the highest-leverage phrases you can use: ask instead of guess. It turns hallucination into gap detection."
        />

        <ConstraintRule 
          number={8}
          title="Design for stateless handoff"
          bad="continue where we left off"
          better="here is the current task state"
          betterStill="here is the current task state, last decision, and open issue"
          best="here is the current TODO state, last confirmed decision, open constraint not yet encoded, files touched, and what is still unknown"
          why="LLMs do not have reliable continuity. Treat that as a system constraint, not a tragedy. Good handoff blocks help both agents and humans. Which is rare. Usually your industry manages to disappoint both at once."
        />
      </div>

      <h3 className="text-2xl font-bold mt-16 mb-8 text-gray-900">Real Examples From Our Own Work</h3>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <ExampleCard 
          title="SQL / Legacy PHP Debugging"
          not="fix the broken query"
          but="inspect schema first, compare working and broken branches, identify root cause, then patch minimally"
          why="That prevents code-first flailing."
        />
        <ExampleCard 
          title="Documentation Meta-Skill"
          not="write docs"
          but="derive documentation from implementation, tests, and observable behavior, then ask the developer only for missing intent"
          why="That turns documentation from creative writing into synthesis."
        />
        <ExampleCard 
          title="PHP Code Quality"
          not="make it nicer"
          but="strict types, immutable design where appropriate, final by default, explicit PHPDoc contracts, PHPStan max, no silent failures"
          why="That is already a constraint system. The agent is just operating inside it."
        />
      </div>
    </div>
  );
}

function ConstraintRule({ number, title, bad, better, betterStill, best, why }: { number: number, title: string, bad: string, better: string, betterStill: string, best: string, why: string }) {
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
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider mt-1.5 flex items-center gap-1"><XCircle size={14}/> Bad</span>
          <div className="bg-red-50 text-red-900 px-4 py-2.5 rounded-lg font-mono text-sm border border-red-100">{bad}</div>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mt-1.5 flex items-center gap-1"><AlertTriangle size={14}/> Better</span>
          <div className="bg-amber-50 text-amber-900 px-4 py-2.5 rounded-lg font-mono text-sm border border-amber-100">{better}</div>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mt-1.5 flex items-center gap-1"><CheckCircle size={14}/> Better</span>
          <div className="bg-emerald-50 text-emerald-900 px-4 py-2.5 rounded-lg font-mono text-sm border border-emerald-100">{betterStill}</div>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1.5 flex items-center gap-1"><CheckCircle size={14}/> Best</span>
          <div className="bg-blue-50 text-blue-900 px-4 py-3 rounded-lg font-mono text-sm font-semibold border border-blue-200 shadow-sm">{best}</div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-5 py-4 border-t border-gray-200">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Why this works</span>
        <p className="text-sm text-gray-700 leading-relaxed">{why}</p>
      </div>
    </div>
  );
}

function ExampleCard({ title, not, but, why }: { title: string, not: string, but: string, why: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-lg text-gray-900 mb-5 flex items-center gap-2">
        <Wrench className="w-5 h-5 text-gray-400" /> {title}
      </h4>
      <div className="space-y-4 mb-5">
        <div>
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1.5">Not</span>
          <div className="text-gray-600 font-mono text-sm line-through opacity-70">{not}</div>
        </div>
        <div>
          <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-1.5">But</span>
          <div className="text-gray-900 font-mono text-sm font-medium bg-green-50 p-3 rounded-lg border border-green-100">{but}</div>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic border-l-2 border-gray-300 pl-3 leading-relaxed">{why}</p>
    </div>
  );
}
