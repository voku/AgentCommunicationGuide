import { CrossViewLink } from '../CrossViewLink';
import { CopyablePromptBlock } from '../CopyablePromptBlock';

export function Prompt1_NoLongerTheStar() {
  return (
    <div id="prompt-1" className="mb-16 scroll-mt-24 sm:mb-24">
      <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm sm:p-5 sm:text-base">
        <strong className="text-amber-950">Short version:</strong> the best prompts are not motivational speeches. They
        are small operational contracts.
      </div>

      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        1. The Core Mistake: Personality Instead of Boundaries
      </h2>

      <p className="mb-6 text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
        Reliable coding agents do not need inspiring paragraphs. They need instructions that survive execution.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">Old prompt engineering tried to simulate expertise:</p>

      <div className="mb-6">
        <CopyablePromptBlock
          text={`You are an expert senior software engineer.
Write clean, scalable, maintainable code.
Follow best practices and think step by step.`}
        />
      </div>

      <p className="mb-6 leading-relaxed text-gray-700">
        That sounds serious and constrains almost nothing. The model can still change APIs, skip verification, drift
        into unrelated files, and then confidently narrate the detour.
      </p>

      <div className="my-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-900">The actual shift</h3>
        <p className="mb-3 text-2xl font-semibold leading-tight text-blue-800 sm:text-3xl">
          Good prompts allocate attention, constrain behavior, demand proof, and control stopping conditions.
        </p>
        <p className="text-lg text-blue-700">
          Strong coding-agent prompts work best when they define the task clearly, give the right context, constrain
          behavior, and make done observable.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          'what the task is',
          'what must not change',
          'what evidence is required',
          'when the work is done',
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 leading-relaxed text-gray-700">
        That also lines up with the current agent loop: plan, edit, run tools, observe, repair, repeat. The prompt
        should frame the loop, not impersonate the engineer.
      </p>

      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 shadow-sm sm:p-5">
        <strong className="text-blue-950">→ See also:</strong> The repository-level foundation — tests, static
        analysis, CI, and AGENTS.md — is what keeps these prompts small.{' '}
        <CrossViewLink targetView="systems">Switch to the Systems view</CrossViewLink> to see how to build it.
      </div>
    </div>
  );
}
