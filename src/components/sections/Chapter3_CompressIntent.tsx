import { FileCheck, FileStack, Files, NotebookPen, Scale, Terminal } from 'lucide-react';

const RULES = [
  {
    icon: FileStack,
    title: 'AGENTS.md',
    summary: 'Put the universal repository rules here.',
    detail: 'Keep it short: use existing patterns, keep patches small, run the real checks, do not invent requirements.',
  },
  {
    icon: Files,
    title: 'Skills or reusable workflows',
    summary: 'Store detailed process here, not in every chat.',
    detail: 'How to write tests, how to structure migrations, how to release, how to debug a flaky integration test — that belongs in reusable workflow files.',
  },
  {
    icon: Terminal,
    title: 'Makefiles',
    summary: 'Expose battle-tested commands behind stable targets.',
    detail: 'Put targets like make test, make lint, and make build in the repository so agents and developers run the same documented commands instead of inventing their own.',
  },
  {
    icon: NotebookPen,
    title: 'Specs and TODOs',
    summary: 'Persist the task state in files.',
    detail: 'Acceptance criteria, open questions, current progress, and non-goals should survive a handoff. Chat history is not a durable source of truth.',
  },
  {
    icon: Scale,
    title: 'Repository examples',
    summary: 'Point to concrete files instead of re-describing architecture.',
    detail: 'If the codebase already shows the right pattern, use that example. Real code compresses more knowledge than another paragraph ever will.',
  },
  {
    icon: FileCheck,
    title: 'Validation checklist',
    summary: 'Write down which checks define done.',
    detail: 'List the exact tests, static analysis commands, builds, and CI gates. Otherwise somebody will eventually run the wrong thing and still claim success.',
  },
] as const;

export function Chapter3_CompressIntent() {
  return (
    <div id="chapter-3" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        <NotebookPen className="h-8 w-8 flex-shrink-0 text-blue-600 sm:h-10 sm:w-10" />
        3. Put the rules in the repository
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        Do not keep retyping the operating manual. Put the rules where the next session can reload them without your help.
      </p>

      <div className="space-y-5">
        {RULES.map(({ icon: Icon, title, summary, detail }) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <p className="mb-2 font-medium leading-relaxed text-gray-800">{summary}</p>
            <p className="leading-relaxed text-gray-700">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-red-100 bg-red-50 p-6">
        <h3 className="mb-2 font-bold text-red-900">What happens without this</h3>
        <p className="leading-relaxed text-red-800">
          Every new session starts with the same copy-pasted instructions, one version drifts, another version grows,
          and sooner or later the model follows the wrong copy. That is not sophistication. That is configuration drift
          in prose form.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm text-violet-900 shadow-sm sm:p-5">
        <strong className="text-violet-950">→ See also (Prompts view):</strong> Section 6 (Context Anchors) shows how a
        single compressed phrase like "TDD Detroit School" can reload an entire methodology — a practical extension of
        what belongs in Skills and AGENTS.md.
      </div>
    </div>
  );
}
