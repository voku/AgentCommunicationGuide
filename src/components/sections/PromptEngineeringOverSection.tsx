import { TerminalSquare, ShieldAlert, CheckCircle, XCircle, ArrowRight, Database, FileCode2, Wrench, Lock, Search, Repeat, Brain, History, AlertTriangle, Anchor, Trash2 } from 'lucide-react';
import { Tooltip } from '../Tooltip';

export function PromptEngineeringOverSection() {
  return (
    <div id="prompt-engineering-over" className="scroll-mt-24">
      <section className="mb-12 sm:mb-16">
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
          <Tooltip content="The Shift"><TerminalSquare className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" /></Tooltip> Prompt Engineering Is Mostly Over
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 font-light mb-6">
          Prompts were the interface in 2024, workflows and agents took over in 2025, and now we are in 2026. Already, the prompt is mostly just the ignition point for an execution system built from tools, validators, contracts, repository patterns, and context.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-xl my-8">
          <h3 className="font-semibold text-blue-900 mb-2">The Actual Rule</h3>
          <p className="text-blue-800 font-medium text-lg mb-2">The system is the prompt.</p>
          <p className="text-blue-800">Long prose is fragile. Constraints survive execution.</p>
        </div>

        <h3 className="text-xl font-semibold mt-12 mb-6 border-b border-gray-200 pb-2">The Four Tenets of Execution Design</h3>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><FileCode2 className="w-5 h-5 text-blue-600"/> Examples Beat Prompts</h4>
            <p className="text-gray-600 text-sm leading-relaxed">A single reference file is worth a thousand words of instruction. Don't describe the architecture—point to a file that already implements it perfectly. Agents are pattern matchers, not mind readers.</p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Anchor className="w-5 h-5 text-indigo-600"/> Context Anchors Compress Knowledge</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Instead of explaining rules, use anchors. Saying "Make this match the AbstractValueObject pattern" instantly loads strict typing, immutability, and validation rules without writing a paragraph.</p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600"/> Native Language Ideation</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Brainstorming via speech-to-text in your native language reduces cognitive friction. Let the agent translate your raw thoughts into structured English execution steps for the repository.</p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Trash2 className="w-5 h-5 text-rose-600"/> Beware the Deletion Bias</h4>
            <p className="text-gray-600 text-sm leading-relaxed">LLMs prefer adding code over deleting it. They will build a new house before tearing down a broken wall. You must explicitly command them to delete, or humans must decide what disappears.</p>
          </div>
        </div>

        <p className="mb-6">
          LLMs do not reliably carry rich instructions through a multi-step task. They drift, compress, forget, improvise, and then confidently explain the mess as if this was somehow your idea. What they do much better is optimize toward things that remain externally visible and machine-checkable:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { icon: Search, label: 'Static analysis' },
            { icon: CheckCircle, label: 'Tests' },
            { icon: Database, label: 'Schemas' },
            { icon: FileCode2, label: 'Repository patterns' },
            { icon: Repeat, label: 'CI checks' },
            { icon: Lock, label: 'Feature contracts' },
            { icon: History, label: 'Migration history' },
            { icon: ShieldAlert, label: 'Explicit invariants' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
              <item.icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <p className="mb-8 p-4 bg-gray-900 text-white rounded-xl font-medium text-center shadow-md">
          So the job is no longer to "describe the ideal developer."<br/>
          <span className="text-blue-300">The job is to build a system that makes the wrong move hard.</span>
        </p>

        <h3 className="text-xl font-semibold mt-12 mb-6 border-b border-gray-200 pb-2">How to Speak to a Coding Agent</h3>
        <p className="mb-8 font-medium text-gray-700">
          Do not speak in wishes. Speak in constraints that survive contact with execution.
        </p>

        <div className="space-y-10">
          {/* Rule 1 */}
          <ConstraintRule 
            number={1}
            title="Specify minimum guarantees"
            bad="add a unit test"
            better="add at least one unit test"
            betterStill="add at least one PHPUnit test that fails before the change and passes after"
            best="add at least one PHPUnit test for the edge case that triggered this bug, and write the test before the fix"
            why="Agents satisfy the minimum requirement. If you ask for 'a unit test,' you often get one decorative assertion written purely to appease the ritual gods of CI. 'At least one' raises the floor. 'Fails before and passes after' forces causal verification. Anchoring it to the triggering edge case makes the agent understand the bug instead of just rearranging furniture."
          />

          {/* Rule 2 */}
          <ConstraintRule 
            number={2}
            title="Anchor to repository patterns"
            bad="refactor this code"
            better="refactor this code to follow the existing repository patterns"
            betterStill="refactor using the same patterns as AbstractValueObject and the existing immutable classes"
            best="refactor to match the existing value-object architecture exactly: final class, readonly properties, strict typing, no setters, PHPStan-clean"
            why="Agents are pattern matchers. The repository is usually the highest-fidelity specification you have. The closer the instruction points to real code, the less room the model has to invent its own architecture."
          />

          {/* Rule 3 */}
          <ConstraintRule 
            number={3}
            title="Use tooling as the judge"
            bad="improve the code"
            better="make the code pass PHPStan max"
            betterStill="make the code pass PHPStan max without new ignores"
            best="make the change pass PHPStan max, keep strict types, and do not add baseline entries or weaken existing annotations"
            why="'Clean' and 'maintainable' are aesthetic claims. PHPStan max is a measurable condition. Agents optimize much better against a validator than against praise words humans use to feel wise in code reviews."
          />

          {/* Rule 4 */}
          <ConstraintRule 
            number={4}
            title="State what must not change"
            bad="fix this bug"
            better="identify the root cause and produce a minimal patch"
            betterStill="identify the root cause and produce a minimal patch without changing the public API"
            best="identify the root cause, produce the smallest stable patch, keep the public API unchanged, preserve existing contracts, and do not weaken tests"
            why="Agents love broad rewrites because broad rewrites create many paths to something that looks plausible. Explicit invariants narrow the search space and reduce blast radius."
          />

          {/* Rule 5 */}
          <ConstraintRule 
            number={5}
            title="Force schema-first debugging"
            bad="fix the SQL bug"
            better="inspect the query first"
            betterStill="review the schema and compare the working and failing query paths before proposing a fix"
            best="inspect the schema first, compare the working and failing joins, identify the root cause, then produce the minimal fix"
            why="Without schema awareness, the agent is just arranging SQL-shaped confetti. In database-heavy systems, structure comes before patching. Otherwise you get elegant nonsense."
          />

          {/* Rule 6 */}
          <ConstraintRule 
            number={6}
            title="Force verification loops"
            bad="implement the feature"
            better="implement the feature and run the tests"
            betterStill="implement the feature, run the relevant tests, and explain any failure before changing tests"
            best="implement the feature, run the relevant test suite, paste the raw output, and do not modify assertions unless you can justify the behavior change explicitly"
            why="Agents stop early. They also lie by summary. Not maliciously, just statistically. Asking for raw output reduces fake closure and makes verification observable."
          />

          {/* Rule 7 */}
          <ConstraintRule 
            number={7}
            title="Block hallucinations explicitly"
            bad="document this code"
            better="generate documentation from the code"
            betterStill="derive documentation from code structure and tests"
            best="derive documentation strictly from code, tests, and observable behavior; for anything not derivable, ask questions instead of guessing"
            why="This is one of the highest-leverage phrases you can use: ask instead of guess. It turns hallucination into gap detection."
          />

          {/* Rule 8 */}
          <ConstraintRule 
            number={8}
            title="Design for stateless handoff"
            bad="continue where we left off"
            better="here is the current task state"
            betterStill="here is the current task state, last decision, and open issue"
            best="here is the current TODO state, last confirmed decision, open constraint not yet encoded, files touched, and what is still unknown"
            why="LLMs do not have reliable continuity. Treat that as a system constraint, not a tragedy. Good handoff blocks help both agents and humans. Which is rare. Usually your industry manages to disappoint both at once."
          />

          {/* Rule 9 */}
          <ConstraintRule 
            number={9}
            title="Prevent anchoring bias"
            bad="Here is the final implementation. Review it."
            better="Here is the implementation. Find bugs."
            betterStill="Here is the code. What is wrong with it?"
            best="Here is a first draft implementation. Review it critically, prove why it might fail under load, and improve it."
            why="LLMs anchor heavily on provided code. If you tell them it's final, they passively accept it. Calling even production-ready code a 'first draft' forces the next model to reason, verify, and optimize instead of rubber-stamping."
          />

          {/* Rule 10 */}
          <ConstraintRule 
            number={10}
            title="Force self-correction"
            bad="Is this correct?"
            better="Check for errors."
            betterStill="Are you sure this will work?"
            best="Prove yourself wrong. Find three reasons why this approach will fail in production."
            why="This is one of the most effective anti-hallucination patterns. It shifts the model from a sycophantic 'yes-man' mode into an adversarial debugging mode."
          />
        </div>

        <h3 className="text-xl font-semibold mt-16 mb-6 border-b border-gray-200 pb-2">Real Examples From Our Own Work</h3>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <ExampleCard 
            title="Refactoring Legacy Code"
            not="refactor the payment gateway"
            but="extract the payment validation logic into a pure function, keep the public API unchanged, and ensure all existing tests pass"
            why="The behavior is enforced structurally, not entrusted to prompt memory."
          />
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

        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 mb-12">
          <h3 className="text-xl font-semibold mb-4">Why This Works</h3>
          <p className="mb-4 text-gray-700">Because constraints do three things that prose does badly:</p>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
              <div>
                <strong className="block text-gray-900">They persist</strong>
                <span className="text-gray-600 text-sm">A test suite, schema, contract version, and static analysis rule remain present across steps. Prompt prose fades.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
              <div>
                <strong className="block text-gray-900">They reduce ambiguity</strong>
                <span className="text-gray-600 text-sm">A repository with strong patterns gives the model fewer valid move sets. Less ambiguity means less random "creativity."</span>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
              <div>
                <strong className="block text-gray-900">They externalize memory</strong>
                <span className="text-gray-600 text-sm">Validators and code history act as memory the model does not have to carry internally.</span>
              </div>
            </li>
          </ul>
          <p className="text-gray-700 font-medium">
            That is the hidden mechanism. The better your engineering discipline, the better your agent output. Not because the agent is smarter, but because the space of acceptable answers is smaller.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-lg text-gray-600 mb-6">
            The most effective instructions are usually short, brutal, and verifiable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-8">
            <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex-1 text-left">
              <div className="text-red-500 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1"><XCircle size={14}/> Not</div>
              <p className="text-gray-700 font-mono text-sm">"You are a senior developer with 10 years of experience..."</p>
            </div>
            <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex-1 text-left">
              <div className="text-green-600 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1"><CheckCircle size={14}/> But</div>
              <p className="text-gray-800 font-mono text-sm mb-3">"make the tests pass without weakening assertions"</p>
              <div className="text-gray-400 text-xs font-bold uppercase mb-1">Or</div>
              <p className="text-gray-800 font-mono text-sm">"fix the root cause, keep the public API unchanged, no new PHPStan ignores"</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-8">
            That is the real evolution. We did not discover magic prompt words. We rediscovered engineering constraints, and now the model has to obey them too.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-1 rounded-2xl shadow-xl transform transition-transform hover:scale-[1.02]">
            <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-white">
              <div className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">Best One-Line Takeaway</div>
              <p className="text-xl sm:text-2xl font-medium leading-tight">
                You are not managing the agent's personality anymore; you are designing the boundary conditions it cannot safely cross.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

function ConstraintRule({ number, title, bad, better, betterStill, best, why }: { number: number, title: string, bad: string, better: string, betterStill: string, best: string, why: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
          {number}
        </div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      
      <div className="p-4 sm:p-5 space-y-3">
        <div className="grid grid-cols-[80px_1fr] gap-3 items-start">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider mt-1 flex items-center gap-1"><XCircle size={12}/> Bad</span>
          <div className="bg-red-50 text-red-900 px-3 py-2 rounded font-mono text-sm border border-red-100">{bad}</div>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-3 items-start">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mt-1 flex items-center gap-1"><AlertTriangle size={12}/> Better</span>
          <div className="bg-amber-50 text-amber-900 px-3 py-2 rounded font-mono text-sm border border-amber-100">{better}</div>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-3 items-start">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mt-1 flex items-center gap-1"><CheckCircle size={12}/> Better</span>
          <div className="bg-emerald-50 text-emerald-900 px-3 py-2 rounded font-mono text-sm border border-emerald-100">{betterStill}</div>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-3 items-start">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1 flex items-center gap-1"><CheckCircle size={12}/> Best</span>
          <div className="bg-blue-50 text-blue-900 px-3 py-2 rounded font-mono text-sm font-semibold border border-blue-200 shadow-sm">{best}</div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Why this works</span>
        <p className="text-sm text-gray-700">{why}</p>
      </div>
    </div>
  );
}

function ExampleCard({ title, not, but, why }: { title: string, not: string, but: string, why: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Wrench className="w-4 h-4 text-gray-400" /> {title}
      </h4>
      <div className="space-y-3 mb-4">
        <div>
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">Not</span>
          <div className="text-gray-600 font-mono text-sm line-through opacity-70">{not}</div>
        </div>
        <div>
          <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-1">But</span>
          <div className="text-gray-900 font-mono text-sm font-medium bg-green-50 p-2 rounded border border-green-100">{but}</div>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic border-l-2 border-gray-300 pl-3">{why}</p>
    </div>
  );
}
