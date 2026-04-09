import { ShieldAlert, XCircle, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

export function Chapter3_CompressIntent() {
  return (
    <div id="chapter-3" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <ShieldAlert className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        3. How to Speak to a Coding Agent
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        Do not repeat the operating manual in every prompt. Persist the rules where the agent can reload them: AGENTS.md for global rules, skills for reusable workflows, and TODOs or specs for task state.
      </p>

      <div className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">AGENTS.md</div>
          <p className="text-sm leading-relaxed text-gray-700">Small global rules that should apply on every task.</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">Skills</div>
          <p className="text-sm leading-relaxed text-blue-900">Detailed, reusable workflows for specific domains or toolchains.</p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-700">TODOs / Specs</div>
          <p className="text-sm leading-relaxed text-emerald-900">Current task state, acceptance criteria, open questions, and handoff notes.</p>
        </div>
      </div>

      <div className="space-y-10">
        <ConstraintRule
          number={1}
          title="Put universal rules in AGENTS.md"
          bad="follow existing patterns, keep the patch small, run tests"
          better="put the universal repository rules in AGENTS.md"
          betterStill="keep AGENTS.md to a short set of rules that should apply on every task"
          best="encode only the global repository invariants in AGENTS.md and stop repeating them in task prompts"
          failure="Every session starts with the same ritual paragraph, and eventually one copy drifts from the others."
          why="If a rule should apply on every request, it belongs in the global layer. Putting it in AGENTS.md makes it durable, cheaper, and much harder to forget."
        />

        <ConstraintRule
          number={2}
          title="Move reusable workflows into skills"
          bad="here is how to write tests, name files, structure mocks, and run coverage for this repo"
          better="use the repository skill for this workflow"
          betterStill="store framework-specific instructions in a dedicated skill instead of copying them into chat"
          best="keep reusable domain workflows in skills and invoke the right one only when the task actually needs it"
          failure="Your prompts turn into giant instruction dumps full of details that only matter for one kind of task."
          why="Skills give you targeted context. They keep the global layer small while still preserving high-detail instructions for the moments when they matter."
        />

        <ConstraintRule
          number={3}
          title="Persist task state in TODOs and specs"
          bad="continue where we left off"
          better="here is the current task state"
          betterStill="update TODO.md with progress, open issues, and the next decision to make"
          best="store requirements in the spec and live execution state in TODO.md so any new session can resume without reconstructing the chat"
          failure="A fresh session loses the real state, repeats work, or confidently resumes from the wrong assumption."
          why="Agents are not reliable long-term memory. If the task state matters tomorrow, it must live in a file, not in yesterday's prompt."
        />

        <ConstraintRule
          number={4}
          title="Put acceptance criteria in the spec, not the prompt"
          bad="make this better"
          better="write down the expected behavior first"
          betterStill="capture exact acceptance criteria, invariants, and non-goals in the task spec"
          best="treat the spec as the durable contract: expected behavior, forbidden regressions, edge cases, and what is explicitly out of scope"
          failure="The agent optimizes for vague adjectives like 'cleaner' or 'nicer' and ships something persuasive but wrong."
          why="Prompts evaporate. Specs survive handoffs, reviews, and retries. If success conditions matter, write them where the next agent can read them too."
        />

        <ConstraintRule
          number={5}
          title="Anchor to repository examples"
          bad="implement it like the rest of the codebase"
          better="follow the existing repository patterns"
          betterStill="match the structure used in these specific files"
          best="point to the concrete files, relevant skill, and active spec instead of re-describing the architecture in prose"
          failure="The agent invents a plausible new pattern because the instruction never grounded it in real code."
          why="The repository is still the highest-fidelity source of truth. Examples compress far more engineering knowledge than another paragraph of explanation."
        />

        <ConstraintRule
          number={6}
          title="Persist the verification checklist"
          bad="make sure it works"
          better="run the tests and lint"
          betterStill="record the required validators for this task in the spec or TODO"
          best="store the exact validation gates with the task: which tests, which linters, which builds, and which shortcuts are not allowed"
          failure="The agent claims success after running the wrong checks, skipping one, or summarizing green without evidence."
          why="Validators are better judges than prose. Putting the checklist in the task artifact makes the finish line visible to every future session."
        />

        <ConstraintRule
          number={7}
          title="Write down unknowns instead of guessing"
          bad="fill in the missing parts"
          better="ask questions if something is unclear"
          betterStill="track open questions and assumptions in the spec before implementation"
          best="when intent is not derivable from code, tests, or the spec, stop and add an explicit open question instead of inventing an answer"
          failure="The agent fills the missing requirement with something that sounds reasonable, and everyone notices only after the patch lands."
          why="'Ask instead of guess' becomes much stronger when the unknown is persisted. Open questions in a task file turn hallucination into visible backlog."
        />

        <ConstraintRule
          number={8}
          title="Make review state durable too"
          bad="here is the final implementation"
          better="review this draft critically"
          betterStill="record the assumptions you are questioning and the risks you still see"
          best="treat the implementation as a draft, and persist reviewed assumptions, rejected approaches, and remaining risks in the task artifacts for the next handoff"
          failure="The next session treats the latest code as settled truth and silently inherits bad decisions from the previous one."
          why="Review comments that live only in chat disappear. Review notes written back into TODOs or specs keep the critical thinking attached to the work."
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
