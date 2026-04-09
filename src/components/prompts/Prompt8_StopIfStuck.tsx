import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt8_StopIfStuck() {
  return (
    <div id="prompt-7" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        7. Attention-Steering Prompts
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Good prompting is often less about adding context and more about steering attention toward the few signals that
        matter.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Limit the search space"
          entries={[
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Focus only on src/UserAccountService.php and tests/Unit/UserAccountServiceTest.php.\nIgnore unrelated modules unless you find direct evidence they are involved.',
            },
          ]}
          note="This stops the agent from burning time in unrelated files just because they are available."
        />

        <PromptExampleStack
          title="Point to the pattern source"
          entries={[
            {
              label: 'Best',
              tone: 'blue',
              content: 'Use AbstractValueObject and the existing immutable classes as the pattern source.',
            },
          ]}
          note="A pattern source tells the model exactly which examples deserve its attention."
        />
      </div>

      <p className="mt-8 leading-relaxed text-gray-700">
        This is not more context. It is better-targeted attention.
      </p>
    </div>
  );
}
