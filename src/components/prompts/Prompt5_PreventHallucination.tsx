import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt5_PreventHallucination() {
  return (
    <div id="prompt-5" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        5. Critical Review: Anti-Anchoring and Self-Correction
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Two patterns that flip the model out of agreement mode. Use both — they target different failure types.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Anti-anchoring — never call code final"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content: 'Here is the final implementation. Review it.',
            },
            {
              label: 'Better',
              tone: 'amber',
              content: 'Here is the code. What is wrong with it?',
            },
            {
              label: 'Best',
              tone: 'blue',
              content: 'Here is a first draft implementation.\nReview it critically, prove why it might fail under load, and improve it.',
            },
          ]}
          note="Calling even production-ready code a first draft breaks anchoring. It nudges the model to challenge the implementation instead of rubber-stamping it. 'Final' triggers reviewer mode. 'First draft' triggers engineer mode."
        />

        <PromptExampleStack
          title="Self-correction — prove yourself wrong"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content: 'Is this correct?',
            },
            {
              label: 'Better',
              tone: 'amber',
              content: 'Check for errors.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content: 'Prove yourself wrong.\nFind three reasons why this approach will fail in production.\nFor each failure mode, describe the exact scenario that triggers it.',
            },
          ]}
          note="'Is this correct?' invites a yes. 'Prove yourself wrong' forces adversarial thinking. This is one of the fastest ways to surface hidden production risks before they hit CI — or worse, production."
        />

        <PromptExampleStack
          title="Anti-rubber-stamp — challenge the polished draft"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content: 'Here is the final implementation. Review it.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content: 'Do not assume this solution is correct just because it looks polished.\nTreat it as a first draft.\nChallenge it: find the three most likely failure modes and the one design assumption that could be wrong.',
            },
          ]}
          note="Polished code anchors the next model into reviewer mode. Explicit anti-rubber-stamp prompts break that anchor and force adversarial thinking even on code that looks finished."
        />
      </div>
    </div>
  );
}
