import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt10_Directness() {
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
                'This patch is incorrect.\nProblems:\n- public API changed\n- regression test missing\n- unrelated files modified\nDiscard it and restart with:\n1. failing test first\n2. minimal patch\n3. paste the validation output',
            },
          ]}
          note="The model does not interpret 'maybe reconsider' as a correction signal. It interprets it as soft approval. Name the violations, list them explicitly, and state the required restart conditions."
        />
        <PromptExampleStack
          title="Reject unsupported success claims"
          entries={[
            {
              label: 'Weak',
              tone: 'red',
              content: 'Looks good now, I think.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do not claim success yet.\nShow the exact command you ran, paste the raw output, and list what is still unverified.\nIf you skipped verification, say that explicitly and explain why.',
            },
          ]}
          note="Directness is not only for rejecting bad patches. It is also for rejecting unsupported confidence. Make the agent tie every success claim to observable evidence, and force it to name the remaining gaps instead of hand-waving past them."
        />

        <PromptExampleStack
          title="When validation fails, report the next safe step"
          entries={[
            {
              label: 'Weak',
              tone: 'red',
              content: 'Something still seems off, maybe try again.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'The check still fails.\nStop claiming success.\nSummarize the exact failing command, the concrete error, and the smallest next fix to try.\nIf you need more information before changing code again, state exactly what is missing.',
            },
          ]}
          note="A direct failure response prevents the agent from drifting into optimistic retries. It has to acknowledge the failed evidence, describe the smallest next step, and say what blocked further progress."
        />
      </div>
    </div>
  );
}
