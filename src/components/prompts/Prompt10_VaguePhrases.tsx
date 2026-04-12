import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt10_VaguePhrases() {
  return (
    <div id="prompt-10" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        10. Directness Beats Politeness
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Weak prompts hedge. Strong prompts correct.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">
        LLMs do not need emotional cushioning. They need unambiguous correction. Polite hedging does not make the output
        more careful — it makes the constraint easier to ignore.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Correcting a wrong implementation"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Maybe reconsider this implementation.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'This patch violates the task constraints.\n\nProblems:\n- public API changed\n- regression test missing\n- unrelated files modified\n\nDiscard it and restart with:\n1. failing test first\n2. minimal patch\n3. raw validator output',
            },
          ]}
          note="The model does not interpret 'maybe reconsider' as a correction signal. It interprets it as soft approval. Name the violations, list them explicitly, and state the required restart conditions."
        />

        <PromptExampleStack
          title="Stopping a hallucination"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'I think this could be improved. Maybe look at this again?',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'This is wrong.\n\nThe function does not exist in this codebase.\nDo not invent APIs.\nInspect the actual source, find the real method signature, and use that.',
            },
          ]}
          note="Soft corrections invite rationalization. Direct corrections with a clear next instruction eliminate it."
        />

        <PromptExampleStack
          title="Correcting scope drift"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Could be improved. The scope seems a bit broad.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Scope violation.\n\nYou modified three files that were not in the task scope.\nRevert everything outside the specified boundary.\nOnly touch: src/UserAccountService.php and its test.',
            },
          ]}
          note="If your agent only produces reliable output when given long encouraging paragraphs, your prompts are not robust — you have only made instability more comfortable to read."
        />
      </div>
    </div>
  );
}
