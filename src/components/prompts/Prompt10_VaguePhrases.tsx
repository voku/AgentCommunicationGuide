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
        title="Directness beats politeness — discard and restart"
        entries={[
          {
            label: 'Bad',
            tone: 'red',
            content: 'Maybe reconsider this implementation.',
          },
          {
            label: 'Best',
            tone: 'blue',
            content:
              'This patch is incorrect.\nProblems:\n- public API changed\n- regression test missing\n- unrelated files modified\nDiscard it and restart with:\n1. failing test first\n2. minimal patch\n3. paste the validation output',
          },
        ]}
        note="Polite hedging gives the agent permission to interpret, defer, or do nothing. A clear rejection with numbered restart instructions leaves no room for ambiguity. Agents respond far better to specific rejection criteria than to vague suggestions to 'reconsider'."
      />

      <PromptExampleStack
        title="Stopping condition — vague vs. operational"
        entries={[
          {
            label: 'Bad',
            tone: 'red',
            content:
              'You might want to stop if something seems wrong, maybe after a few retries or so.',
          },
          {
            label: 'Best',
            tone: 'blue',
            content:
              'If the build fails three times in a row, stop.\nDo not attempt a fourth fix.\nSummarize the root cause and list what is still unknown.',
          },
        ]}
        note="'Maybe' stopping conditions are not stopping conditions. Write them as exact thresholds with exact actions."
      />
    </div>
  );
}
