import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt15_FinalThesis() {
  return (
    <div id="prompt-15" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        15. Final Thesis: Talk to Your Agent, Teach It to Learn
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Dedicated planning modes are useful — but you do not need them. The real leverage is in the conversation itself.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">
        Tools like the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">/planning</code> mode in Codex and similar agents are a helpful shortcut for structuring
        exploratory work. But they are not a requirement. You can achieve the same result — and often a better one — by
        simply talking with your coding agent: asking questions, checking assumptions, and letting it clarify the plan
        before it writes a single line of code.
      </p>

      <PromptExampleStack
        title="Planning mode vs. conversational planning"
        entries={[
          {
            label: 'With /planning mode',
            tone: 'amber',
            content:
              '/planning\nRefactor the authentication module to support OAuth2.',
          },
          {
            label: 'Conversational (same result)',
            tone: 'blue',
            content:
              'Do not implement yet.\nBefore you start, tell me:\n  • What files will you touch?\n  • What existing behavior must not change?\n  • What are the three main risks?\nWait for my confirmation before proceeding.',
          },
        ]}
        note="Both approaches separate planning from execution. The conversational version gives you an explicit checkpoint and works in any agent — no special mode required."
      />

      <div className="my-8 rounded-r-2xl border-l-4 border-violet-500 bg-violet-50 p-6 shadow-sm sm:p-8">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-violet-900">
          The key insight: LLMs do not learn on their own
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-violet-800">
          Every session starts from zero. The agent does not remember what worked last time, what you corrected, or what
          patterns your codebase prefers — unless you tell it explicitly.
        </p>
        <p className="text-base leading-relaxed text-violet-700">
          This means the investment you make in a good conversation must be captured somewhere durable. After a
          successful task, ask the agent to update your Skills file, your AGENTS.md, or your project's coding
          guidelines — so the next session starts from a higher baseline.
        </p>
      </div>

      <PromptExampleStack
        title="Capture learnings after a successful task"
        entries={[
          {
            label: 'Weak',
            tone: 'amber',
            content: 'Great, that worked. Thanks.',
          },
          {
            label: 'Best',
            tone: 'blue',
            content:
              'That worked well.\nUpdate the Skills file (or AGENTS.md) to record:\n  • the pattern we used\n  • the constraint that prevented the earlier mistake\n  • any new conventions discovered during this task\nSo the next session starts with this knowledge already loaded.',
          },
        ]}
        note="The agent will not remember this session tomorrow. You have to encode the learning into a file it can read next time. Treat every successful task as an opportunity to raise the floor for the next one."
      />

      <PromptExampleStack
        title="Ask questions before assuming"
        entries={[
          {
            label: 'Weak',
            tone: 'amber',
            content: 'Add the feature.',
          },
          {
            label: 'Best',
            tone: 'blue',
            content:
              'Before you start, ask me any questions you need to confidently complete this task.\nDo not assume. If something is ambiguous, surface it now.',
          },
        ]}
        note="An agent that asks one clarifying question before starting is almost always faster than one that implements the wrong thing and needs to be corrected twice."
      />

      <div className="mt-10 rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <div className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-300">Final thesis</div>
        <p className="text-xl font-medium leading-tight text-white sm:text-2xl">
          Good prompts do not simulate expertise. They allocate attention, constrain behavior, demand proof, and control
          stopping conditions.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-300">
          If your agent only produces useful output when surrounded by long motivational paragraphs, you have not built
          a reliable workflow — you have only made instability harder to notice.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-300">
          And because LLMs do not learn by themselves, the last step of every successful task is encoding what you
          discovered into a file the next session can read. Talk to your agent. Check its assumptions. Then make sure
          the knowledge survives the session.
        </p>
      </div>
    </div>
  );
}
