import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt6_ForceRootCause() {
  return (
    <div id="prompt-6" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        6. Add Self-Correction Prompts Explicitly
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Agreement mode is cheap. Adversarial review mode is where the useful failures show up.
      </p>

      <PromptExampleStack
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
            content: 'Prove yourself wrong.\nFind three reasons why this approach will fail in production.',
          },
        ]}
        note="This flips the model out of agreement mode and into self-critique. It is one of the fastest ways to surface hidden production risks."
      />
    </div>
  );
}
